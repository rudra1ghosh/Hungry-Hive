import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import Badge from 'react-bootstrap/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {useCart} from '../Components/ContextReducer'
import Modal from '../Modal';
import Cart from '../screens/Cart';


export default function Home() {
  
  const [cartView,setCartView]=useState(false);
  let data=useCart();
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");}
  return (
    <div>
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
        <Link className="nav-link active fs-5 " aria-current="page" to="/myOrderData">My Orders</Link>
      </li>
       : "" } 
       
        
      </ul>
    <div className='d-flex'>
    <div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      </div>
    
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
      

          <Link className="btn bg-white text-dark mx-1" to="/login">Login</Link>
          <Link className="btn text-dark mx-1" style={{"backgroundColor":"#FF9B50"}}to="/createuser">Sign Up</Link>
          
</div>: <div>
<div className='btn bg-white text-dark mx-2' onClick={()=>{setCartView(true)}}>My Cart{" "}<Badge pill bg="danger">{data.length}</Badge></div>
{cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
<div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div></div>}
      <div className="d-flex" style={{position:"absolute", right:"20px"}}>
      
      </div>
    </div>
  </div>
</nav>
      </div>
      <div>
        <Carousel/>
      </div>
      <div className="m-3 justify-content-between">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filterItems) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3"
                          key={filterItems._id}
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                           
                            desc={filterItems.description}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>"No such data found"</div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""""""</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
