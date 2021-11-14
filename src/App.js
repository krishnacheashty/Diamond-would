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
              <Route  path='/parchage'>
                  <Parchage></Parchage>{/* private route hobe */}
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
        
      </Container>
    </div>
  );
}

export default App;
