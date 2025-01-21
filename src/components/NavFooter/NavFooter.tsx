import { Box, Container, Typography } from '@mui/material'
import { useCategoriesStore } from '../../store/categoriesStore'
import { Link } from 'react-router-dom'

const NavFooter = () => {
  const { categories } = useCategoriesStore()
  return (
    <Box component={'section'}  sx={{ backgroundColor: '#f8f9fa', pt: 10 }}>
      <Container maxWidth={'lg'}>
        <Typography fontWeight={'bold'}>Categorias mas buscadas:</Typography>
        <Box mb={5}>
          <Typography variant='body2'>{categories?.map((category, index) => <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/category/${category.id}`}>{category?.name}{index < categories.length - 1 &&  ' - '}</Link>)}</Typography>
        </Box>
      </Container>      
      <Typography textAlign={'center'}>@Marcos Arias 2025</Typography>
    </Box>
  )
}

export default NavFooter