import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import DC from "../assets/cards.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import { Button } from "@material-tailwind/react";
import "../App.scss";
const Congrats = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className="bg-white p-6 flex flex-col items-center gap-3 h-screen w-screen ">
      <div className="text-center mt-8">
        <h1 className="text-3xl mb-5 font-bold text-[##333333] congs-text lg:text-6xl lg:mb-[80px]">
          Congratulations!!
        </h1>
        <h3 className="mt-2 font-semibold text-wrap lg:text-2xl lg:mb-[40px]">
          You're now a part of an elite community!
        </h3>
      </div>
      <div className="grid gird-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-10 lg:mb-[25px]">
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

        <div className="bg-[#F4F4F4] p-2 rounded-xl h-[162px] w-[250px] lg:h-[200px] lg:w-[307px] shadow-lg">
          <div className="box text-center h-full p-2 lg:text-2xl">
            <h1 className="text-xl font-semibold mb-4 mt-2 lg:text-2xl">
              Exclusive Perks
            </h1>
            <p className="text-sm text-[#0D0D0D] lg:text-[16px]">
              As an early adopter, you're in for exclusive discounts and
              privileges. Stay tuned for BTS updates and launch discounts!
            </p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] p-2 rounded-xl h-[158px] w-[250px] lg:h-[200px] lg:w-[307px] shadow-lg ">
          <div className="box text-center h-full">
            <h1 className="text-xl font-semibold mb-4 mt-2 lg:text-2xl">
              Inbox Incoming
            </h1>
            <p className="text-sm text-[#0D0D0D] lg:text-[16px] font-normal">
              Keep an eye on your email for exclusive updates, early access
              notifications, and exciting announcements.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-sm lg:text-xl text-center lg:mb-[10px] ">
        We can't wait to embark on this financial adventure with you!{" "}
      </h1>
      <button className="text-md text-[#3C8EEE] lg:text-xl">Understood</button>
    </div>
  );
};

export default Congrats;
