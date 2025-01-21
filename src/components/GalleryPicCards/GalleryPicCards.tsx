import { Box } from '@mui/material'
import { Picture, Variation } from '../../types/productDetail.d'
import { useProductStore } from '../../store/productStore'
import { useEffect, useState } from 'react'
import { colorVariationsObj } from '../../types/coloursAvaiable'

interface Props {
  variations: Variation[] | [],
  pictures: Picture[],
  coloursAvailable: colorVariationsObj[] | []
} 

const GalleryPicCards: React.FC<Props> = ({ variations, pictures, coloursAvailable }) => {
  const { updateIndexImg } = useProductStore()
  const [colourAvailable, setColourAvailable] = useState<colorVariationsObj[] | Variation[]>([])
  console.log(pictures.length)

  useEffect(() => {
    if (variations.length > 1 && colourAvailable.length > 1) {
      setColourAvailable(coloursAvailable)
    } else {
      setColourAvailable(variations)
    }
  }, [colourAvailable])

  return (
    <Box sx={{ height: '100%' }}>
      {
        variations.length > 0 ? 
        <Box sx={{ display: 'inline-block' }}>
          {
            colourAvailable[0]?.picture_ids?.map((pic, i) => 
            <Box key={i} sx={{ height: 70, width: 70, border: '1px solid lightgray', borderRadius: 1, mb: 1, cursor: 'pointer' }} onMouseEnter={() => updateIndexImg(i)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={`https://http2.mlstatic.com/D_${pic}-O.jpg`} />
            </Box>)
          }
        </Box> : 
        <Box sx={{ display: 'inline-block' }}>
          {
            pictures?.map((pic, i) => 
            <Box key={i} sx={{ height: 70, width: 70, border: '1px solid lightgray', borderRadius: 1, mb: 1, cursor: 'pointer' }} onMouseEnter={() => updateIndexImg(i)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={pic.url} />
            </Box>).splice(0, 7)
          }
        </Box>
      }
    </Box>
  )
}

export default GalleryPicCards