import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import imgCar from '../../assets/images/banner_2.jpg'
import imgCar2 from '../../assets/images/banner-web-cyber-12.jpg'
import imgCar3 from '../../assets/images/banner-web-cyber-14.jpg'
import imgHome from '../../assets/images/banner-info-home.png'
import 'swiper/css'
import 'swiper/css/navigation'
import './carousel.css'
import { Box, Container } from '@mui/material'

const Carousel = () => {
  return (
    <Box>
      <Swiper navigation={true} modules={[Navigation]}className="mySwiper">
        <SwiperSlide><img src={imgCar} alt={imgCar} /></SwiperSlide>
        <SwiperSlide><img src={imgCar2} alt={imgCar2} /></SwiperSlide>
        <SwiperSlide><img src={imgCar3} alt={imgCar3} /></SwiperSlide>
      </Swiper>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{  maxWidth: '990px' }}>
          <img className='img-home' src={imgHome} alt={imgHome} />
        </Box>
      </Container>
    </Box>
  )
}

export default Carousel