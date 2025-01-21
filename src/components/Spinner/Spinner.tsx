import { Box, CircularProgress } from '@mui/material'

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box>
        <CircularProgress color='inherit' />
      </Box>
    </Box>
  )
}

export default Spinner