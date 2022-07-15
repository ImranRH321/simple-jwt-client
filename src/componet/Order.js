import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
 
  useEffect( () => {
    fetch('http://localhost:5000/order', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      console.log('res', res);
      if(res.status === 401 || res.status === 403){
        navigate("/login")
      }
     return res.json()})
    .then(data => {
      console.log(data);
      setOrders(data)
    })
  },[])

  return (
    <div>
       <h1>Order page data {orders.length}</h1>
    </div>
  );
};

export default Order;