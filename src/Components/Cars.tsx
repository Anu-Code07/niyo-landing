import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BothCard from "../assets/bothcards.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousle = ({}) => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      style={{
        borderRadius: "10px",
        margin: "3rem 0",
        width: "100%",
        textAlign: "center",
        display: "none",
      }}
    >
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSlideChange={(e) => {
          console.log(e.activeIndex);
          setCurrentSlide(e.activeIndex);
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        id="swiperS"
        ref={swiperRef}
      >
        <SwiperSlide
          style={{
            position: "relative",
          }}
        >
          <div className="plane-img" style={{}}></div>
          <div className="cards-heading">
            <div className="heading-text-container">
              <h1>Your ticket to Currrent-cy</h1>
              <p>Redefine convenience with Niyo</p>
            </div>
          </div>
          <div className="dc-image-swiper">
            <img src={BothCard} alt="" />
          </div>
          <div className="cards-footer">
            <div className="footer-text-container">
              <p>Unleash the boundless power of our</p>
              <h1>Niyo Debit Card</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards-heading">
            <div className="heading-text-container">
              <h1>Travel Agents</h1>
              <p>Redefine convenience with Niyo</p>
            </div>
          </div>
          <div className="dc-image-swiper">
            <img src={BothCard} alt="" />
          </div>
          <div className="cards-footer">
            <div className="footer-text-container">
              <p>
                Streamline and optimise your bookings for flights, hotels, and
                experiences with cost-effective international transactions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards-heading">
            <div className="heading-text-container">
              <h1>VISA Consultants</h1>
              <p>Redefine convenience with Niyo</p>
            </div>
          </div>
          <div className="dc-image-swiper">
            <img src={BothCard} alt="" />
          </div>
          <div className="cards-footer">
            <div className="footer-text-container">
              <p>
                Simplify and enhance the payment experiences for your clients,
                ensuring seamless global transactions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards-heading">
            <div className="heading-text-container">
              <h1>Education Consultant</h1>
              <p className="small-zig-zag">Redefine convenience with Niyo</p>
            </div>
          </div>
          <div className="dc-image-swiper">
            <img src={BothCard} alt="" />
          </div>
          <div className="cards-footer">
            <div className="footer-text-container">
              <p>
                Facilitate smooth and efficient global education fee payments
                for your clients.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cards-heading">
            <div className="heading-text-container">
              <h1>Businesses</h1>
              <p>Redefine convenience with Niyo</p>
            </div>
          </div>
          <div className="dc-image-swiper">
            <img src={BothCard} alt="" />
          </div>
          <div className="cards-footer">
            <div className="footer-text-container">
              <p>
                Facilitate smooth and efficient global education fee payments
                for your clients.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="button-homepage modify">Register Now</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <p className={`nav-dots ${currentSlide == 0 ? "active" : ""}`}></p>
        <p className={`nav-dots ${currentSlide == 1 ? "active" : ""}`}></p>
        <p className={`nav-dots ${currentSlide == 2 ? "active" : ""}`}></p>
        <p className={`nav-dots ${currentSlide == 3 ? "active" : ""}`}></p>
        <p className={`nav-dots ${currentSlide == 4 ? "active" : ""}`}></p>
      </div>
    </div>
  );
};

export default Carousle;
