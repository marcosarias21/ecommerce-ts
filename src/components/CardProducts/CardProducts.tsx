import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { ProductsDiscount } from "../../types/types.d"
import { Result } from '../../types/categorydata.d'

type Prop = ProductsDiscount | Result

const CardProducts: React.FC<Prop> = ({ title, thumbnail, price, original_price}) => {
  const discount = original_price && ((original_price - price) / original_price)* 100
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          image={thumbnail}
          alt="green iguana"
          sx={{ height: 'auto !important' }}
        />
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
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardProducts