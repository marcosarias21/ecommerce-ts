import { Box, CardMedia, Grid2, Typography } from "@mui/material"
import useFetch from "../../hooks/useFetch"
import { Categorie } from "../../types/types.d"
import { Link } from "react-router-dom"

type Prop = {
  idCategory: string
}

const CategorieCard: React.FC<Prop> = ({idCategory}) => {
  const dataCat = useFetch<Categorie>(`https://api.mercadolibre.com/categories/${idCategory}`)

  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ background: '#fff', paddingX: 2, borderRadius: 5, transition: '0.2s ease', ":hover": {
      opacity: 0.9, transition: '0.1s ease', transform: 'scale(1.05)'
    }  }}>
      <Link to={`/category/${idCategory}`}>
        <Box position={"relative"}>
          <CardMedia component="img" src={dataCat.data?.picture} />
          <Box sx={{ position: "absolute", top: 29, zIndex: 1, color: "#463E93" }}>
            <Typography variant="h5" fontWeight={'bold'}>{dataCat.data?.name}</Typography>
            <Typography variant="body2" fontWeight={'bold'}>{dataCat.data?.total_items_in_this_category} Productos...</Typography>
          </Box>
        </Box>
      </Link>
    </Grid2>
  )
}

export default CategorieCard