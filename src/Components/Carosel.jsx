import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import f from '../../public/images/f.jpg'
import j from '../../public/images/j.jpg'
import n from '../../public/images/n.jpg'

function Carosel() {
  return (
    

    <Swiper 
    
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
          <img className='h-[500px]' src={f} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={j} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={n} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
       
       
      </Swiper>
   
  )
}

export default Carosel