import { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { CategorieCard } from '../../components/CategorieCard'
import { Carousel } from '../../components/Carousel'
import { CardProducts } from '../../components/CardProducts'
import useFetch from '../../hooks/useFetch'
import useScroll from '../../hooks/useScroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { useCategoriesStore } from '../../store/categoriesStore'
import { ArrayProductsDiscount, Categories } from '../../types/types.d'
import { Box, Container, Grid2, Typography } from '@mui/material'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
    const categoriesSetter = useCategoriesStore((state) => state.setCategories)
    const categories = useFetch<Categories>('https://api.mercadolibre.com/sites/MLA/categories')
    const discountProducts = useFetch<ArrayProductsDiscount>('https://api.mercadolibre.com/sites/MLA/search?q=ipod&FilterID=discount&limit=12')
    const categoryIds = ['MLA1051', 'MLA1648', 'MLA1574']
    console.log(discountProducts)
    const { isShow } = useScroll()

    useEffect(() => {
      if (categories.data) categoriesSetter(categories.data)
    }, [categories])

  return (
    <>
      <Navbar isShow={isShow} />
      <Carousel />
      <Box sx={{ marginTop: '30px', backgroundColor: '#f8f9fa', paddingTop: 4}}>
        <Container maxWidth={'lg'} >
          <Typography component={'h4'} variant='h4' fontWeight={'bold'}>Destacados</Typography>
          <Box marginTop={5}>
            <Swiper 
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={5}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}>
              {
                discountProducts?.data?.results.map(product => 
                <SwiperSlide key={product.id} >
                  <CardProducts {...product} />
                </SwiperSlide>
              )
              }        
            </Swiper>
          </Box>
          <Box mt={10}>
            <Typography mb={2} component={'h5'} variant='h4' textAlign={'center'} fontWeight={'bold'}>Mas categorias</Typography>
            <Grid2 container spacing={2}>
                {categoryIds.map(id => <CategorieCard idCategory={id} key={id} />)}
            </Grid2>
          </Box>
        </Container>
        <footer>@Marcos Arias 2024</footer>
      </Box>
       
    </>
  )
}

export default Home