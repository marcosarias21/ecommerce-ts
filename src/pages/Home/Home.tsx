import { Navbar } from '../../components/Navbar'
import useFetch from '../../hooks/useFetch'
import { Root } from '../../types/types.d'

const Home = () => {
    const categories = useFetch<Root>('https://api.mercadolibre.com/categories/MLA1071')

  return (
    <>
      <Navbar />
    </>
  )
}

export default Home