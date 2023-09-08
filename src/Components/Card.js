import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();
  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.img })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]); 
  return (
  <div>
    <div
      className="card mx-2 mt-3"
      style={{ width: "18rem", maxHeight: "500px" }}
    >
      <img src={props.foodItem.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>
        <p className="card-text">{props.desc}</p>
        <div className="container" w-100>
          <select
            className="m-2 h-100 rounded"
            onChange={(e)=>setQty(e.target.value)}
            style={{ backgroundColor: "#FF9B50" }}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h-100 rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}
            style={{ backgroundColor: "#FF9B50" }}
          >{priceOptions.map((data)=>{return <option key={data}>{data}</option>})}
            </select>
          <div className='d-inline h-100 fs-5'>₹{finalPrice}/-
           </div>
        </div>
        <hr></hr>
      <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
        
      </div>
      
    </div>
  </div>
        
  )
}

