import { CategorieCard } from '../../components/CategorieCard'
import { Carousel } from '../../components/Carousel'
import { CardProducts } from '../../components/CardProducts'
import useFetch from '../../hooks/useFetch'
import { SwiperSlide } from 'swiper/react'
import { ArrayProductsDiscount } from '../../types/types.d'
import { Box, Container, Grid2, Typography } from '@mui/material'
import { SwiperChildren } from '../../components/SwiperChilldren'


const Home = () => {
    const discountProducts = useFetch<ArrayProductsDiscount>('https://api.mercadolibre.com/sites/MLA/search?q=ipod&FilterID=discount&limit=12')
    const categoryIds = ['MLA1051', 'MLA1648', 'MLA1574']

  return (
    <Box sx={{ backgroundColor: '#f8f9fa' }}>
      <Carousel/>
      <Box component={'section'} sx={{ paddingTop: 4}}>
        <Container maxWidth={'lg'} >
          <Typography component={'h4'} variant='h4' fontWeight={'bold'} textAlign={'center'}>Destacados</Typography>
          <Box marginTop={5}>
            <SwiperChildren>
              {
                discountProducts?.data?.results.map(product => 
                <SwiperSlide  key={product.id} style={{ height: '100%' }}>
                  <CardProducts {...product} />
                </SwiperSlide>
              )
              }        
            </SwiperChildren>
          </Box>
          <Box mt={10}>
            <Typography mb={2} component={'h5'} variant='h4' textAlign={'center'} fontWeight={'bold'}>Mas categorias</Typography>
            <Grid2 container spacing={2} justifyContent={'center'}>
                {categoryIds.map(id => <CategorieCard idCategory={id} key={id} />)}
            </Grid2>
          </Box>
        </Container>
      </Box>   
    </Box>
  )
}

export default Home