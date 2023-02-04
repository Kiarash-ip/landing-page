import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionVisual from "./AccordionVisual";

export default function AccordionSection() {
  return (
    <div className="container mx-auto flex gap-5">
      <AccordionContent />
      <AccordionVisual />
    </div>
  );
}
