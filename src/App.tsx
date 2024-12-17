import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { CategoryProducts } from './pages/CategoryProducts'
import { Navbar } from './components/Navbar'
import useScroll from './hooks/useScroll'

const App = () => {
  const { isShow } = useScroll()
  
  return (
    <>
      <Navbar isShow={isShow} />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/category/:id' element={<CategoryProducts />} />
      </Routes>
      <footer>@Marcos Arias 2024</footer>
    </>
  )
}

export default App
