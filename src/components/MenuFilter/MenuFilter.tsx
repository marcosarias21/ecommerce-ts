import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { AvailableFilter, Sort } from "../../types/categorydata.d"
import { useCategoriesStore } from "../../store/categoriesStore"


type Prop = {
  toSortData: AvailableFilter[] | Sort[] 
}

const MenuFilter: React.FC<Prop> = ({ toSortData }) => {
  const { setType, type } = useCategoriesStore()
  return (
    <FormControl size="small" sx={{ width: '100%' }}>
      <InputLabel id="demo-simple-select-label">Ordenar por:</InputLabel>
        <Select 
          onChange={(e) => setType(e.target.value)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Ordernar por"
        >
          {
            toSortData?.map(data => <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>).reverse()
          }
        </Select>
    </FormControl>
  )
}

export default MenuFilter