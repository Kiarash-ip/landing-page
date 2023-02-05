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
    <div className="container mx-auto flex flex-col gap-5 py-20 items-center">
      <h3 className="text-4xl text-typo py-10">Featured Product</h3>
      <div className="flex items-center flex-wrap gap-4">
        {productsArray.map((p) => {
          return <ProductCard card={p} />;
        })}
      </div>
    </div>
  );
}
