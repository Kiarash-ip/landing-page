import React from "react";

export default function CardComp({ card: { icon, title, desc } }) {
  return (
    <div className="bg-card flex flex-col justify-between items-start w-full gap-5  hover:shadow-lg hover:shadow-main py-6 px-3 transition-all duration-300	ease-in-out rounded-md">
      <img src={`/images/icon-${icon}.svg`} className="h-[60px]" />
      <h5 className="text-typo text-lg">{title}</h5>
      <p className="text-typo text-lg">{desc}</p>
      <a className="text-main">more info</a>
    </div>
  );
}
