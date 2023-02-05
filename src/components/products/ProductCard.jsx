import React from "react";

export default function ProductCard({
  card: { title, category, image, price, stars },
}) {
  return (
    <div className="min-w-[250px] max-w-[350px]">
      <img src={`/images/image-${image}.png`} className="w-[100%]" />
      <div className="flex flex-col p-6 gap-4">
        <h5 className="text-lg text-typo">{title}</h5>
        <span className="text-sm text-[#C4C4C4]">{category}</span>
        <div className="flex items-center">
          {new Array(stars).fill(undefined).map((star) => (
            <img src="/images/Star.svg" />
          ))}
        </div>

        <span className="text-sm text-typo">IDR {price}</span>
      </div>
    </div>
  );
}
