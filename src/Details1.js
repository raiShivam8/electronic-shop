import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import d from './Data'
import './details1.css'
function Details1({bitem}) {
    const { fea } = useParams()
    const feapro = d.feature.find((f) => { return (f.name === fea )})
    return (
        <div className='maindetail'>
            <div className='innerd'>
            {/* <p>{feapro.tool}</p>
            <p>{feapro.logo}</p> */}
            <div className='innerdetail1'>
            <img src={feapro.image} />
            </div>
            <div className='innerdetail2'>
            <div className='innerd2'>
            <h1>{feapro.name}</h1>
            <h3>${feapro.price}</h3>
            </div>
            <div className='click'>
                <NavLink to={'/landing'} className='dlink' onClick={()=>{
                                     alert('You can successfully buy your product')
                                     bitem(feapro)
                                     }}>
                                       Buy Now</NavLink>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Details1
