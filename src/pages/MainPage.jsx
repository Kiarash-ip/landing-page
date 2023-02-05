import React from "react";
import AccordionSection from "../components/accordionSection/AccordionSection";
import Header from "../components/heaer/Header";
import Navbar from "../components/navigation/Navbar";
import Products from "../components/products/Products";
import TrustBuilding from "../components/trust‌-building/TrustBuilding";
import QuotationSection from "../components/quotation/QuotationSection";
import CooperationSection from "../components/cooperation/CooperationSection";
import FooterSection from "../components/footer/FooterSection";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <TrustBuilding />
      <AccordionSection />
      <Products />
      <QuotationSection />
      <CooperationSection />
      <FooterSection />
    </div>
  );
}
