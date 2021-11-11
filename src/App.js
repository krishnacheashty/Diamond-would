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

function App() {
  return (
    <div className="App">
      <Container>
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
         <Route  path='/'>
            
         </Route>
       </Switch>
     </Router>
        
      </Container>
    </div>
  );
}

export default App;
