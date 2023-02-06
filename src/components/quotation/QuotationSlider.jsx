import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QuotationTemplate from "./QuotationTemplate";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

const quotationArray = [
  [
    {
      title: "Best planning service",
      desc: "I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.",
      username: "John doe",
      position: "Project manager of cupalo",
      avatar: "/images/avatar-1.png",
    },
    {
      title: "Flexible and reliable",
      desc: "Terrific work from beginning to end can work any angle from minimal help to complete project handling professional without a doubt!  Love!",
      username: "Woods Moniq",
      position: "Freelancer",
      avatar: "/images/avatar-2.png",
    },
    {
      title: "solution innovative",
      desc: "I loved working with Darla shady rhymes for about 2 years and highly recommend anyone looking for an interior designer agency who brings creativity but designs something that fits YOU and your style.",
      username: "Denis Rara",
      position: "Architect at BPPLU",
      avatar: "/images/avatar-3.png",
    },
  ],
  [
    {
      title: "Best planning service",
      desc: "I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.",
      username: "John doe",
      position: "Project manager of cupalo",
      avatar: "/images/avatar-1.png",
    },
    {
      title: "Flexible and reliable",
      desc: "Terrific work from beginning to end can work any angle from minimal help to complete project handling professional without a doubt!  Love!",
      username: "Woods Moniq",
      position: "Freelancer",
      avatar: "/images/avatar-2.png",
    },
    {
      title: "solution innovative",
      desc: "I loved working with Darla shady rhymes for about 2 years and highly recommend anyone looking for an interior designer agency who brings creativity but designs something that fits YOU and your style.",
      username: "Denis Rara",
      position: "Architect at BPPLU",
      avatar: "/images/avatar-3.png",
    },
  ],
];

export default function QuotationSlider() {
  return (
    <div className="container my-20 relative md:h-[350px] h-[unset]">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="quotation-swiper h-full"
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {quotationArray.map((q) => {
          return (
            <SwiperSlide>
              <QuotationTemplate part={q} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
