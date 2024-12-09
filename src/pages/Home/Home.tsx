import { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import useFetch from '../../hooks/useFetch'
import { Categories } from '../../types/types.d'
import { useCategoriesStore } from '../../components/store/categoriesStore'

const Home = () => {
    const categoriesSetter = useCategoriesStore((state) => state.setCategories)
    const categories = useFetch<Categories>('https://api.mercadolibre.com/sites/MLA/categories')

    useEffect(() => {
      if (categories.data) categoriesSetter(categories.data)
    }, [categories])

  return (
    <>
      <Navbar />
    </>
  )
}

export default Home