import React from "react";
import AccordionSection from "../components/accordionSection/AccordionSection";
import Header from "../components/heaer/Header";
import Navbar from "../components/navigation/Navbar";
import TrustBuilding from "../components/trust‌-building/TrustBuilding";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <TrustBuilding />
      <AccordionSection />
    </div>
  );
}
