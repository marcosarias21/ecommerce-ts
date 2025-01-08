import { Box } from '@mui/material'
import { Picture, Variation } from '../../types/productDetail.d'

interface Props {
  variations: Variation[] | [],
  pictures: Picture[],
  setIndexImg: (i: number) => void
} 

const CardPictureMain: React.FC<Props> = ({ variations, pictures, setIndexImg }) => {
  console.log(variations)
  return (
    <Box>
      {
        variations.length > 0 ? 
        <Box sx={{ display: 'inline-block' }}>
          {
            variations[0].picture_ids?.map((pic, i) => 
            <Box key={i} sx={{ height: 70, width: 70, border: '1px solid gray', borderRadius: 1, mb: 1, cursor: 'pointer' }} onMouseEnter={() => setIndexImg(i)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={`https://http2.mlstatic.com/D_${pic}-O.jpg`} />
            </Box>)
          }
        </Box> : 
        <Box sx={{ display: 'inline-block' }}>
          {
            pictures?.map((pic, i) => 
            <Box key={i} sx={{ height: 70, width: 70, border: '1px solid gray', borderRadius: 1, mb: 1, cursor: 'pointer' }} onMouseEnter={() => setIndexImg(i)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={pic.url} />
            </Box>)
          }
        </Box>
      }
    </Box>
  )
}

export default CardPictureMain