import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material"
import { ProductsDiscount } from "../../types/types.d"
import { Result } from '../../types/categorydata.d'
import { Link } from "react-router-dom"
import { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';

type Prop = ProductsDiscount | Result

const CardProducts: React.FC<Prop> = ({ id, title, thumbnail, price, original_price, shipping}) => {
  const discount = original_price && ((original_price - price) / original_price)* 100
  const [isShowFav, setIsShowFav] = useState<boolean>(false)
  return (
    <Card sx={{ height: '100%', maxWidth: 250, position: 'relative', borderRadius: 0 }} onMouseEnter={() => setIsShowFav(true)} onMouseLeave={() => setIsShowFav(false)}>
      {isShowFav ? 
        <Box position={'absolute'} top={10} right={10} zIndex={2}>
            <IconButton>
              <FavoriteIcon color="error" />
            </IconButton>
        </Box>
      :  null}
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <Box height={'50%'}>
            <CardMedia
              component="img"
              image={thumbnail}
              alt="green iguana"
              sx={{ height: '100%', objectFit: 'contain !important' }}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="body2" fontWeight={'bold'}>
              {title.substring(0, 34).concat('...')}
            </Typography>
            <Box sx={{ display: 'block', textAlign: 'justify' }}>
                {original_price ?  <Typography variant="caption" sx={{ textDecoration: 'line-through' }}>${original_price?.toLocaleString("de-DE")}
                </Typography> : ""}           
              <Box display={'flex'} gap={2} alignItems={'center'}>
                <Typography variant="h6">
                  $ {price.toLocaleString("de-DE")} 
                </Typography>                
                {discount ? <Typography variant="body2" color="success" component={'span'}>{discount?.toFixed(0)}% OFF</Typography> : null}              
              </Box>
              <Box>
                {shipping.free_shipping ? <Chip sx={{ borderRadius: 1 }} label='Envio gratis' variant="filled" color="success" />: "" }
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link> 
    </Card>
  )
}

export default CardProducts