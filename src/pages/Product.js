import { Link } from "react-router-dom";

const ProductData = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

function Product() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {ProductData.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
