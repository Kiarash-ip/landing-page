import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionVisual from "./AccordionVisual";

export default function AccordionSection() {
  return (
    <div className="container mx-auto flex  flex-col-reverse gap-5 lg:flex-row px-4">
      <AccordionContent />
      <AccordionVisual />
    </div>
  );
}
