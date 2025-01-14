import { AppBar, Badge, Box, Button, Container, IconButton, Menu, Toolbar, Typography } from "@mui/material"
import { iconsNav } from "../../helpers/icons";
import { NavIcons } from "../NavIcons";
import { Home } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { MenuNav } from "../MenuNav";
import { Search, SearchIconWrapper, StyledInputBase } from "../../helpers/styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCategoriesStore } from "../../store/categoriesStore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { DrawerCart } from "../DrawerCart";
import useMenu from "../../hooks/useMenu";

type Prop = {
  isShow: boolean
}

const Navbar: React.FC<Prop> = ({ isShow }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const location = useLocation();
  const { cart } = useCartStore()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState<string>("")
  const isProductLocation = location.pathname.includes('product')
  const homeLocation = location.pathname
  const categories = useCategoriesStore((state) => state.categories);
  const { anchorEl, handleClick, handleClose, open } = useMenu()
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${inputValue}`)
    }
  } 

  return (
    <AppBar position={isProductLocation ? 'static' : 'fixed'} color="inherit" sx={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}>
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
        <Box>
          {
            homeLocation != '/' && 
            <IconButton size="large" sx={{ color: "#fff" }} onClick={() => navigate(-1)}>
              <ArrowBackIcon  />
            </IconButton>
          }
        </Box>
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
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ height: '30px', color: '#fff' }}
                />
              </Search>
            </Box>
            <Box pl={1}>
              <IconButton sx={{ color: '#fff' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <Badge badgeContent={cart.length} color="primary">
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
              </IconButton>
              <DrawerCart openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar