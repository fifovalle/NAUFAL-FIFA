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
    <Swiper
      loop={false}
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="w-full max-w-77.5 md:max-w-130 bg-secondary rounded-lg"
      onSlideChangeTransitionStart={() => setIsDragging(false)}
    >
      {testimonial.map((person, index) => (
        <SwiperSlide key={index}>
          <div
            className={`flex px-8 py-6 gap-8 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
            <div className="flex flex-col gap-2">
              <p>{person.message}</p>
              <p className="self-end text-accent font-semibold">
                {person.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
