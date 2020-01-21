import React from "react";

function ProductPreview(props) {
  console.log(props);
  return (
    <div>
      <img src={props.productImage} alt="Product Image" />
      <h3>{props.productName}</h3>
      <h4>{props.productType}</h4>
      <h4>{props.price}</h4>
      <button onClick={() => props.setShowTitle(true)}>Toggle Title</button>
    </div>
  );
}

export default ProductPreview;
