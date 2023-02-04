import React from "react";
import AccordionItem from "./AccordionItem";

const accordionContentArray = [
  {
    id: 0,
    title: "Modern",
    desc: "Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.",
  },
  {
    id: 1,
    title: "Contemporary",
    desc: "Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.",
  },
  {
    id: 1,
    title: "Industrial",
    desc: "Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.",
  },
];

export default function AccordionContent() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h3 className="text-4xl text-typo">Visualize your ideas with us</h3>
      <p className="text-lg text-typo">
        We are ready to help you build and also realize the room design that you
        dream of, with our experts and also the best category recommendations
        from us
      </p>
      <div className="mb-auto flex flex-col gap-4">
        {accordionContentArray.map((item) => (
          <AccordionItem key={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>
      <a className="text-main mb-4 cursor-pointer">See more category</a>
    </div>
  );
}
