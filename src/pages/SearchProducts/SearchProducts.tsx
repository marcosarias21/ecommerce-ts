import { Box, Container, Grid2, Typography } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { ProductFinds } from '../../types/productFinds'
import { CardProducts } from '../../components/CardProducts'

const SearchProducts = () => {
  const { product } = useParams()
  const { data } = useFetch<ProductFinds>(`https://api.mercadolibre.com/sites/MLA/search?q=${product}&limit=20`)
  
  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Box mb={5}>
        {data?.filters[0]?.values.map(value => (
            <Typography>{value.path_from_root.map(val => val.name).join(' > ')}</Typography>  
        ))} 
      </Box>
      <Grid2 container spacing={2}>
        {
          data?.results.map(product =>
          <Grid2 size={3}>
            <CardProducts key={product.id} {...product} />
          </Grid2> )
        }
      </Grid2>
    </Container>
  )
}

export default SearchProducts