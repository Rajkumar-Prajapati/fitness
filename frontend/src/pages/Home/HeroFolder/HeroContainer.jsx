import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper";

// SwiperClass.use([EffectCreative,Autoplay]);

function HeroContainer() {
  return (
    <section>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },

          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
        loop={true}
        autoplay={{
          delay: 2000, // Adjust the delay as needed (in milliseconds)
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero2 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroContainer;
