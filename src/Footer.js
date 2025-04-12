import React, { useState } from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaSpotify, FaYoutube, FaTwitter, FaInstagram, FaSquareFacebook, FaHeadset } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";
import {motion} from 'framer-motion'
import './footer.css'
import axios from 'axios'

function Footer({setdown2,setdisplay,setdisplay2,setdisplay3}) {
    const [foot,setfoot] = useState({emailf:''})

    function handleemail(f){
        setfoot({...foot,[f.target.name] : f.target.value})
    }

    async function hanadleemailsubmit(f){
        f.preventDefault()
        try{
            const res = await axios.post("http://localhost:2211/footer",foot)
            alert('register')
        }
        catch(err){
            alert('not register')
          }
    }

    function chng(){
        setdown2(false)
        setdisplay(false)
        setdisplay2(false)
        setdisplay3(false)
    }
    return (
        <motion.div className='footermain' whileInView={chng} >
            <div className='innerfooter'>

                <div className='foot1'>
                <ul>
                    <li><h2>Sign up to Newsletter</h2></li>
                    <form onSubmit={hanadleemailsubmit}>
                        
                        <input  type='text' placeholder='Your Email Address:' name='emailf' onChange={handleemail} />
                        <div className='messge' >
                            <FaRegEnvelope className='innermsg' />
                        </div>
                        
                    </form>
                    <li>
                        <h3>Follow us on:</h3>
                        <p>
                            <FaSpotify />
                            <FaYoutube />
                            <FaTwitter />
                            <FaInstagram />
                            <FaSquareFacebook />
                        </p>
                    </li>
                </ul>
                </div>

                <div className='foot2'>
                    
                    <ul>
                        <h3>Privacy Policy</h3>
                        <li>Returns & Exchanges</li>
                        <li>Payment Terms</li>
                        <li>Delivery Terms</li>
                        <li>Payment & Pricing</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                    </ul>

                    <ul>
                        <h3>Get Involved</h3>
                        <li>About Us</li>
                        <li>Our Vision</li>
                        <li>Orders & Shipping</li>
                        <li>Office Supplies</li>
                        <li>Contact Us</li>
                        <li>Customer Service</li>
                    </ul>

                    <ul>
                        <h3>Quick Links</h3>
                        <li>Smartphones</li>
                        <li>Headphones</li>
                        <li>Laptop & Tablet</li>
                        <li>Monitors</li>
                        <li>Printers</li>
                        <li>Gadgets</li>
                    </ul>

                    <ul>
                        <h3>Customer Care</h3>
                        <li>My Account</li>
                        <li>Store Locator</li>
                        <li>Customer Service</li>
                        <li>Returns/Exchange</li>
                        <li>Product Support</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className='foot3'>
                    <ul>
                        <h2>Gizmos</h2>
                    </ul>
                    <ul>
                        <li><FaHeadset /></li>
                        <li>+0080 1234 56 789</li>
                    </ul>
                    <ul>
                        <li><HiOutlineTruck /></li>
                        <li>Amounts over $100</li>
                    </ul>
                    <ul>
                        <li><MdOutlineDiscount /></li>
                        <li>Save up to 20%</li>
                    </ul>
                </div>

                <div className='foot4'>
                    <h3>© 2022 Qode Interactive, All Rights Reserved</h3>
                </div>

            </div>
        </motion.div>
    )
}

export default Footer
