import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import { colorVariationsObj } from '../../types/coloursAvaiable'
import { useProductStore } from '../../store/productStore'

type Prop = {
  colours: colorVariationsObj[] | []
}

const ColoursAvailable: React.FC<Prop> = ({ colours }) => {
  const { getColourText, colour } = useProductStore()
  const regex = /^[A-Za-z]*\d+(\.\d+)?(\s?(AR|US))?$/i;
  const filteredData = colours.filter(item => !regex.test(item.nameColor));

  return (
    <Grid2 container display={'block'} gap={2}>
      <Box>
        <Typography variant='body1' fontWeight={'bold'}>Colores Disponibles: <Typography component={'span'} variant='body2'>{colour}</Typography></Typography>
      </Box>
      <Box display={'flex'} gap={1} mt={2}>
        {filteredData?.map(color => 
        <Grid2 display={'flex'} size={3} onMouseEnter={() => getColourText(color.nameColor)}>
          <Box sx={{ display: 'flex', border: '1px solid lightgray',borderRadius: '5px', height: '100%'  }}>
            <img style={{ height: '100%', width: '100%', borderRadius: '5px', objectFit: 'contain'  }} src={`https://http2.mlstatic.com/D_${color.picture_ids[0]}-O.jpg`} />
          </Box>
        </Grid2>)}
      </Box>
    </Grid2>
  )
}

export default ColoursAvailable