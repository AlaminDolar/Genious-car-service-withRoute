import './App.css';
import Home from './Pages/Home/Home/Home'

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NotFound from './Pages/Home/NotFound/NotFound';
import Booking from './Pages/Home/Booking/Booking/Booking';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Home/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';





function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
      <Route exact path='/'> 
      <Home></Home>
       </Route>
       <Route path='/home'> 
      <Home></Home> 
      </Route>
       <Route path='/login'> 
      <Login></Login>
      </Route>
      <PrivateRoute path='/booking/:serviceId'>
        <Booking></Booking>
        </PrivateRoute>
      <Route path='*'> 
      <NotFound></NotFound>
       </Route>
</Switch>
     </Router>
     </AuthProvider>
   
   

 
      
   
    
    </div>
  );
}

export default App;
