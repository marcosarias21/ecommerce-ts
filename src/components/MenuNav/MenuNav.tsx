import { List, MenuItem } from '@mui/material'
import React from 'react'
import { Categorie } from '../../types/types.d';
import { useCategoriesStore } from '../../store/categoriesStore';
import { Link } from 'react-router-dom';

type MenuNavProps = {
  handleClose: () => void;
  id: Categorie['id']
  name: Categorie['name']
};

const MenuNav: React.FC<MenuNavProps> = ({ handleClose, id, name }) => {
  const setCategorieId = useCategoriesStore((state) => state.setCategorieId)
  
  const handleClick = () => {
    setCategorieId(id)
    handleClose()
  }
  
  return (
    <List sx={{ display: 'ruby' }}>
      <Link to={`/category/${id}`}>
        <MenuItem onClick={handleClick}>{name}</MenuItem>  
      </Link>
    </List>
  )
}

export default MenuNav