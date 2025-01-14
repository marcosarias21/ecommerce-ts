import { Alert } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';

type Prop = { open: boolean }

const AlertSnackbar: React.FC<Prop> = ({ open }) => {
  return (
    <Snackbar open={open} autoHideDuration={2000}>
      <Alert
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        Producto agregado al carrito!
      </Alert>
    </Snackbar>
  )
}

export default AlertSnackbar