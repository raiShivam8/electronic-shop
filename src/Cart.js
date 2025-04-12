import React from 'react'
import './cart.css'
import { NavLink } from 'react-router-dom'

function Cart({fcart,cartdelete,cn,setcn,bitem}) {
  return (
    <div className='cartmain'>
      <div className='cartmaininner'>
      {
        fcart.map((data,index)=>{
          return(
            <div className='cartpro'>
             <div className='cartimgtxt'>
              <img src={data.image}/>
              <p>{data.name}</p>
              <p>${data.price}</p>
                <div className='cartbutt'>
                    <NavLink to={'/landing'} className='clink' onClick={()=>{
                      alert('You can successfully buy your product')
                      bitem(data)
                      cartdelete(index,data)
                      setcn(cn-1)
                      }}>
                        Buy Now</NavLink>
                    <button className='cartitembut' onClick={()=>{
                      cartdelete(index,data)
                      setcn(cn-1)
                      }} >Cancel</button>
                </div>
             </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart
