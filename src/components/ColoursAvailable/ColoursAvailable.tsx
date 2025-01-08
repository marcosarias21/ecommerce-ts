import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { colorVariationsObj } from '../../types/coloursAvaiable'
import { useProductStore } from '../../store/productStore'

type Prop = {
  colours: colorVariationsObj[] | []
}

const ColoursAvailable: React.FC<Prop> = ({ colours }) => {
  const { getColourText } = useProductStore()
  const regex = /^\d+(\.\d+)?\s?(AR|US)$/i;
  const filteredData = colours.filter(item => !regex.test(item.nameColor));

  return (
    <Grid2 container display={'flex'} gap={2}>
      {filteredData?.map(color => 
      <Grid2 size={4} onMouseEnter={() => getColourText(color.nameColor)}>
        <Box sx={{ border: '1px solid lightgray',borderRadius: '5px', height: '100%'  }}>
          <img style={{ height: '100%', width: '100%', borderRadius: '5px', objectFit: 'contain'  }} src={`https://http2.mlstatic.com/D_${color.picture_ids[0]}-O.jpg`} />
        </Box>
      </Grid2>)}
    </Grid2>
  )
}

export default ColoursAvailable