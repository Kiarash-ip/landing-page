import React from "react";
import CooperationContent from "./CooperationContent";
import CooperationVisual from "./CooperationVisual";

export default function CooperationSection() {
  return (
    <div className="container mx-auto flex md:flex-row flex-col gap-5 py-20 px-4">
      <CooperationVisual />
      <CooperationContent />
    </div>
  );
}
