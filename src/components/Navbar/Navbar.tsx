import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography } from "@mui/material"
import { iconsNav } from "../../helpers/icons";
import { NavIcons } from "../NavIcons";
import { Home } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { MenuNav } from "../MenuNav";
import { Search, SearchIconWrapper, StyledInputBase } from "../../helpers/styled";
import { useCategoriesStore } from "../../store/categoriesStore";
import { Link, useLocation } from "react-router-dom";

type Prop = {
  isShow: boolean
}

const Navbar: React.FC<Prop> = ({ isShow }) => {
  const location = useLocation();
  const isProductLocation = location.pathname.includes('product')
  const categories = useCategoriesStore((state) => state.categories);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position={isProductLocation ? 'static' : 'fixed'} color="inherit">
        <Container maxWidth="lg" sx={{ display: isShow ? 'none' : 'block' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }} >
            <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
              <Typography variant="h6" fontWeight={"bold"} component="div" sx={{ flexGrow: 1 }}>
                MercadoTypescript
              </Typography>
            </Box>
            <Box display={"flex"} gap={2}>
              {
                iconsNav.map((icon, i) =>  <NavIcons {...icon} key={i} /> )
              }              
            </Box>          
          </Toolbar>
        </Container>
          <Toolbar variant="dense" sx={{ backgroundColor: "black" }}>
            <Container maxWidth="lg" sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box>
                <IconButton>
                  <Home />
                </IconButton>
              </Box>
              <Box>
                <Link to={'/'}>
                  <IconButton sx={{ color: '#e0e0e0' }}>
                    <Home />
                  </IconButton>
                </Link>
              </Box>
              <Box>
              <div>
                <Button
                  variant="contained"
                  color="inherit"                
                  onClick={handleClick}
                >
                  Categorias
                </Button>
                <Menu id="dropdown-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                  {
                    categories?.map(categorie => <MenuNav handleClose={handleClose} {...categorie} key={categorie.id}/>)
                  }                  
                </Menu>
              </div>
              </Box>
              <Box marginLeft={'auto'} display={'flex'} alignItems={"center"}>
                <Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      sx={{ height: '30px', color: '#fff' }}
                    />
                  </Search>
                </Box>
                <Box pl={1}>
                  <IconButton sx={{ color: '#fff' }} >
                    <ShoppingCartIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Container>
          </Toolbar>
    </AppBar>
  )
}

export default Navbar