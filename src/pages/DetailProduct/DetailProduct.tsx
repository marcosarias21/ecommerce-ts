import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Container, Paper } from '@mui/material'
import { DetailProductCard } from '../../components/DetailProductCard'
import { Product } from '../../types/productDetail.d'
import useSize from '../../hooks/useSize'
import { arrayAtr } from '../../helpers/arrayAttributes'
import useUniqueColours from '../../hooks/useUniqueColours'

const DetailProduct = () => {
  const { id } = useParams()
  const { data } = useFetch<Product>(`https://api.mercadolibre.com/items/${id}`)
  const sizes = useSize(data?.variations)
  const coloursAvailable = useUniqueColours(data?.variations)
  const filteredAtr = data?.attributes?.filter(atribute => arrayAtr?.includes(atribute?.id))
  
  return (
    <Container>
      <Paper elevation={3} sx={{ maxWidth: "1200px", margin: "auto", mt: 4, borderRadius: 3, height: '100%'  }}>
        {data && <DetailProductCard key={data.id} {...data} sizes={sizes} coloursAvailable={coloursAvailable} filteredAtr={filteredAtr} />}
      </Paper>
    </Container>
  )
}

export default DetailProduct