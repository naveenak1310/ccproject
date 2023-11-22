import React from 'react';
import './Emp.css';
import {Link} from 'react-router-dom'
const dear=new URL("./images/react1.jpg",import.meta.url)
function App() {
  return (
    <>
    <header className="header">
        <h1>Employee Management</h1>
    </header>
    <div className='in'>
    <button class="btn"><i class="fa fa-home"></i> Home</button>
<button class="btn"><i class="fa fa-bars"></i> Menu</button>
<button class="btn"><i class="fa fa-trash"></i> Salary</button>
<button class="btn"><i class="fa fa-close"></i> Dashboard</button>
<button class="btn"><i class="fa fa-folder"></i> About us</button>
    <button className='btn'>
      <Link to="/Login">Login</Link>
    </button>
      </div>
    <body>
      <img src={dear}></img>
      <p className='inb'><h2>What Is An Employee Management System?</h2><br></br>
An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. An EMS securely stores and manages the personal and work-related details of employees. This makes it easier for the managers to store and access relevant data when needed.

With the right EMS tool, the HR department can implement processes and help companies achieve their business objectives. By helping managers keep track of admin activities, the tool can help improve employee engagement and increase productivity. These tools also help a company with vacations and absence management and timekeeping. It can even help HR managers and organisational leaders track performance reviews of employees.</p>
    </body>

    <section className="section">
        <h2>Welcome to our website!</h2>
        <p>This is the home page content.</p>
    </section>
    <div className='hi'>
      <p>We are here to help you!About UsJoin SalesSuccess StoriesPress SectionAdvertise with UsJobs & Careers Help Feedback Complaints Customer Care Contact UsSuppliers Tool Kit
Sell on IndiaMART<br></br></p>
<p className='wi'>
Latest BuyLead
Learning Centre
Ship With IndiaMART
Buyers Tool Kit
Post Your Requirement
Products You Buy
Search Products & Suppliers
Pay With IndiaMART
Accounting Solutions
Accounting Software
Tally on Mobile
GST e-Invoice</p>

    </div>
    <footer className="footer">
        &copy; 2023 Your Website. All rights reserved.
    </footer>
    
    </>
  );
}

export default App;