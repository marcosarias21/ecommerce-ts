import { Box, CircularProgress } from '@mui/material'

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Box>
        <CircularProgress color='inherit' />
      </Box>
    </Box>
  )
}

export default Spinner