import React from "react";

const BrandsTrustedLogos = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </li>
      ))}
    </>
  );
};

export default BrandsTrustedLogos;
