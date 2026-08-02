import { useEffect, useRef, useState } from "react";
import { APP_NAME } from "../config";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  // Keep the icon honest when playback changes outside the button (looping,
  // tab backgrounding, the browser refusing autoplay).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sync = () => setPaused(video.paused);
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }

    sync();
    return () => {
      video.removeEventListener("play", sync);
      video.removeEventListener("pause", sync);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play();
  };

  return (
    <div className="group relative w-full max-w-screen-lg mt-10 md:mt-20">
      <video
        ref={videoRef}
        src="/demo.mp4"
        poster="/demo-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="block w-full h-auto rounded-2xl"
        aria-label={`${APP_NAME} app demo`}
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={paused ? "Play demo" : "Pause demo"}
          className="bg-app-text/70 hover:bg-app-text/90 text-page w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-colors cursor-pointer">
          {paused ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={restart}
          aria-label="Restart demo"
          className="bg-app-text/70 hover:bg-app-text/90 text-page w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-colors cursor-pointer">
          <svg className="w-4 h-4" fill="none" strokeWidth={3} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
