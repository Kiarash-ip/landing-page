import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    function scrollHandler(e) {
      setScrolled(document.documentElement.scrollTop);
    }
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div
      className={`fixed z-10 py-5 px-4 top-0 left-0 right-0 transition-all transition-300 ${
        scrolled > 80 ? "bg-[#00000080]" : "bg-[unset]"
      }`}
    >
      <div className="container flex mx-auto flex">
        <img src="/images/logo.svg" className="w-[120px] mr-[auto]" />
        <ul
          className={`flex gap-10 items-center absolute flex-col right-[16px] z-30 top-full bg-white md:max-h-[unset] rounded-md transition-all ease-in-out transition-300 md:flex-row md:bg-[unset] md:static md:p-[unset] w-[200px] md:w-[unset] overflow-hidden ${
            open ? "max-h-[250px]" : "max-h-[0]"
          }`}
        >
          <li className="md:text-white text-typo pt-3 md:p-[unset]">
            Furniture
          </li>
          <li className="md:text-white text-typo">Shop</li>
          <li className="md:text-white text-typo">About Us</li>
          <li className="md:text-white text-typo pb-3 md:p-[unset]">Contact</li>
        </ul>
        <img src="/images/basket.svg" className="w-[30px] ml-[auto]" />
        <div
          className="flex-col gap-2 flex md:hidden justify-center ml-3"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <div className="w-[25px] bg-white h-[2px]"></div>
          <div className="w-[25px] bg-white h-[2px]"></div>
          <div className="w-[25px] bg-white h-[2px]"></div>
        </div>
      </div>
    </div>
  );
}
