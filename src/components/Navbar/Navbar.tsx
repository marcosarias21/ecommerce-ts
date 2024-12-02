import { AppBar, Box, Container, IconButton, Paper, Toolbar, Typography } from "@mui/material"
import { iconsNav } from "../../helpers/icons";
import { NavIcons } from "../NavIcons";
import { Home, HomeMax } from "@mui/icons-material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static" color="info">
        <Container maxWidth="lg">
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
            <Container maxWidth="lg" sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <Box>
                <IconButton>
                  <Home />
                </IconButton>
              </Box>
              <Box>
                <IconButton color="inherit">
                  <Home />
                </IconButton>
              </Box>
              <Box>
                Categorias
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
                      sx={{ height: '30px' }}
                    />
                  </Search>
                </Box>
                <Box pl={1}>
                  <IconButton color="inherit">
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