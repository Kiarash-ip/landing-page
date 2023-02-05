import React from "react";

const footerItemsArray = [
  {
    id: 0,
    title: "Features",
    children: [
      {
        id: 0,
        title: "Our Features",
      },
      {
        id: 1,
        title: "Pricing",
      },
      {
        id: 2,
        title: "Affiliate Program",
      },
      {
        id: 3,
        title: "Press Kit",
      },
    ],
  },
  {
    id: 1,
    title: "Support",
    children: [
      {
        id: 0,
        title: "Account",
      },
      {
        id: 1,
        title: "Help",
      },
      {
        id: 2,
        title: "Contact Us",
      },
    ],
  },
  {
    id: 2,
    title: "Legal",
    children: [
      {
        id: 0,
        title: "Privacy Policy",
      },
      {
        id: 1,
        title: "Terms of  Use",
      },
    ],
  },
  {
    id: 3,
    title: "Social Media",
    children: [
      {
        id: 0,
        title: "Twitter",
      },
      {
        id: 1,
        title: "Product Hunt",
      },
      {
        id: 2,
        title: "Instagram",
      },
      {
        id: 3,
        title: "Github  ",
      },
    ],
  },
];

export default function FooterSection() {
  return (
    <div className="bg-footer">
      <div className="container mx-auto flex justify-between py-20 items-start">
        <img src="/images/logo.svg" className="w-[200px]" />
        {footerItemsArray.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-5">
              <h3 className="text-2xl text-secondary">{item.title}</h3>
              <ul className="flex flex-col gap-5">
                {item.children.map((subItem) => {
                  return (
                    <li
                      key={subItem.id}
                      className="text-white text-lg cursor-pointer"
                    >
                      <a href="#">{subItem.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
