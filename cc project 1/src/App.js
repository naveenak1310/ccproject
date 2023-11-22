import React from "react";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import './App.css';
const App=()=> 
{

  return (
    <div >
    <div className="oi">
    <br></br> 
     <h1>Sign up</h1> 
    <form >
      <table cellPadding={10} cellSpacing={10}>
        <tr>
      <td><label>Email:</label></td>
      <td><input type="email" placeholder="Enter Email"></input></td>
      </tr>
        <tr>
      <td><label>Password:</label></td>
      <td><input type="password" placeholder="Enter Password"></input></td>
      </tr>
      </table>
      <label><input type="checkbox"></input>Remember me</label><br></br>
      <a href="https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/&service=mail&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin"> Forget password </a><br></br>
      <a href="https://www.pockethrms.com/login/" target="">Sign in?</a><br></br>
       <button className="ok">Sign up</button><br></br>

    </form>
           
    </div>
    </div>
  )
}

export default App;