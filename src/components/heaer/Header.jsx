import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Header() {
  return (
    <div className='h-[100vh] w-full relative'>
        <Swiper
            className='h-full w-full'
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {[1,2,3].map(pic => {
                    return <SwiperSlide key={pic} className='h-full h-full'><img className='h-full w-full object-cover' src='/images/Mask Group.png'/></SwiperSlide>

                })}
        </Swiper>
        <div className='absolute-center flex flex-col z-10 gap-14 w-[600px] text-center items-center'>
            <h1 className='text-5xl text-white leading-relaxed'>Make Your Interior More Minimaistic & Modern</h1>
            <h3 className='text-center text-white text-xl'>Bringing interiors to life, understanding the person or people living in a home is far greater need in design</h3>
            <div className='w-3/5 border border-white rounded-full flex items-center py-1 pl-4 pr-2 bg-white bg-opacity-50'>
            <input type="text" className='reset-default placeholder:text-white text-left grow text-white' placeholder='Search Furniture'/>
                <img src='/images/button search.svg' className='w-[50px] h-[50px]'/>
            </div>
        </div>
    </div>
  )
}
