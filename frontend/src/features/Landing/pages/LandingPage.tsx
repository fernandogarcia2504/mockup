import { Navbar } from "../../../components/layout/Navbar";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Footer } from "../../../components/layout/Footer";
import { Accounts } from "../components/Accounts";
import Mobile from "../components/Mobile";
import Fraude from "../components/Fraude";
import Divisas from "../components/Divisas";
import Experience from "../components/Experience";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 ">
      <Navbar />

      <main>
        <Hero />
        <Products />
        <Accounts />
        <Mobile />
        <Fraude />
        <div className="w-full items-center justify-center flex">
          <Divisas />
        </div>
        <Experience />

      </main>

      <Footer />

    </div>
  );
}

//#17a54d