import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import SearchSection from "./components/SearchSection";

export default function App() {
  return (
    <body className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Header />
      <main className="my-10 lg:my-14">
        <SearchSection />
        <ProductSection />
      </main>
      <Footer />
    </body>
  );
}
