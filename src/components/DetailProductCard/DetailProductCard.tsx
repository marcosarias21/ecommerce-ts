import { Box, Button, Container, Divider, FormControl, Grid2, InputLabel, List, MenuItem, Paper, Select, Typography } from '@mui/material'
import { Attribute, Product } from '../../types/productDetail.d'
import { useEffect, useState } from 'react'
import { arrayAtr } from '../../helpers/arrayAttributes'

type Prop = Product

const DetailProductCard: React.FC<Prop> = ({ title, pictures, original_price, condition, shipping, base_price, attributes, initial_quantity, variations }) => {
  const [indexImg, setIndexImg] = useState<number>(0)
  const [isSelected, setIsSelected] = useState( )
  const [talle, setTalle] = useState<Attribute[]>()
  const [color, setColor] = useState<string>(variations[0]?.attribute_combinations[0].value_name)
  const isFreeShipping = shipping?.free_shipping
  const filteredAtr = attributes?.filter(atribute => arrayAtr.includes(atribute?.id))
 
  const getTalle = () => {
    const colorVariacion = variations.filter(variation => variation?.attribute_combinations.some(vari => vari?.id === 'Gris-Coral'))
    const tipoVariacion = variations?.filter(variation => variation?.attribute_combinations.some(vari => vari?.value_name === color))
    const filtrarTalle = tipoVariacion.flatMap(type => type.attribute_combinations.filter(size => size.id === "SIZE"))
    setTalle(filtrarTalle)  
  }

  const getColoresUnicos = () => {
    const coloresUnicos: string[] = []
    const atributosVariaciones = variations.filter(variation => variation.attribute_combinations.some(vari => vari.name === "Color"))
    console.log(atributosVariaciones)
    atributosVariaciones?.forEach(color => {
      color.attribute_combinations.forEach(col => {
        if(!coloresUnicos.some(unico => unico.name === col.value_name) && col.value_name.length > 6) {
            coloresUnicos.push({ name: col.value_name, pic: color.picture_ids })
          }
        } 
      )
    })
    console.log(coloresUnicos)
  }
  useEffect(() => {
    getTalle()
    getColoresUnicos()
  }, [variations])

  return (
    (
      <Paper elevation={3} sx={{ maxWidth: "1200px", margin: "auto", padding: 2, mt: 4, borderRadius: 3 }}>
        <Grid2 container>
          <Grid2 size={1}>
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
          </Grid2>
          <Grid2 display={'flex'} size={4} gap={2}>
            <Box>
              <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={pictures[indexImg]?.url} />
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <Container>
              <Box>
                <Box display={'flex'} gap={3} height={'100%'}>
                  <Typography component={'span'} variant='body1'>{condition === 'new' ? `Nuevo | +Tanto vendidos` : 'Usado'}</Typography>                  
                </Box>
                <Divider />
                <Box my={2}>
                  <Typography variant='h6' fontWeight={'bold'}>{title}</Typography>
                  {isFreeShipping ? <Typography color='success' variant='body1'>Envio Gratis</Typography> : <Typography color='error' variant='body1'>Envio Costo</Typography>}
                  {original_price ?  <Typography variant="caption" sx={{ textDecoration: 'line-through' }}>${original_price?.toLocaleString("de-DE")}
                  </Typography> : ""}   
                  <Typography variant='h6'>${base_price.toLocaleString("de-DE")}</Typography>
                </Box>
                <Box>
                  {filteredAtr?.map(attribute => 
                  <List>
                    <Typography fontWeight={'bold'} component={'span'}>-{attribute.name}:</Typography> {attribute.value_name}
                  </List>)}
                </Box>
              </Box>
            </Container>
          </Grid2>
          <Divider orientation='vertical' flexItem />
          <Grid2 size={2} mt={2} ml={2}>
            <Box mb={2}>
              <Typography fontWeight={'bold'}>Stock Disponible</Typography>
              <Typography>Cantidad disponible: {initial_quantity}</Typography>
            </Box>
            <Box>
              <Box>
                <Typography>Color:</Typography>  
              </Box>
              <Box mt={5}>
                <FormControl sx={{ width: '100%' }} >
                  <InputLabel id="demo-simple-select-label">Talle</InputLabel>
                  <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Talles"
                  >
                    {talle?.map(s => <MenuItem value={s?.value_name}>{s?.value_name}</MenuItem>)}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid2>
          <Grid2 display={'flex'} justifyContent={'end'} size={12}>
            <Box display={'flex'}>
              <Button variant='contained'>Agregar al carrito</Button>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    )
  
  )
}

export default DetailProductCard