import React from "react";
import CooperationContent from "./CooperationContent";
import CooperationVisual from "./CooperationVisual";

export default function CooperationSection() {
  return (
    <div className="container mx-auto flex gap-5 py-20">
      <CooperationVisual />
      <CooperationContent />
    </div>
  );
}
