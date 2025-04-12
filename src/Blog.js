import React from 'react'
import './blog.css'
import b from './Data'
function Blog() {
  return (
    <div className='mainblog'>
      <div className='innerblog'>
        <div className='blog1'>
          <h2>Latest Blog Post</h2>
        </div>
        <div className='blog2duplicate'>
        <div className='blog2'>
          {
            b.blog.map((data)=>(
              <div className='mblog'>
              <div className='blogimg'>
                <img src={data.image}/>
              </div>
              <div className='blogtext'>
                <h6>{data.date}</h6>
                <h4>{data.name}</h4>
                <h5>{data.details}</h5>
                <p>READ MORE... </p>
              </div>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
