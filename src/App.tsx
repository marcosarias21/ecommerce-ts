import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { CategoryProducts } from './pages/CategoryProducts'
import { Navbar } from './components/Navbar'
import useScroll from './hooks/useScroll'
import { DetailProduct } from './pages/DetailProduct'
import { useCategoriesStore } from './store/categoriesStore'
import useFetch from './hooks/useFetch'
import { Categories } from './types/types.d'
import { useEffect } from 'react'
import { SearchProducts } from './pages/SearchProducts'

const App = () => {
  const { isShow } = useScroll()
  const categoriesSetter = useCategoriesStore((state) => state.setCategories)
  const categories = useFetch<Categories>('https://api.mercadolibre.com/sites/MLA/categories')


  useEffect(() => {
    if (categories.data) categoriesSetter(categories.data)
  }, [categories])
  
  return (
    <>
      <Navbar isShow={isShow} />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/category/:id' element={<CategoryProducts />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/search/:product' element={<SearchProducts />} />
      </Routes>
      <footer style={{ position: 'absolute', bottom: 0 }}>@Marcos Arias 2024</footer>
    </>
  )
}

export default App
