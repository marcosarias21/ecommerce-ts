import { IconNavItem } from '../../types/types.d'
import { Box, Link, Typography } from '@mui/material'

const NavIcons = ({ button, icon, textInfo  }: IconNavItem ) => {
  return (
    <Box display={'flex'} justifyContent={'center'} gap={1}>
      {
        button === false ? <Box display={'flex'}>{icon}<Typography variant='body2'>{textInfo}</Typography></Box>: <Link sx={{ display: 'flex', justifyContent: 'center', color: 'black' }}>{icon} <Typography component={"span"} variant='body2'>{textInfo}</Typography></Link>
      }
    </Box>
  )
}

export default NavIcons