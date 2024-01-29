import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import SearchSection from "./components/SearchSection";
import { books } from "./data/books";

export default function App() {
  const [allBooks, setAllBooks] = useState(books);
  function hnadleSearch(keyword) {
    const result = allBooks.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setAllBooks([...result]);
  }

  function handleFavorate(bookId) {
    const bookIndex = allBooks.findIndex((book) => book._id === bookId);
    const newBooks = [...allBooks];
    newBooks[bookIndex].isFavorate = !newBooks[bookIndex].isFavorate;
    setAllBooks(newBooks);
  }
  return (
    <>
      <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
        <Header />
        <main className="my-10 lg:my-14">
          <SearchSection onSearch={hnadleSearch} />
          <ProductSection allBooks={allBooks} handleFavorate={handleFavorate} />
        </main>
        <Footer />
      </div>
    </>
  );
}
