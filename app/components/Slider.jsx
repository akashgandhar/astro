"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[ Autoplay]}
        loop={true}
        className="mySwiper "
        style={{ height: "60vh" }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}

      >
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/1.jpg')] "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/2.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/3.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/4.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-screen bg-cover bg-no-repeat bg-[url('/slider/2.jpg')]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
