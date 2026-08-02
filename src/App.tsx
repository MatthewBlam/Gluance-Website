import { CallToAction } from "./components/CallToAction";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StructuredData } from "./components/StructuredData";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="features" className="max-w-screen-lg mx-auto mt-20 flex flex-col gap-4 bg-panel rounded-3xl p-8">
          <Features />
          <CallToAction />
        </section>
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
