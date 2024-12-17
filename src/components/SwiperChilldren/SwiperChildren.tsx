import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Prop = {
  children: React.ReactNode;
};

const SwiperChildren: React.FC<Prop> = ({ children }) => {
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ height: '350px' }}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      scrollbar={{ draggable: true }}
      loop={true}>
        {children}
    </Swiper>
  )
}

export default SwiperChildren