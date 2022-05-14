import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import styled from "styled-components";
import "../css/Nav.css"
import FlightIcon from '@mui/icons-material/Flight';

const Nav = () => {

  //   const Button = styled.button`
  //   border-width: 0px;
  //   border-style: non;
  //   border-color: ;
  //   color: white;
  //   background:#1976d2;
  //   font-family: "Roboto","Helvetica","Arial",sans-serif;
  //     font-weight: 500;
  //     font-size: 1.25rem;
  //     line-height: 1.6;
  //     letter-spacing: 0.0075em;


  //   }
  // `;

  return <div style={{ marginTop: "2px" }}>
    <div className="container" >
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
              <FlightIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Flight Booking App
            </Typography>
            {/* <a href="" target="_blank">
          <Button className='btn btn-outline-primary'>Login</Button>
        <button type="button" class="btn btn-outline-primary">Primary</button> */}

            {/* </a> */}


          </Toolbar>
        </AppBar>
      </Box>


    </div>
  </div>
}
export default Nav;