import React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
import './Loginn.css';
import { Link } from '@mui/material';
const App=()=> 
{

  return (
    <body>

    <div >
    <div className="oi">
    <br></br>  
    <h2>Login</h2>
    <h3>EMPLOYEE MANAGEMENT</h3>
    <form >
      <table cellPadding={10} cellSpacing={10}>
        <tr>
      <td><TextField id="standard-basic" label="UserName" variant="standard" /></td>
      </tr>
        <tr>
      <td><TextField id="standard-basic" label="Password" variant="standard" /></td>
      </tr>
      </table>
      <button className="btn">Enter</button><br></br><br></br>
     <p> Do You have account?</p><Link to="/App"><a href='/App'>Signup</a></Link>

    </form>
           
    </div>
    </div>
    </body>
  )
}

export default App;