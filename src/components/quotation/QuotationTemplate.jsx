import React from "react";

export default function QuotationTemplate({ part }) {
  return (
    <div className="grid md:grid-cols-3 md:gap-6 gap-16 grid-cols-1">
      {part.map((q) => {
        return (
          <div
            key={q.title}
            className="flex flex-col md:mx-5 gap-6 w-full md:max-h-[550px]"
          >
            <h4 className="text-2xl text-typo font-normal md:mb-3 ">
              {q.title}
            </h4>
            <p className="text-typo text-lg leading-9">{q.desc}</p>
            <div className="flex items-center gap-2 mt-[auto]">
              <img src={q.avatar} className="w-[60px] h-[60px]" />
              <div className="flex flex-col ">
                <h6 className="text-lg text-typo text-bold">{q.username}</h6>
                <span className="text-sm text-typo font-light">
                  {q.position}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
