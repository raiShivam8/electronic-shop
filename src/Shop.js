import React from 'react'
import d from './Data'
import { GrCart } from "react-icons/gr";
import { useState } from 'react';
// import { motion } from 'framer-motion'
import './shop.css'
import { NavLink } from 'react-router-dom';

function Shop({additems,search,whish,setwhish,cn,setcn,add2}) {
  const [up, setup] = useState('')
  const [color, setcolor] = useState([]);

  const filter = d.shop.filter((data) => {
    return data.name && search ? data.name.toLowerCase().includes(search.toLowerCase()) : false;
});

const toggleHeart = (i) => {
  setcolor((pr)=>{return pr.includes(i) ? pr.filter(index => index !== i) : [...pr, i]})
};

  return (
    <div className='shop'>
      <div className='shopinner'>
      <div className='heading'>
        <h1>Shop Here...</h1>
      </div>
      <div className='shopproduct'>

        {
             filter.map((d,i)=>{
              return(
                <div className='filtermain'>
                <div className='filtermaintool'>
                    <p>{d.tool}</p>
                    <p onClick={() => {
                        alert('added to whishlist')
                        toggleHeart(i);
                        additems(d);
                        setwhish(whish + 1)
                    }}
                    style={{ color: color.includes(i) ? 'red' : 'black' }}
                    >{d.logo}</p>
                </div>

                <div className='filterimgtxtmain'>

                     <NavLink to={`/detailsshop/${d.name}`} className='nlink'>  
                <div className='filterimgtxt'>
                    <div className='filterimg'>
                        <img src={d.image} />
                    </div>
                    <div className='filtertxt'>
                        <p>{d.name}</p>
                        <p>${d.price}</p>
                    </div>
                </div>
                    </NavLink>

                <div className='butfilter' onClick={() => {
                    alert(`${d.name} added to cart`)
                    add2(d)
                    setcn(cn+1)
                }}>
                    <button>Add To Cart  <GrCart /></button>
                </div>
                </div>


            </div>
              )
          })
        }

        {
          d.shop.map((data,i) => {
            return (
                <div className='smain'>
                    <div className='smaintool'>
                        <p>{data.tool}</p>
                        <p onClick={() => {
                            alert('added to whishlist')
                            toggleHeart(i);
                            additems(data);
                            setwhish(whish + 1)
                        }}
                        style={{ color: color.includes(i) ? 'red' : 'black' }}
                        >{data.logo}</p>
                    </div>

                    <div className='simgtxtmain'>

                    <NavLink to={`/detailsshop/${data.name}`} className='nlink'>
                    <div className='simgtxt'>
                        <div className='simg'>
                            <img src={data.image} />
                        </div>
                        <div className='stxt'>
                            <p>{data.name}</p>
                            <p>${data.price}</p>
                        </div>
                    </div>
                        </NavLink>

                    <div className='buts' onClick={() => {
                        alert(`${data.name} added to cart`)
                        add2(data)
                        setcn(cn+1)
                    }}>
                        <button>Add To Cart  <GrCart /></button>
                    </div>
                    </div>


                </div>
            )
        })
        }
      </div>
      </div>
    </div>
  )
}

export default Shop
