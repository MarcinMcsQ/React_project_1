import React from "react";
import { Link } from "react-router-dom";
import Product from "../component/Product";

const ProductPage = (props) => {
  console.log(props);

  return (
    <>
      <div>Strona produktu</div>
      <Product id={props.match.params.id} />
      <Link to={"/products"}>Powrt do listy produktw</Link>
    </>
  );
};

export default ProductPage;
