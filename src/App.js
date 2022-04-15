import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact' 
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import Settings from './components/Settings'
import ProductList from './pages/ProductList'
import { useState } from 'react';
import Description from './pages/Description';
function App() {
  const[list,setList]=useState([
    {id:1,name:'prod1',desc:"description of product number1"},
    {id:2,name:'prod2',desc:"description of product number2"},
    {id:3,name:'prod3',desc:"description of product number3"}
  ])
  return (

    <div className="App">
     <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/profile' element={<Profile/>}>
          <Route path='settings' element={<Settings/>}/>
        </Route>
        <Route path="/products" element={<ProductList prodList={list}/>}/>
        <Route path="/products/:prodId" element={<Description prodList={list}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
