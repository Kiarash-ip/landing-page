import React from "react";
import ProductCard from "./ProductCard";

const productsArray = [
  {
    id: 0,
    image: "1",
    title: "Product",
    category: "Category",
    stars: 5,
    price: 795.0,
  },
  {
    id: 0,
    image: "2",
    title: "Product",
    category: "Category",
    stars: 5,
    price: 795.0,
  },
  {
    id: 0,
    image: "3",
    title: "Product",
    category: "Category",
    stars: 3,
    price: 795.0,
  },
  {
    id: 0,
    image: "4",
    title: "Product",
    category: "Category",
    stars: 4,
    price: 795.0,
  },
];

export default function Products() {
  return (
    <div className="container mx-auto flex flex-col gap-5 py-20 px-4 items-center">
      <h3 className="text-4xl text-typo py-10">Featured Product</h3>
      <div className="grid grid-cols-2 gap-4 justify-center lg:grid-cols-3 xl:grid-cols-4">
        {productsArray.map((p) => {
          return <ProductCard card={p} />;
        })}
      </div>
    </div>
  );
}
