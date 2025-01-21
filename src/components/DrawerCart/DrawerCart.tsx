import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Drawer, IconButton, Paper, Typography } from '@mui/material'
import { useCartStore } from '../../store/cartStore'
import { Link } from 'react-router-dom'
import { Close } from '@mui/icons-material'

type Prop = { openDrawer: boolean, setOpenDrawer: (boolean: boolean) => void }

const DrawerCart: React.FC<Prop> = ({ openDrawer, setOpenDrawer }) => {
  const { cart, deleteProductCart } = useCartStore()
  const priceTotal = cart.length > 0 ? cart?.map(product => product.price)?.reduce((acc, item) => acc += item) : null

  const handleClose = () => {
    setOpenDrawer(false)
  }

  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='right'>
      <Box textAlign={'end'} sx={{ display: { md: 'none' }, mr: 0 }}>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      <Box>
        <Typography mt={5} textAlign={'center'} variant='h6'>Productos en el carrito:</Typography>
      </Box>
      {
        cart.length > 0 ? 
        <Box>
          {cart.map(product => 
            <Box key={product.id} mb={2} sx={{ width: {xs: '100%', md: 'auto'} }}>
              <Card sx={{ display: 'flex', border: '1px solid rgba(247, 236, 236, 0.62)', height: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 60, height: 100, objectFit: 'contain' }}
                  image={product.image}
                  alt={product.image} />
                <CardActionArea>
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h6">{product.name.substring(0, 23).concat('...')}</Typography>
                      <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>${product.price.toLocaleString("de-DE")}</Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  <Button variant='contained' color='primary'>Pagar</Button>
                  <Button color='error' variant='contained' onClick={() => deleteProductCart(product.id)}>Eliminar</Button>
                </Box>
              </Card>              
              <Divider />
            </Box>
          )}
          <Typography textAlign={'center'} variant='h6'>Total:${priceTotal?.toLocaleString("de-DE")}</Typography>
        </Box>
        :
        <Box>
          <Paper sx={{ display: 'flex', alignItems: 'center', marginX: 2, paddingX:2, borderRadius: 2, marginTop: 5, height:100, backgroundColor: '#F5F5F5' }}>
            <Typography variant='body1'>No hay productos en el carrito</Typography>
          </Paper>
        </Box>
      }
      <Button onClick={handleClose} sx={{ marginTop: 'auto', display: { md: 'none' } }}>Cerrar</Button>
    </Drawer>
  )
}

export default DrawerCart