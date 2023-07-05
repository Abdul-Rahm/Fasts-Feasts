import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/css/swiperStyles.css";
import "swiper/css/bundle";
import { SliderCard } from '../components';
import { fruits } from '../utils/style';

const Slider = () => {
  return (
    <div className='w-full pt-19'>
        <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={30}
            grabCursor={true}
            className="mySwiper"
        >
            {fruits &&
               fruits.map((data, i) => (
                <SwiperSlide key={i}>
                    <SliderCard key={i} data={data} index={i} />
               </SwiperSlide>
            ))}
                
        </Swiper>
    </div>
  )
}

export default Slider