import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
SwiperCore.use([Pagination, Autoplay]);

export default function Header() {
  return (
    <div className="h-[100vh] w-full relative">
      <Swiper
        className="h-full w-full header-swiper"
        modules={[Pagination]}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3].map((pic) => {
          return (
            <SwiperSlide key={pic} className="h-full h-full">
              <img
                className="h-full w-full object-cover"
                src="/images/Mask Group.png"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute-center flex flex-col z-10 gap-14 max-w-[600px] w-[70%] text-center items-center">
        <h1 className="text-lg text-white font-semibold leading-relaxed sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl">
          Make Your Interior More Minimaistic & Modern
        </h1>
        <h3 className="md:text-lg text-center text-white text-xs sm:text-xs">
          Bringing interiors to life, understanding the person or people living
          in a home is far greater need in design
        </h3>
        <div className="w-full max-w-[400px] border border-white rounded-full flex items-center py-1 pl-4 pr-2 bg-white bg-opacity-50">
          <input
            type="text"
            className="reset-default placeholder:text-white text-left grow text-white"
            placeholder="Search Furniture"
          />
          <img src="/images/button search.svg" className="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>
  );
}
