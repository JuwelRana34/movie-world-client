import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import fast from '../../public/images/fast.jpg'
import secund from '../../public/images/secund.jpg'
import third from '../../public/images/third.jpg'
import five from '../../public/images/five.jpg'

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
          <img className='h-[500px]' src={fast} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secund} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={third} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} />
        </SwiperSlide>

      </Swiper>
   
  )
}

export default Carosel