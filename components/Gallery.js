'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';



function App() {

  const images = [
    '/images/01.jpeg',
    '/images/02.jpeg',
    '/images/03.jpeg',
    '/images/04.jpeg',
    '/images/05.jpeg',

  ];

  return (
    <div className="w-full mt-4 h-full rounded-lg   object-cover">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000 }} 
        slidesPerView={1}
        centeredSlides={'yes'}
        coverflowEffect={{
          stretch: 20,
          rotate: 0,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="object-fill rounded-lg h-full "
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
        }}
      >
     {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" className="rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;