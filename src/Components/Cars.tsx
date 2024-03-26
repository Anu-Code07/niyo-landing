import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import BothCard from "../assets/bothcards.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousle = ({}) => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        initialSlide={2}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-2 rounded-xl h-[158px] w-[250px] lg:h-[200px] lg:w-[307px] shadow-lg">
            <div className="box text-center h-full">
              <h1 className="text-xl font-semibold mb-4 mt-2 lg:text-2xl">
                What’s Next?
              </h1>
              <p className="text-sm text-[#0D0D0D] lg:text-[16px]">
                Be the first to experience seamless transactions and innovative
                solutions. We'll reach out when our product is ready.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F4F4F4] p-2 rounded-xl h-[158px] w-[250px] lg:h-[200px] lg:w-[307px] shadow-lg">
            <div className="box text-center h-full">
              <h1 className="text-xl font-semibold mb-4 mt-2 lg:text-2xl">
                What’s Next2?
              </h1>
              <p className="text-sm text-[#0D0D0D] lg:text-[16px]">
                Be the first to experience seamless transactions and innovative
                solutions. We'll reach out when our product is ready.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousle;
