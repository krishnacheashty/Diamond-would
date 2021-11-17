import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MyOrder from './myorder/MyOrder';
import Review from './review/Review';
import Pay from './pay/Pay';
import AddAdmin from './makeAdmin/AddAdmin';
import AddAProduct from './AddProduct/AddAProduct';
import ManageProudct from './manageProduct/ManageProudct';
import ManageAllOrder from './myorder/AllManageOrder/ManageAllOrder';

const drawerWidth = 220;

function Dashboard(props) {

  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <NavLink to='/home' style={{textDecoration:'none',}}>
            <Button color="inherit" sx={{color:'#000'}}>Home</Button>
        </NavLink>
      
      <Divider />
      <Link to={`${url}/myOrder`}><Button color='inherit'>My Order</Button></Link> <br/>
      <Divider />
      <Link to={`${url}/review`}><Button color='inherit'>Review</Button></Link> <br/>
      <Divider />
      <Link to={`${url}/pay`}><Button color='inherit'>pay</Button></Link>
      
      {/* admin */}
      <Divider />
      <Link to={`${url}/addAdmin`} sx={{textDecoration:'none'}}><Button color='inherit'> Add Admin</Button></Link>
      <Divider />
      
      <Divider />
      <Link to={`${url}/manageAllOrder`} sx={{textDecoration:'none'}}> <Button color='inherit'>Manage All Order</Button></Link>
      
      <Divider />
      <Link to={`${url}/AddAProduct`} sx={{textDecoration:'none'}}> <Button color='inherit'>Add A Product</Button></Link>
      <Divider />
      <Link to={`${url}/ManageProduct`} sx={{textDecoration:'none'}}> <Button color='inherit'>Manage Product</Button></Link>
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    const{user,logOut}=useAuth()



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Dashboard
          </Typography>
          {
                    user.email ?
                    <Box sx={{marginLeft:'80%'}}>
                        
                        <Link to='/login'style={{textDecoration:'none',}}>
                            <Button onClick={logOut} color="inherit" sx={{color:'#fff'}}>Logout</Button>
                        </Link>
                    </Box>
                    : 
                    <NavLink to='/login' style={{textDecoration:'none',}}>
                        <Button color="inherit" sx={{color:'#fff'}}>Login</Button>
                    </NavLink>

                
                }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        
        <Route path={`${path}/myOrder`}>
         <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/review`}>
         <Review></Review>
        </Route>
        <Route path={`${path}/pay`}>
         <Pay/>
        </Route>

        {/* admin */}
        <Route path={`${path}/addAdmin`}>
         <AddAdmin/>
        </Route>
        <Route path={`${path}/manageAllOrder`}>
        <ManageAllOrder/>
        </Route>
        <Route path={`${path}/AddAProduct`}>
         <AddAProduct/>
        </Route>
        <Route path={`${path}/ManageProduct`}>
         <ManageProudct/>
        </Route>
      </Switch>
        {/* route */}
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;