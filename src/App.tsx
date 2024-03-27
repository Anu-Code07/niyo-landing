import { useEffect, useState, useRef, useContext } from "react";
import "./App.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { isMobile } from "mobile-device-detect";
import OverLayCoin from "./assets/currency.png";
import Logo from "./assets/logo.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardFront from "./assets/card-front.png";
import CardBack from "./assets/card-back.png";

import { Button } from "@material-tailwind/react";
import BothCard from "./assets/bothcards.png";
import LeadForm from "./Components/LeadForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import GlobeF from "./assets/earthfinal.gif";
import Plane from "./assets/plane (1).png";
import Dollar from "./assets/dol.png";
import E from "./assets/e.png";
import Euro from "./assets/euro.png";
import W from "./assets/w.png";
import Yen from "./assets/yen.png";
import Ruppe from "./assets/ruppe.png";
import VisaStamp from "./assets/stamp.svg";
import DesktopModal from "./Components/DesktopModal";
import DialogVerify from "./Components/MyModal";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import rocketgif from "./assets/rocketrot.gif";
import Loader from "./Components/Loader";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 678px)" });
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const [swiperRefs, setSwiperRefs] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const swiperRef = useRef<any>();

  useGSAP(() => {
    const homeTl = gsap.timeline({
      defaults: {
        duration: 0.8,
        stagger: 0.2,
      },
    });

    homeTl
      .from(".moveup", {
        y: 50,
        opacity: 0,
      })
      .from(".overlay-image", {
        opacity: 0,
        y: -100,
      })
      .to(".moveup", {
        y: 0,
        opacity: 1,
      })
      .to(".overlay-image", {
        opacity: 1,
        y: 0,
      });

    const swiperTl = gsap.timeline({
      defaults: {
        duration: 0.5,
      },
      scrollTrigger: {
        start: "center center",
        trigger: "#banner_page",
        end: "bottom 20%",
      },
    });

    swiperTl
      .from(".animate-swiper", {
        opacity: 0,
        x: -500,
      })
      .from(".anim-img", {
        scale: 0.8,
      })
      .from(".anim-text", {
        opacity: 0,
        y: -50,
      })
      .to(
        ".anim-text",
        {
          opacity: 1,
          y: 0,
        },
        "-=0.5"
      )
      .to(".animate-swiper", {
        opacity: 1,
        x: 0,
      })

      .to(
        ".anim-img",
        {
          scale: 1,
        },
        "+=0.6"
      )
      .from(
        ".anim-c",
        {
          opacity: 0,
          scale: 0.7,
        },
        "-=0.5"
      )
      .to(
        ".anim-c",
        {
          opacity: 1,
          scale: 1,
          rotateY: 360,
        },
        "-=0.5"
      )
      .to(
        ".anim-c",
        {
          duration: 0.8,
          rotateY: 0,
        },
        "-=0.8"
      )
      .add(() => {
        setShouldAutoPlay(true);
      });

    // gsap.to(".rot-i", {
    //   rotate: 360,
    //   duration: 0.8,
    //   repeat: -1,
    //   transformOrigin: "top 50%",
    // });
    const planeTl = gsap.timeline({
      defaults: {
        duration: 1,
        repeat: -1,
        repeatDelay: 5,
      },
    });
    planeTl
      .from(".plane", {
        opacity: 0,
        left: "17%",
        rotate: -20,
      })

      .to(".plane-a", {
        opacity: 1,
        rotate: -10,
        ease: "power1",
      });

    const stamplTl = gsap.timeline({
      defaults: {
        duration: 0.8,
        repeat: -1,
        repeatDelay: 1,
        stagger: 0.8,
      },
    });
    stamplTl
      .from(".ani-stamp", {
        opacity: 0,
      })
      .to(".ani-stamp", {
        opacity: 1,
      });

    const rocket = gsap.timeline({
      defaults: {
        repeat: -1,
        duration: 0.5,
      },
    });
  });
  useEffect(() => {
    if (shouldAutoPlay) {
      swiperRefs?.autoplay?.start();
    }
  }, [shouldAutoPlay]);

  return (
    <div className="relative">
      <nav className="bg-white h-[6vh] shadow-sm md:h-[8vh] md:p-4 md:shadow-md lg:h-[8vh] lg:p-4 lg:shadow-md p-2">
        <img src={Logo} alt="" className="" />
      </nav>
      <main className="w-screen overflow-x-hidden">
        <section
          id="banner_page"
          className="h-[95vh] lg:h-[92vh] md:h-[92vh] w-screen  
          flex justify-center align-middle
          p-5
          lg:p-20
          md:p-10 text-[#262525]
          "
        >
          <div className="overlay-image">
            <img
              src={OverLayCoin}
              className="h-[75%] md:h-full lg:h-full w-full object-contain aspect-square p-2 lg:p-4 overlay-coins"
            />
          </div>
          <div className="banner_text absolute top-[30%] text-center moveup">
            <h1 className="text-[#262525]  text-5xl font-bold lg:text-8xl font-inter drop-shadow-md cursor-scale">
              ZERO <span className="text-[#129283]">FOREX</span>
            </h1>
            <p className="text-2xl lg:text-3xl lg:mt-1 font-bold drop-shadow-md moveup">
              on every transaction with{" "}
            </p>
            <h3 className="text-3xl lg:text-4xl lg:mt-1 font-extrabold drop-shadow-md moveup">
              Niyo Debit Card
            </h3>
            <div className="p-2 text-center moveup">
              <p className="mt-4 mb-2 text-[#333333]">
                Accepted globally for 100+ currencies including INR
              </p>
            </div>
            <button
              className=" bg-[#129283] text-white
              w-[200px]
              h-[50px]
              p-2
              rounded-xl
              moveup
            "
            >
              Register Now
            </button>
          </div>
        </section>
        <section
          id="cards_page"
          className="w-[90%] p-2 mx-auto lg:w-[90%] text-center h-[80vh] lg:mb-12 mb-8"
        >
          <Swiper
            onSwiper={setSwiperRefs}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(e) => {
              setCurrentSlide(e.activeIndex);
            }}
            navigation={isTabletOrMobile ? false : true}
            autoplay={
              !shouldAutoPlay
                ? shouldAutoPlay
                : {
                    delay: 5500,
                    disableOnInteraction: false,
                  }
            }
            modules={[Navigation, Autoplay]}
            className="animate-swiper"
            grabCursor
            ref={swiperRef}
          >
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div className="cars-text-heading">
                <h1 className="text-xl text-[#505050] font-bold lg:text-3xl anim-text">
                  Your ticket to Currrent-cy
                </h1>
                <p className="text-sm text-[#797979] small-zig-zag lg:text-[16px] anim-text">
                  Redefine convenience with Niyo
                </p>
              </div>
              <div className="swiper-image-container lg:h-[390px] lg:w-[400px] md:h-[380px] md:w-[360px] lg:aspect-square h-[220px] w-[220px]">
                <img src={BothCard} alt="" className="h-full w-full anim-img" />
                <img
                  src={Dollar}
                  alt=""
                  className="dol  w-[20px] h-[20px] anim-c lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px]"
                />
                <img
                  src={E}
                  alt=""
                  className="e  w-[20px] h-[20px] anim-c lg:h-[60px] lg:w-[60px] md:h-[30px] md:w-[30px]"
                />
                <img
                  src={Euro}
                  alt=""
                  className="euro  w-[20px] h-[20px] anim-c lg:h-[60px] lg:w-[60px] md:h-[30px] md:w-[30px]"
                />
                <img
                  src={W}
                  alt=""
                  className="wc  w-[20px] h-[20px] anim-c lg:h-[60px] lg:w-[60px] md:h-[30px] md:w-[30px]"
                />
                <img
                  src={Yen}
                  alt=""
                  className="yen  w-[20px] h-[20px] anim-c lg:h-[60px] lg:w-[60px] md:h-[30px] md:w-[30px]"
                />
                <img
                  src={Ruppe}
                  alt=""
                  className="rs  w-[20px] h-[20px] anim-c lg:h-[60px] lg:w-[60px] md:h-[30px] md:w-[30px]"
                />
              </div>
              <div className="swiper-text-footer">
                <p className="text-md text-[#797979] lg:text-md anim-text">
                  Unleash the boundless power of our
                </p>
                <h1 className="text-xl font-bold text-[#333333] lg:text-2xl anim-text">
                  Niyo Debit Card
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="cars-text-heading">
                <h1 className="text-xl text-[#505050] font-bold lg:text-3xl">
                  Travel Agents
                </h1>
                <p className="text-sm text-[#797979] small-zig-zag lg:text-[16px]">
                  Redefine convenience with Niyo
                </p>
              </div>
              <div className="swiper-image-container lg:h-[390px] lg:w-[400px] md:h-[380px] md:w-[360px]  lg:aspect-square h-[220px] w-[220px]">
                <img src={BothCard} alt="" className="h-full w-full " />
                <img
                  src={Plane}
                  alt=""
                  className="plane plane-a h-[30px] w-[30px] lg:h-[60px] lg:w-[60px] md:h-[50px] md:w-[50px]"
                />
              </div>
              <div className="swiper-text-footer text-center text-wrap">
                <p className="text-sm text-[#797979] slide-in  lg:text-wrap lg:text-xl">
                  Streamline and optimise your bookings for flights, hotels, and
                  experiences with <br />
                  cost-effective international transactions.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="cars-text-heading">
                <h1 className="text-xl text-[#505050] font-bold lg:text-3xl">
                  VISA Consultants
                </h1>
                <p className="text-sm text-[#797979] small-zig-zag lg:text-[16px]">
                  Redefine convenience with Niyo
                </p>
              </div>
              <div className="swiper-image-container lg:h-[390px] lg:w-[400px] md:h-[380px] md:w-[360px] lg:aspect-square h-[220px] w-[220px]">
                <img src={BothCard} alt="" className="h-full w-full anim-img" />
                <img src={VisaStamp} alt="" className="stamp1 ani-stamp " />
                <img
                  src={VisaStamp}
                  alt=""
                  className="lg:block stamp2 ani-stamp "
                />
              </div>
              <div className="swiper-text-footer">
                <p className="text-sm text-[#797979] lg:text-xl">
                  Simplify and enhance the payment experiences for your clients,
                  <br />
                  ensuring seamless global transactions.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="cars-text-heading">
                <h1 className="text-xl text-[#505050] font-bold lg:text-3xl">
                  Education Consultant
                </h1>
                <p className="text-sm text-[#797979] small-zig-zag lg:text-[16px]">
                  Redefine convenience with Niyo
                </p>
              </div>
              <div className="swiper-image-container lg:h-[390px] lg:w-[400px] md:h-[380px] md:w-[360px] lg:aspect-square h-[220px] w-[220px]">
                <img src={BothCard} alt="" className="h-full w-full" />
                <img src={GlobeF} alt="" className="globe1 2xl:right-[18%] " />
                <img src={GlobeF} alt="" className="globe2 " />
                <img src="" alt="" />
              </div>
              <div className="swiper-text-footer">
                <p className="text-sm text-[#797979] lg:text-xl">
                  Facilitate smooth and efficient global education fee payments
                  for your clients.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="cars-text-heading">
                <h1 className="text-xl text-[#505050] font-bold lg:text-3xl">
                  Businesses
                </h1>
                <p className="text-sm text-[#797979] small-zig-zag lg:text-[16px]">
                  Redefine convenience with Niyo
                </p>
              </div>
              <div className="swiper-image-container lg:h-[390px] lg:w-[400px] md:h-[380px] md:w-[360px] lg:aspect-square h-[220px] w-[220px]">
                <img src={BothCard} alt="" className="h-full w-full" />
                <img src={rocketgif} alt="" className="rocket1  rock-i" />
                <img src={rocketgif} alt="" className="rocket2  rock-i" />
              </div>
              <div className="swiper-text-footer">
                <p className="text-sm text-[#797979] lg:text-xl">
                  Manage recurring payments for international software, cloud
                  infrastructure,
                  <br /> and other vital services without additional financial
                  burden.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Button className="bg-[#129283] text-white lg:p-4 lg:text-md mt-2 p-3 text-xs">
            Register Now
          </Button>
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
        </section>
        <section id="form_page" className=" w-screen p-2  lg:h-screen">
          {showLoader ? <Loader /> : <></>}
          <h1 className="text-md text-center text-wrap lg:text-xl form-zig lg:mb-10 mb-5">
            Exclusively crafted benefits for
            <br />
            <span className="text-xl font-bold text-center text-wrap lg:text-3xl">
              {" "}
              Private Ltd, Partnership, LLP, & Limited Firms.
            </span>
          </h1>
          <LeadForm setShowLoader={setShowLoader} showLoader={showLoader} />
          <h2 className="text-center text-md">
            " Stay tuned, <span className="font-bold">Proprietors!</span>{" "}
            Exciting offers designed for you are on the horizon."
          </h2>
        </section>
      </main>
      <Button
        onClick={() => {
          navigate("congrats");
        }}
      >
        Con
      </Button>
    </div>
  );
}

export default App;
