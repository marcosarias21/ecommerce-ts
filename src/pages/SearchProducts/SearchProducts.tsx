import { Box, Container, Grid2, Typography } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { ProductFinds } from '../../types/productFinds'
import { CardProducts } from '../../components/CardProducts'
import { Spinner } from '../../components/Spinner'

const SearchProducts = () => {
  const { product } = useParams()
  const { data, loading } = useFetch<ProductFinds>(`https://api.mercadolibre.com/sites/MLA/search?q=${product}&limit=20`)
  
  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Box mb={5}>
        {data?.filters[0]?.values.map(value => (
            <Typography key={value.id}>{value?.path_from_root.map(val => val.name).join(' > ')}</Typography>  
        ))} 
      </Box>
      <Grid2 container spacing={2}>
        {
          loading ? <Spinner /> :
          data?.results.map(product =>
          <Grid2 key={product.id}  size={3}>
            <CardProducts {...product} />
          </Grid2> )
        }
      </Grid2>
    </Container>
  )
}

export default SearchProducts