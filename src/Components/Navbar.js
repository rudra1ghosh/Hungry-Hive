import React from 'react'
import {Link,useNavigate} from "react-router-dom"



export default function Navbar() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#C63D2F' }}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/"><div style={{fontFamily: 'Righteous'}}><strong>Hungry Hive</strong></div></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5 " aria-current="page" to="/">My Orders</Link>
      </li>
       : "" } 
       
        
      </ul>
    <div className='d-flex'>
      
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
   
      </div>
    
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
      

          <Link className="btn bg-white text-dark mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-dark mx-1" to="/createuser">Sign Up</Link>
          
</div>: <div>
<div className='btn bg-white text-dark mx-2'>My Cart</div>
<div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div></div>}
      <div className="d-flex" style={{position:"absolute", right:"20px"}}>
      
      </div>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
