import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Home } from '@mui/icons-material';
import { IconNavItem } from '../types/types.d';



export const iconsNav : IconNavItem[] = [
  {
    icon: <WhatsAppIcon fontSize="small" />,
    textInfo: "+ (111) 11111111",
    button: false
  },
  {
    icon: <EmailIcon fontSize="small" />,
    textInfo:  "info@info.com.ar",
    button: false
  },
  {
    icon: <ApartmentIcon fontSize="small" />,
    textInfo:  "La empresa",
    button: true
  },
  {
    icon: <Home fontSize="small" />,
    textInfo:  "asd@asd.com.ar",
    button: true
  }
  
]