import { Box } from '@mui/material'
import React from 'react'
import { Picture, Variation } from '../../types/productDetail.d'
import { useProductStore } from '../../store/productStore'

interface Props {
  variations: Variation[]
  pictures: Picture[]
}

const ProductPictureMain: React.FC<Props> = ({variations, pictures}) => {
  const { indexImg } = useProductStore()
  return (
    <Box>{             
        variations.length > 0 && variations[indexImg]?.picture_ids?.length > 1 ? 
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={`https://http2.mlstatic.com/D_${variations[0]?.picture_ids[indexImg]}-O.jpg`} /> :
        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={pictures[indexImg].url} />
    }</Box>
  )
}

export default ProductPictureMain