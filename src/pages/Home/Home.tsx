import { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import useFetch from '../../hooks/useFetch'
import { Categories } from '../../types/types.d'
import { useCategoriesStore } from '../../components/store/categoriesStore'
import { Carousel } from '../../components/Carousel'
import useScroll from '../../hooks/useScroll'
import { Container, Typography } from '@mui/material'

const Home = () => {
    const categoriesSetter = useCategoriesStore((state) => state.setCategories)
    const categories = useFetch<Categories>('https://api.mercadolibre.com/sites/MLA/categories')
    const { isShow } = useScroll()

    useEffect(() => {
      if (categories.data) categoriesSetter(categories.data)
    }, [categories])

  return (
    <>
      <Navbar isShow={isShow} />
      <Carousel />
      <Container maxWidth={'lg'} sx={{ marginTop: '50px' }}>
        <Typography component={'h4'} variant='h4' fontWeight={'bold'}>Destacados</Typography>
      </Container>
    </>
  )
}

export default Home