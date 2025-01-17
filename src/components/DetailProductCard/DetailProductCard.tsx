import { Box, Button, Container, Divider, Grid2, List, Typography } from '@mui/material'
import {Attribute, AttributeCombination, Product } from '../../types/productDetail.d'
import { SizeMenu } from '../SizeMenu'
import { ColoursAvailable } from '../ColoursAvailable'
import { GalleryPicCards } from '../GalleryPicCards'
import { ProductPictureMain } from '../ProductPictureMain'
import { colorVariationsObj } from '../../types/coloursAvaiable'
import { useCartStore } from '../../store/cartStore'
import { useState } from 'react'
import { AlertSnackbar } from '../AlertSnackbar'

type Prop = Product & { sizes: AttributeCombination[] | undefined, coloursAvailable: colorVariationsObj[] | undefined, filteredAtr: Attribute[] | undefined } 

const DetailProductCard: React.FC<Prop> = ({ id, title, pictures, original_price, condition, shipping, base_price, initial_quantity, variations, sizes, coloursAvailable, filteredAtr }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { addProductCart, cart } = useCartStore()
  const isFreeShipping = shipping?.free_shipping
  const priceCart = original_price ? original_price : base_price

  const addProduct = () => {
    if (cart.find(cart => cart.name === title)) {
        alert('Este producto ya esta en el carrito!')
    } else {
      addProductCart({ id: id, name: title, image: pictures[0].url, price: priceCart})    
      setOpen(true);
      return setInterval(() => {
            setOpen(false)
      }, 2000);
    }
  }

  return (
    (
      <Grid2 container>
        <Grid2 size={{ xs: 0, sm: 4, md: 4, lg: 1 }} display={{ xs : 'none', sm: 'none', md: 'flex' }} ml={1} my={1} alignItems={'center'}>
          <GalleryPicCards variations={variations} pictures={pictures} coloursAvailable={coloursAvailable || []} />
        </Grid2>
        <Grid2 display={'flex'} size={{ xs: 12, sm: 4, md: 4, lg: 3 }} gap={2}>
          <Box display={'flex'}>
            <ProductPictureMain variations={variations} pictures={pictures} />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <Container>
            <Box>
              <Box display={'flex'} gap={3} height={'100%'}>
                <Typography component={'span'} variant='body1'>{condition === 'new' ? `Nuevo | +Tanto vendidos` : 'Usado'}</Typography>                  
              </Box>
              <Divider />
              <Box my={2}>
                <Typography variant='h6' fontWeight={'bold'}>{title}</Typography>
                {isFreeShipping ? <Typography color='success' variant='body1'>Envio Gratis</Typography> : <Typography color='error' variant='body1'>Envio Costo</Typography>}
                {original_price ?  <Typography variant="caption" sx={{ textDecoration: 'line-through' }}>${original_price?.toLocaleString("de-DE")}</Typography> : ""}   
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
        <Grid2 size={{ xs: 12, sm: 6, md: 5, lg: 3 }} mt={2} ml={2} justifyContent={'center'}>
          <Box mb={2}>
            <Typography fontWeight={'bold'}>Stock Disponible<Typography>Cantidad disponible: {initial_quantity}</Typography></Typography>              
          </Box>
          <Box>
            {
              coloursAvailable != undefined && <ColoursAvailable colours={coloursAvailable ||[]}/>          
            }
          </Box>
          <Box mt={10}>
            <Button sx={{ paddingX: 5, paddingY: 1.4, mb: 4 }} onClick={() => addProduct()} variant='contained' color='primary'>Agregar al carrito</Button>
            <AlertSnackbar open={open} />
          </Box>
        </Grid2>
      </Grid2>
    )
  )
}

export default DetailProductCard