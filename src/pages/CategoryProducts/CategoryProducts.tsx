import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Box, Container, Grid2, Pagination } from '@mui/material'
import { CategorieObject } from '../../types/categorydata.d'
import { CardProducts } from '../../components/CardProducts'
import { Spinner } from '../../components/Spinner'
import React, { useState } from 'react'

const CategoryProducts = () => {
  const [page, setPage] = useState<number>(1)
  const { id } = useParams()
  const { data, loading } = useFetch<CategorieObject>(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&limit=30&offset=${page}`)

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Container sx={{ marginTop: 20 }}>
      {
        loading ? <Spinner /> :
        <Grid2 container spacing={2}>
          {
            data?.results?.map(product => 
            <Grid2 key={product.id} size={3}>
              <CardProducts {...product} />
            </Grid2>  
          )
          }
        </Grid2>
      }
      <Box display={'flex'} justifyContent={'center'} mt={2}>
        <Pagination onChange={handleChange} count={100} page={page} color="secondary" />
      </Box>
    </Container>
  )
}

export default CategoryProducts