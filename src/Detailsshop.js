import React from 'react'
import {NavLink, useParams } from 'react-router-dom'
import d from './Data'
function Detailsshop({bitem}) {
  const { shop } = useParams()
  const sp = d.shop.find((f) => { return (f.name === shop )})
  return (
    <div>
       <div className='maindetail'>
            <div className='innerd'>
            {/* <p>{feapro.tool}</p>
            <p>{feapro.logo}</p> */}
            <div className='innerdetail1'>
            <img src={sp.image} />
            </div>
            <div className='innerdetail2'>
            <div className='innerd2'>
            <h1>{sp.name}</h1>
            <h3>{sp.price}</h3>
            </div>
            <div className='click'>
            <NavLink to={'/landing'} className='dlink' onClick={()=>{
                                     alert('You can successfully buy your product')
                                     bitem(sp)
                                     }}>
                                       Buy Now</NavLink>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Detailsshop
