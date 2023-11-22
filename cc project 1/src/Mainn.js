import { Routes,Route } from 'react-router-dom';
import Login  from './Login.js';
import App  from './App.js';
import Emmpp from './Emmpp.js' ;
const Mainn=()=>
{
    return(

    <Routes>
        <Route path='/' element={<Emmpp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/App' element={<App/>}/>
    </Routes>
   
    )
}
export default Mainn;