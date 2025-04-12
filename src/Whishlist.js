import React from 'react'
import './whishlist.css'
import { NavLink } from 'react-router-dom'

function Whishlist({ cartitem, deleteit, whish, setwhish,bitem }) {
  return (
    <div className='whishmain'>

<div className='whishinner'>
      {
        cartitem.map((data, i) => {
          return (
           

              <div className='whishpro'>

                
                <div className='imgtxt'>
                  <img src={data.image} />
                  <p>{data.name}</p>
                  <p>${data.price}</p>

                  <div className='whishbut'>
                  <NavLink to={'/landing'} className='whishlibutt' onClick={()=>{
                    alert('You can successfully buy your product')
                    bitem(data)
                     deleteit(i)
                     setwhish(whish - 1)
                  }}>Buy Now</NavLink>
                  <button className='whishlibutt' onClick={() => {
                    deleteit(i)
                    setwhish(whish - 1)
                  }}>Cancel</button>
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

export default Whishlist
