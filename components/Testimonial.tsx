"use client";

import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonial } from "@/constants/testimonial";

const Testimonial = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full px-4 md:px-0">
      <Swiper
        loop={false}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full max-w-[320px] sm:max-w-100 md:max-w-130 lg:max-w-150 xl:max-w-155 bg-secondary rounded-lg mx-auto"
        onSlideChangeTransitionStart={() => setIsDragging(false)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {testimonial.map((person, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col sm:flex-row px-4 sm:px-6 md:px-8 py-4 sm:py-6 gap-4 sm:gap-6 md:gap-8 ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              <ImQuotesLeft className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent shrink-0" />
              <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {person.message}
                </p>
                <p className="self-end text-accent font-semibold text-sm sm:text-base">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
