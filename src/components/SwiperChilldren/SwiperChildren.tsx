import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Prop = {
  children: React.ReactNode
  height: string
};

const SwiperChildren: React.FC<Prop> = ({ children, height }) => {
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ height: `${height}` }}
      spaceBetween={10}
      slidesPerView={5}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:2,
        },
        639: {
          slidesPerView: 3,
        },
        865:{
          slidesPerView:4
        },
        1000:{
          slidesPerView:4
        },
        1500:{
          slidesPerView:5
        },
        1700:{
          slidesPerView:5
        }
      }}
      navigation
      scrollbar={{ draggable: true }}
      loop={true}>
        {children}
    </Swiper>
  )
}

export default SwiperChildren