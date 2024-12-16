import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { ProductsDiscount } from "../../types/types.d"

const CardProducts = ({id, title, thumbnail, price, original_price}: ProductsDiscount) => {
  const discount = original_price && ((original_price - price) / original_price)* 100
  console.log(discount)
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" fontWeight={'bold'}>
            {title.substring(0, 34).concat('...')}
          </Typography>
          <Box sx={{ display: 'block', textAlign: 'justify' }}>
            <Typography variant="caption" sx={{ textDecoration: 'line-through' }}>
              $ {original_price?.toLocaleString("de-DE")}
            </Typography>
            <Box display={'flex'} gap={2} alignItems={'center'}>
              <Typography variant="h6">
                $ {price.toLocaleString("de-DE")} 
              </Typography>
              <Typography variant="body2" color="success" component={'span'}>{discount?.toFixed(0)}% OFF</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardProducts