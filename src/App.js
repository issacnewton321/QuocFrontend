import './App.css';
import React,{useEffect} from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import ItemList from './components/ItemList'
import Bottom from './components/Bottom'
import About from './components/About'
import Commit from './components/Commit'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Admin from './components/Admin'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
function App() {
  return (
    <div className="App">     
      <Router>
      
      <Switch>
        
        <_ScrollToTop>
          <Route path="/" exact>
          <Header />
          <Carousel />
          <ItemList />
          <About />
          <Commit />
          <Bottom />
          
        </Route>
        <Route path="/product/detail" exact>
         <Header />
          <Detail />
          <About />
          <Commit />
          <Bottom />
        </Route>
        <Route path="/cart" exact>
          <Header />
          <Cart /> 
          <About />
          <Commit />
          <Bottom />
        </Route>
        <Route path="/login" exact>
          <Header />
          <Login />
          <About />
          <Commit />
          <Bottom />
          
        </Route>
        <Route path="/admin" exact>
            <Admin />
        </Route>
        </_ScrollToTop>
        
    </Switch>
   
      </Router>
      
    </div>
    
  );
}

export default App;
