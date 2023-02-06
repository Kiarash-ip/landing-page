import React from "react";

export default function CooperationContent() {
  return (
    <div className="md:w-1/2 w-full flex flex-col gap-10 py-5 md:px-10 items-start">
      <h3 className="text-typo text-4xl">Make your room feel homey</h3>
      <p className="text-lg text-typo font-light">
        We help people not only to make the room at home better, but we help
        people to feel a more homey and comfortable room, you don’t have to
        worry about the result because of these interiors are made by people who
        are professionals in their dields with an elegant and lucuriois style
        and with premium quality materials
      </p>
      <p className="text-lg text-typo font-light">
        Contact us if you are interested in working with us
      </p>
      <div className="border border-secondary border-full flex items-center p-2 pl-4 rounded-full">
        <input
          type="text"
          className="reset-default text-secondary_dark placeholder:text-secondary_dark"
          placeholder="Insert your email address"
        />
        <img src="/images/button search-2.svg" />
      </div>
    </div>
  );
}
