import React from "react";
import QuotationSlider from "./QuotationSlider";

export default function QuotationSection() {
  return (
    <div className="bg-quotation">
      <div className="container mx-auto flex flex-col pt-20 px-4 items-center">
        <h3 className="text-4xl text-typo">What they say about our services</h3>
        <QuotationSlider />
      </div>
    </div>
  );
}
