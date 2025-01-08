import { Box, Button, Container, Divider, Grid2, List, Paper, Typography } from '@mui/material'
import {Product } from '../../types/productDetail.d'
import { arrayAtr } from '../../helpers/arrayAttributes'
import useUniqueColours from '../../hooks/useUniqueColours'
import useSize from '../../hooks/useSize'
import { SizeMenu } from '../SizeMenu'
import { ColoursAvailable } from '../ColoursAvailable'
import { GalleryPicCards } from '../GalleryPicCards'
import { ProductPictureMain } from '../ProductPictureMain'
import { useProductStore } from '../../store/productStore'

type Prop = Product

const DetailProductCard: React.FC<Prop> = ({ title, pictures, original_price, condition, shipping, base_price, attributes, initial_quantity, variations }) => {
  const isFreeShipping = shipping?.free_shipping
  const { colour } = useProductStore() // seguir refacorizando esto dsp
  const sizes = useSize(variations)
  const coloursAvailable = useUniqueColours(variations)
  const filteredAtr = attributes?.filter(atribute => arrayAtr.includes(atribute?.id))
  
  return (
    (
      <Paper elevation={3} sx={{ maxWidth: "1200px", margin: "auto", padding: 2, mt: 4, borderRadius: 3 }}>
        <Grid2 container>
          <Grid2 size={1}>
            <GalleryPicCards variations={variations} pictures={pictures} coloursAvailable={coloursAvailable || []} />
          </Grid2>
          <Grid2 display={'flex'} size={4} gap={2}>
            <Box>
              <ProductPictureMain variations={variations} pictures={pictures} />
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <Container>
              <Box>
                <Box display={'flex'} gap={3} height={'100%'}>
                  <Typography component={'span'} variant='body1'>{condition === 'new' ? `Nuevo | +Tanto vendidos` : 'Usado'}</Typography>                  
                </Box>
                <Divider />
                <Box my={2}>
                  <Typography variant='h6' fontWeight={'bold'}>{title}</Typography>
                  {isFreeShipping ? <Typography color='success' variant='body1'>Envio Gratis</Typography> : <Typography color='error' variant='body1'>Envio Costo</Typography>}
                  {original_price ?  <Typography variant="caption" sx={{ textDecoration: 'line-through' }}>${original_price?.toLocaleString("de-DE")}
                  </Typography> : ""}   
                  <Typography variant='h6'>${base_price.toLocaleString("de-DE")}</Typography>
                </Box>
                <Box>
                  {filteredAtr?.map(attribute => 
                  <List key={attribute.id }>
                    <Typography fontWeight={'bold'} component={'span'}>{attribute.name}:</Typography> {attribute.value_name}
                  </List>)}
                </Box>
                <Box mt={5} width={'60%'}>
                  {sizes && sizes?.length > 0 && <SizeMenu sizes={sizes} /> }
                </Box>
              </Box>
            </Container>
          </Grid2>
          <Divider orientation='vertical' flexItem />
          <Grid2 size={2} mt={2} ml={2}>
            <Box mb={2}>
              <Typography fontWeight={'bold'}>Stock Disponible</Typography>
              <Typography>Cantidad disponible: {initial_quantity}</Typography>
            </Box>
            <Box>
              <Typography variant='body1' fontWeight={'bold'}>Colores Disponibles: <Typography component={'span'} variant='body2'>{colour}</Typography></Typography>
              <ColoursAvailable colours={coloursAvailable ||[]}/>          
            </Box>
          </Grid2>
          <Grid2 display={'flex'} justifyContent={'end'} size={12}>
            <Box display={'flex'}>
              <Button variant='contained'>Agregar al carrito</Button>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    )
  
  )
}

export default DetailProductCard