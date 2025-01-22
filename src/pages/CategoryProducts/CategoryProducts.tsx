import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Box, Container, Grid2, Pagination, Typography } from '@mui/material'
import { AvailableFilter, AvailableSort, CategorieObject, Sort } from '../../types/categorydata.d'
import { CardProducts } from '../../components/CardProducts'
import { Spinner } from '../../components/Spinner'
import { useEffect, useState } from 'react'
import { MenuFilter } from '../../components/MenuFilter'
import { useCategoriesStore } from '../../store/categoriesStore'
import { CheckboxFilters } from '../../components/CheckboxFilters'

const CategoryProducts = () => {
  const [page, setPage] = useState<number>(1)
  const [toSortData, setToSortData] = useState<(AvailableFilter | Sort)[]>([])
  const { type, shippingCost } = useCategoriesStore()
  const { id } = useParams()
  const { data, loading } = useFetch<CategorieObject>(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&limit=30&offset=${page}&sort=${type}&shipping_cost=${shippingCost}`)
  const category = data?.filters[0].values[0].name

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    if (data) {
      const array: AvailableSort[] = data.available_sorts || [];
      const convertedSort: Sort = {...data.sort}
      setToSortData([...array, convertedSort])
    }
  }, [data])

  return (
    <Container sx={{ display: 'flex' }}>
      <Grid2 container width={'100%'}>
        <Grid2 container size={12} my={2} spacing={2} alignItems={'center'}>
          <Grid2 size={{ xs: 12, sm: 4, md: 6, lg: 8 }} my={2} mb={1} display={'flex'}>
            <Typography>{category}</Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2}}>
            <CheckboxFilters />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2}}>
            <MenuFilter toSortData={toSortData} />
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          {
            loading ? 
            <Grid2 display={'flex'} justifyContent={'center'} width={'100%'} size={12}>
              <Spinner /> 
            </Grid2>
              :
            <Box>
              <Grid2 container spacing={2}>
              {
                data?.results?.map(product => 
                <Grid2 key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
                  <CardProducts key={product.id} {...product} />
                </Grid2>  
              )
              }
              </Grid2>
              <Box display={'flex'} justifyContent={'center'} mt={5}>
                <Pagination onChange={handleChange} count={100} page={page} color="primary" />
              </Box>          
            </Box>     
          }
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default CategoryProducts