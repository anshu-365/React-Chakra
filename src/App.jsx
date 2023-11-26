
import React from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Video from './component/Video';
import Upload from './component/Upload';
import Login from './component/Login';
import Signup from './component/Signup';


function App(){
  return (
    <>
    <Router>
     <Header/>
           <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Video/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/*' element={<Navigate to="/"/>}/>
        
      </Routes>
      <Footer/>
    </Router>


    </>
  );
}
export default App;
//  {/* <Button colorScheme={'whatsapp'} py={'4'}>click</Button>p=paDDIND m=marging */}
