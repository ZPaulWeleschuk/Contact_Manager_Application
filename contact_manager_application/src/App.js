import React from 'react';
import './App.css';
import Header from './components/header';
import { Routes, Route,  Navigate} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
 import EditUserScreen from './screens/EditUserScreen';
 import CreateUserScreen from './screens/CreateUserScreen';




let App = ()=> {
  return (
    <React.Fragment>
    <Header/>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/create" element={<CreateUserScreen/>}/>
        <Route path="/edit/:id" element={<EditUserScreen/>}/> 
      </Routes>
</React.Fragment>
  
  );
}

export default App;
