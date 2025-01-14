import { Box, Button, Card, CardContent, CardMedia, Divider, Drawer, Typography } from '@mui/material'
import { useCartStore } from '../../store/cartStore'

type Prop = { openDrawer: boolean, setOpenDrawer: (boolean: boolean) => void }

const DrawerCart: React.FC<Prop> = ({ openDrawer, setOpenDrawer }) => {
  const { cart, deleteProductCart } = useCartStore()

  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='right'>
      <Box>
        <Typography textAlign={'center'} variant='h6'>Productos en el carrito:</Typography>
      </Box>
      {cart.map(product => 
        <>
        <Card sx={{ display: 'flex', mt: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: 100, objectFit: 'contain' }}
            image={product.image}
            alt={product.image} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                {product.name.substring(0, 23).concat('...')}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                ${product.price.toLocaleString("de-DE")}
              </Typography>
            </CardContent>
            <Button color='error' variant='contained' onClick={() => deleteProductCart(product.id)}>Delete</Button>
          </Box>
        </Card>
        <Divider />
        </>
      )}
      
    </Drawer>
  )
}

export default DrawerCart