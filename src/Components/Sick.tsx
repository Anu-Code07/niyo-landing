import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
export const data = [
  {
    desc: "Be the first to experience seamless transactions and innovative solutions. We'll reach out when our product is ready.",
    title: "What’s Next?",
  },
  {
    desc: "As an early adopter, you're in for exclusive discounts and privileges. Stay tuned for BTS updates and launch discounts!",
    title: "Exclusive Perks",
  },
  {
    desc: "Keep an eye on your email for exclusive updates, early access notifications, and exciting announcements.",
    title: "Inbox Incoming",
  },
];

export default function ResponsiveCarousel(props: any) {
  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative", margin: "20px 0" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 4;
          if (parentWidth <= 768) currentVisibleSlide = 3;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 90 : 550}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
              customScales={[1.5, 0.8, 0.8]}
            />
          );
        }}
      />
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props: any) {
  const { data, dataIndex, isCenterSlide } = props;
  const { desc, title } = data[dataIndex];

  console.log(props, "--");

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        userSelect: "none",
        margin: "10px 0",
      }}
      className="my-slide-component"
    >
      <div
        className="bg-[#F4F4F4] p-2 rounded-xl h-full w-full shadow-lg"
        style={{
          filter: !isCenterSlide ? "blur(2px)" : "blur(0)",
        }}
      >
        <div className="box text-center h-full">
          <h1 className="text-xl font-semibold mb-4 mt-4 lg:text-2xl">
            {title}
          </h1>
          <p className="text-sm text-[#0D0D0D] lg:text-[16px]">{desc}</p>
        </div>
      </div>
    </div>
  );
});
