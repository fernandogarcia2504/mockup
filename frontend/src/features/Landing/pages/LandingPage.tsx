import { Navbar } from "../../../components/layout/Navbar";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Footer } from "../../../components/layout/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />

      <main>
        <Hero />
        <Products />
      </main>

      <Footer />
    </div>
  );
}

//#17a54d