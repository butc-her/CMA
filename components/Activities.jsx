'use client';

import {  } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Image from 'next/image';
import junkImage from '@public/shubham-dhage-rPCTklMCMKc-unsplash.jpg';
import secondImg from '@public/yigit-ali-atasoy-6Jdz9qiZfsQ-unsplash.jpg';
import thirdImg from '@public/choong-deng-xiang-GEONQEnR_3A-unsplash.jpg';

const Activities = () => {
  return (
    <section className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80] mx-auto text-center">
      <h2 className="font-bold text-2xl mb-8">Some of our work</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={junkImage}
            alt="Activity 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg w-auto h-auto"
          />
        </SwiperSlide>
                <SwiperSlide>
          <Image
            src={secondImg}
            alt="Activity 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </SwiperSlide>
                <SwiperSlide>
          <Image
            src={thirdImg}
            alt="Activity 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Activities;