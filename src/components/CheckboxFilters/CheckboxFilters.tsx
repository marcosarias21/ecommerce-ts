import { Box, Switch, Typography } from '@mui/material';
import { useCategoriesStore } from '../../store/categoriesStore';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const CheckboxFilters = () => {
  const { setShippingCost } = useCategoriesStore()
  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setShippingCost(checked ? 'free' : '')
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #EDEDED', ":hover": { border: '1px solid gray' } }}>
      <Typography>Envio gratis</Typography>
      <Switch onChange={handleChange} {...label} />
    </Box>
  );
}

export default CheckboxFilters