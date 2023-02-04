import React, { useState } from "react";

export default function AccordionItem({ title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-typo">{title}</span>
        <div className="cursor-pointer flex items-center justify-center w-[10px] h-[10px]">
          <span
            className="text-main text-3xl"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            {open ? "-" : "+"}
          </span>
        </div>
      </div>
      <div
        className=" transition-all transition-400 ease-in-out flex items-center w-4/5"
        style={{ height: `${open ? "90px" : "0"}`, overflow: "hidden" }}
      >
        <p className="text-typo text-lg">{desc}</p>
      </div>
    </div>
  );
}
