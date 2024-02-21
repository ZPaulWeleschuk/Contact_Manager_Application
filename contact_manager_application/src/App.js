import React from 'react';
import './App.css';
import Header from './components/header';
import { Routes, Route,  Navigate} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
 import EditContactScreen from './screens/EditContactScreen';
 import CreateContactScreen from './screens/CreateContactScreen';




let App = ()=> {
  return (
    <React.Fragment>
    <Header/>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/create" element={<CreateContactScreen/>}/>
        <Route path="/edit/:contactId" element={<EditContactScreen/>}/> 
      </Routes>
</React.Fragment>
  
  );
}

export default App;
