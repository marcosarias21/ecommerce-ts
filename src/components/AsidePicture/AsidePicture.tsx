import { Box } from '@mui/material'
import React from 'react'
import { Picture, Variation } from '../../types/productDetail.d'

interface Props {
  variations: Variation[]
  indexImg: number
  pictures: Picture[]
}

const AsidePicture: React.FC<Props> = ({variations, indexImg, pictures}) => {
  return (
    <Box>{             
        variations.length > 0 && variations[indexImg]?.picture_ids?.length > 1 ? 
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={`https://http2.mlstatic.com/D_${variations[0]?.picture_ids[indexImg]}-O.jpg`} /> :
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={pictures[indexImg].url} />
    }</Box>
  )
}

export default AsidePicture