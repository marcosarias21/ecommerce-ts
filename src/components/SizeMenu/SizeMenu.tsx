import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { AttributeCombination } from '../../types/productDetail.d'

type Prop ={ sizes: AttributeCombination[] | null}

const SizeMenu: React.FC<Prop> = ({ sizes }) => {
  return (
    <FormControl sx={{ width: '100%' }} >
      <InputLabel id="demo-simple-select-label">Talle</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Talles"
        >
          {sizes?.map(s => <MenuItem value={s?.value_name}>{s?.value_name}</MenuItem>)}
        </Select>
    </FormControl>
  )
}

export default SizeMenu