import { Box, CircularProgress } from '@mui/material'

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <CircularProgress color='inherit' />
    </Box>
  )
}

export default Spinner