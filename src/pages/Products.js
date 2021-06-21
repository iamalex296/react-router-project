import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/product-detail/p1">A Book</Link>
        </li>
        <li>
          <Link to="/product-detail/p2">A Ball</Link>
        </li>
        <li>
          <Link to="/product-detail/p3">A Car</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
