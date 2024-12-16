import { Box, CardMedia, Grid2, Typography } from "@mui/material"
import useFetch from "../../hooks/useFetch"
import { Categorie } from "../../types/types.d"
import { Link } from "react-router-dom"

type Prop = {
  idCategory: string
}

const CategorieCard: React.FC<Prop> = ({idCategory}) => {
  const dataCat = useFetch<Categorie>(`https://api.mercadolibre.com/categories/${idCategory}`)
  console.log(dataCat.data)
  return (
    <Grid2 size={4} sx={{ background: '#fff', paddingX: 2, borderRadius: 5, transition: '0.2s ease', ":hover": {
      opacity: 0.9, transition: '0.1s ease', transform: 'scale(1.1)'
    }  }}>
      <Link to={''}>
        <Box position={"relative"}>
          <CardMedia component="img" src={dataCat.data?.picture} />
          <Box sx={{ position: "absolute", top: 29, zIndex: 1, color: "#463E93" }}>
            <Typography variant="h5" fontWeight={'bold'}>{dataCat.data?.name}</Typography>
            <Typography variant="body1" fontWeight={'bold'}>{dataCat.data?.total_items_in_this_category} Productos</Typography>
          </Box>
        </Box>
      </Link>
    </Grid2>
  )
}

export default CategorieCard