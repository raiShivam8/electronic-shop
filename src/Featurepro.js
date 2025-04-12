import { useState } from 'react';
import d from './Data';
import './feature.css';
import { GrCart } from "react-icons/gr";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';


function Featurepro({ additems,add2, whish, setwhish,cn,setcn, search }) {
    const [up, setup] = useState('');
    const [color, setcolor] = useState([]);

    const filter = d.feature.filter((data) => {
        return data.name && search ? data.name.toLowerCase().includes(search.toLowerCase()) : false;
    });





    const toggleHeart = (i) => {
        setcolor((pr) => { return pr.includes(i) ? pr.filter(index => index !== i) : [...pr, i] })
    };

    return (
        <div className='feature'>
            <div className='innerfeature'>
                <div className='innerh2'>
                    <h1>Featured products</h1>
                </div>
                <div className='innerf'>

                    {
                        filter.map((d,i) => {
                            return (
                                
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
                                <div className='filterimgtxt'>
                                    <div className='filterimg'>
                                        <img src={d.image} />
                                    </div>
                                    <div className='filtertxt'>
                                        <p>{d.name}</p>
                                        <p>${d.price}</p>
                                    </div>
                                </div>
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


                        d.feature.map((data,i) => {
                            return (
                                <div className='fmain'>
                                    <div className='fmaintool'>
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

                                    <div className='imgtxtmain'>

                                      <NavLink to={`/details1/${data.name}`} className='nlink'>  
                                    <div className='fimgtxt'>
                                        <div className='fimg'>
                                            <img src={data.image} />
                                        </div>
                                        <div className='ftxt'>
                                            <p>{data.name}</p>
                                            <p>${data.price}</p>
                                        </div>
                                    </div>
                                    </NavLink>

                                    <div className='butf' onClick={() => {
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
    );
}

export default Featurepro;
