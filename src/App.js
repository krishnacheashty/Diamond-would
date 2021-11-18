import { Container } from '@mui/material';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/HomePage/Home/Home';
import Login from './pages/Login/login/Login';
import Register from './pages/Login/register/Register';
import Parchage from './pages/HomePage/Products/parchage/Parchage';
import AuthProvider from './pages/contaxt/AuthContext';
import PrivateRoute from './pages/Login/privateRoute/PrivateRoute';

import MyOrder from './pages/dashbord/myorder/MyOrder';
import ManageAllOrder from './pages/dashbord/myorder/AllManageOrder/ManageAllOrder';
import Dashboard from './pages/dashbord/Dashboard';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/pagenotfound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Container>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path='/'>
                  <Home></Home>
              </Route>
              <Route  path='/home'>
                  <Home></Home>
              </Route>
              <Route  path='/login'>
                  <Login></Login>
              </Route>
              <Route  path='/register'>
                  <Register></Register>
              </Route>
              <PrivateRoute  path='/dashboard'>
                  <Dashboard/>
              </PrivateRoute>
              <Route  path='/myOrder'>
                  <MyOrder/>
              </Route>
              <Route  path='/manageAllOrder'>
                  <ManageAllOrder/>
              </Route>
              <PrivateRoute  path='/parchage/:serviceId'>
                <Parchage></Parchage>{/* private route hobe */}
              </PrivateRoute>
              <PrivateRoute path='/explore'>
                <Explore/>
              </PrivateRoute>
              <Route path='*'>
                <PageNotFound/>
              </Route>

              
            </Switch>
          </Router>
        </AuthProvider>
        
      </Container>
    </div>
  );
}

export default App;
