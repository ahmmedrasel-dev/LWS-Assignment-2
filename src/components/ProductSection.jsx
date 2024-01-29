import Product from "./products/Product";

function ProductSection({ allBooks }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allBooks.map((book) => (
        <Product key={book._id} book={book} />
      ))}
    </div>
  );
}

export default ProductSection;
