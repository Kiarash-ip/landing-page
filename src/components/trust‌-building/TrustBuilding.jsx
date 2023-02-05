import React from "react";
import CardComp from "./CardComp";

const cardsArray = [
  {
    id: 1,
    icon: 1,
    title: "Professionalism",
    desc: "We deliver the final work with great professional way.",
  },
  {
    id: 2,
    icon: 2,
    title: "Smooth workflow",
    desc: "We provide the most easy smoth workflow of interior design.",
  },
  {
    id: 3,
    icon: 3,
    title: "Trusted Platform",
    desc: "People trust us since we openend the company",
  },
  {
    id: 4,
    icon: 4,
    title: "Qualified employee",
    desc: "Our employees are the best of the field from the city",
  },
];

export default function TrustBuilding() {
  return (
    <div className="container mx-auto flex flex-col gap-4 py-20">
      <h4 className="text-4xl text-typo">Why Choosing Us</h4>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
        {cardsArray.map((card) => (
          <CardComp card={card} />
        ))}
      </div>
    </div>
  );
}
