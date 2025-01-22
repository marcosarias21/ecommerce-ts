import { Alert } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';

type Prop = { open: boolean, text: string, severity: 'success' | 'error' }

const AlertSnackbar: React.FC<Prop> = ({ open, text, severity}) => {
  return (
    <Snackbar open={open} autoHideDuration={2000}>
      <Alert
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}

export default AlertSnackbar