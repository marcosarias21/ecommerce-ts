import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Box, Container, Paper, Typography } from '@mui/material'
import { DetailProductCard } from '../../components/DetailProductCard'
import { Product } from '../../types/productDetail.d'
import useSize from '../../hooks/useSize'
import { arrayAtr } from '../../helpers/arrayAttributes'
import useUniqueColours from '../../hooks/useUniqueColours'
import { CategorieObject } from '../../types/categorydata.d'
import { SwiperSlide } from 'swiper/react'
import { SwiperChildren } from '../../components/SwiperChilldren'
import { CardProducts } from '../../components/CardProducts'

const DetailProduct = () => {
  const { id } = useParams()
  const { data } = useFetch<Product>(`https://api.mercadolibre.com/items/${id}`)
  const relatedProduct = useFetch<CategorieObject>(`https://api.mercadolibre.com/sites/MLA/search?category=${data?.category_id}&limit=10`)
  const sizes = useSize(data?.variations)
  const coloursAvailable = useUniqueColours(data?.variations)
  const filteredAtr = data?.attributes?.filter(atribute => arrayAtr?.includes(atribute?.id))
  
  return (
    <Container>
      <Paper elevation={3} sx={{ maxWidth: "1200px", margin: "auto", mt: 4, borderRadius: 2, minHeight: '70vh', paddingY: {md: 5} }}>
        {data && <DetailProductCard key={data.id} {...data} sizes={sizes} coloursAvailable={coloursAvailable} filteredAtr={filteredAtr} />}
      </Paper>
      <Box mb={20} mt={10}>
        <Typography mb={2} variant='h6'>Productos relacionados:</Typography>
        <Box>
          <SwiperChildren height="380px">
            {relatedProduct.data?.results.map(product => (
              <SwiperSlide key={product.id}>
                <CardProducts {...product}/>
              </SwiperSlide>
            ))}
          </SwiperChildren>
        </Box>
      </Box>
    </Container>
  )
}

export default DetailProduct