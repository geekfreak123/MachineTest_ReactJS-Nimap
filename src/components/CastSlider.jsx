// src/components/CastSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { IMAGE_BASE_URL } from "../utils/constants";

const CastSlider = ({ cast }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={5}>
      {cast.map((member) => (
        <SwiperSlide key={member.id}>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-24 h-24"
              src={`${IMAGE_BASE_URL}${member.profile_path}`}
              alt={member.name}
            />
            <p className="text-center mt-2">{member.name}</p>
            <p className="text-center text-sm">{member.character}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CastSlider;
