import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Container } from '@mui/material'
import { DetailProductCard } from '../../components/DetailProductCard'
import { Product } from '../../types/productDetail.d'

const DetailProduct = () => {
  const { id } = useParams()
  const { data } = useFetch<Product>(`https://api.mercadolibre.com/items/${id}`)
  
  return (
    <Container>
      {data && <DetailProductCard key={data.id} {...data} />}
    </Container>
  )
}

export default DetailProduct