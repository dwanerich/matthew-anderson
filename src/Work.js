import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./App.css";
import { images } from './portfolio/index'
import'./index.css'

SwiperCore.use([EffectCoverflow, Pagination]);

const Work = () => {
  return (
    <div>
      <Swiper className='swiper'
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        class='mySwiper'
      >

        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" class='swiper'/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Work;
