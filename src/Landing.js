import React, { useState } from 'react'
import './landing.css'
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Landing({ bcart, porder, setporder }) {
  const [total, settotal] = useState(0)
  const [show, setshow] = useState(true)
  const [bform, setbform] = useState({ first: '', last: '', phone: '', email: '', address: '', payment: '' })

  function increment(price) {
    setporder(prevOrder => prevOrder + 1);
    if (total == 0) {
      settotal(prevTotal => prevTotal + price + price);
    }
    else {
      settotal(prevTotal => prevTotal + price);
    }
  }


  function decrement(price) {
    if (porder > 1) {
      setporder(prevOrder => prevOrder - 1);
      settotal(prevTotal => prevTotal - price);
    }
  }

  function billhandler(b) {
    setbform({ ...bform, [b.target.name]: b.target.value })
  }

  async function billsubmit(b) {
    b.preventDefault();
    alert('Thank You. Your Order Is Confirmed ');

    try {
        await axios.post("http://localhost:2211/landing", bform);
        alert('Data is registered');
    } catch (er) {
        alert('Data not registered');
    }

    setbform({ first: '', last: '', phone: '', email: '', address: '', payment: '' });
}





  return (
    <div className='landing'>
      <div className='innerlanding'>
        <div className='landingtitle'>
          <h1>Orders :</h1>
        </div>
        <div className='landingdetails'>
          {
            bcart.map((data,i) => {
              if (i<=0){
              return (
                <motion.div className='lmain'>

                  <div className='lleft'>
                    <div className='leftinner1'>
                      <div className='limg'>
                        <img src={data.image} />
                      </div>
                      <div className='ltext'>
                        <div className='tt'>
                          <p>{data.name}</p>
                          <p>${data.price}</p>
                        </div>
                        <div className='lbut'>
                          <NavLink to='/' className='llink' onClick={show ? { display: 'block' } : { display: 'none' }}>Order Cancel</NavLink>
                        </div>
                      </div>
                    </div>
                    <div className='leftinner2'>
                      <div className='leftdown1'>
                        <h2>Quantity :</h2>
                        <div className='ldown1inner'>
                          <FaMinus onClick={() => decrement(data.price)} />
                          <input type='text' value={porder} readOnly />
                          <FaPlus onClick={() => increment(data.price)} />
                        </div>

                      </div>
                      <div className='leftdown2'>
                        <h2>Subtotal :</h2>
                        <h2>${total == 0 ? data.price : total}</h2>
                      </div>

                    </div>
                  </div>

                  <div className='lright'>
                    <div className='bill'>
                      <h2>Billing Details :</h2>
                    </div>

                    <form onSubmit={billsubmit} className='mainbill'>

                      <div className='billup'>
                        <div className='billform'>
                          <div className='billinput1'>
                            <h5>First Name :</h5>
                            <input type='text' value={bform.first} name='first' onChange={billhandler} required />
                          </div>
                          <div className='billinput1'>
                            <h5>Last Name :</h5>
                            <input type='text' value={bform.last} name='last' onChange={billhandler} required />
                          </div>
                          <div className='billinput1'>
                            <h5>Phone Number :</h5>
                            <input type='number'value={bform.phone} name='phone' onChange={billhandler} required />
                          </div>
                          <div className='billinput1'>
                            <h5>Email :</h5>
                            <input type='text' value={bform.email} name='email' onChange={billhandler} required />
                          </div>
                        </div>

                        <div className='billform2'>
                          <div className='address'>
                            <h5>Address :</h5>
                            <textarea placeholder='Address :' rows={9} cols={34} name='address' value={bform.address} onChange={billhandler} required></textarea>
                          </div>
                        </div>
                      </div>

                      <div className='billdown'>
                        <div className='bdown1'>
                          <h3>Payment Method :</h3>
                        </div>
                        <div className='bdown2'>
                          <div className='bdown2input'>
                          <input type='radio' name='payment' value='Net_Banking' checked={bform.payment === 'Net_Banking'} onChange={billhandler} required />
                            <h5>Net Banking</h5>
                          </div>
                          <div className='bdown2input'>
                          <input type='radio' name='payment' value='Check_payments' checked={bform.payment === 'Check_payments'} onChange={billhandler} required />
                            <h5>Check payments</h5>
                          </div>
                          <div className='bdown2input'>
                          <input type='radio' name='payment' value='Cash_on_delivery' checked={bform.payment === 'Cash_on_delivery'} onChange={billhandler} required />
                            <h5>Cash on delivery</h5>
                          </div>
                        </div>
                        <div className='bdown3'>
                          {/* <NavLink to='/' className='llink' onClick={show ? { display: 'block' } : { display: 'none' }}>Place Order</NavLink> */}
                        {/* <inpu type='submit' value='Place Order'/> */}
                        <button type='submit' >Place Order</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )
            }
            })

          }
        </div>
      </div>
    </div>
  )

}

export default Landing
