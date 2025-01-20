import { Box, Container, Typography } from '@mui/material'
import { useCategoriesStore } from '../../store/categoriesStore'
import { Link } from 'react-router-dom'

const NavFooter = () => {
  const { categories } = useCategoriesStore()
  return (
    <Container component={'section'} maxWidth={'lg'}>
      <Box sx={{ backgroundColor: '#FFF', borderRadius: 2 }} my={4}>
        <Typography fontWeight={'bold'}>Categorias mas buscadas:</Typography>
        <Box>
          <Typography variant='body2'>{categories?.map((category, index) => <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/category/${category.id}`}>{category?.name}{index < categories.length - 1 &&  ' - '}</Link>)}</Typography>
        </Box>
      </Box>      
      <footer>@Marcos Arias 2025</footer>
    </Container>
  )
}

export default NavFooter