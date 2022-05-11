import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";


const Nav = ()=>
{
  
  const Button = styled.button`
  border-width: 0px;
  border-style: non;
  border-color: ;
  color: white;
  background:#1976d2;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;


  }
`;
return <div>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Flight Booking App
          </Typography>
        <a href="" target="_blank">
          <Button color='inherit' >  Login</Button>
          </a>

         
        </Toolbar>
      </AppBar>
    </Box>
  


</div>
}
export default Nav;