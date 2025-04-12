import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaArrowRightArrowLeft,FaRegUser,FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import './navbar.css'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowRight } from "react-icons/md";


function Nav({wh,c,cnoti,setsearch,down2,setdown2,display1,display2,display3,setdisplay,setdisplay2,setdisplay3}) {
  const [down,setdown] = useState(true)
  const [down1,setdown1] = useState(true)
  
  const [down3,setdown3] = useState(false)
  const [show,setshow] = useState(true)
 

  
  function d(){
    setdown(false)
  }
  function d2(){
    setdown(true)
  }
  function dd(){
    setdown1(false)
  }
  function d2d(){
    setdown1(true)
  }

  function side(){
    setdown2(!down2)
  }
  function navdown(){
    setdown3(!down3)
  }
  function showhide(){
    setshow(!show)
    console.log("fgihkl")
  }

  return (
    <div>   
      
       <div className='navbar'>

      <div className='innernav1'>
      <ul>
        <li>Gizmos</li>
        <ul onClick={side} >
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </ul>

     <ul>
      <div className='secondul'>
        <motion.select whileHover={d} onMouseOut={d2}>
            <option>All Categories</option>
            <option>Activated Carbon</option>
            <option>Air-To-Air</option>
            <option>Audio</option>
            <option>Chromebooks</option>
            <option>Computer System</option>
            <option>Coolers</option>
            <option>Gaming</option>
            <option>LCD Monitors</option>
            <option>PC Parts</option>
            <option>Sensors</option>
            <option>Smart Watches</option>
            <option>Laptops</option>
            <option>Earbuds</option>
            <option>Bluetooth</option>
            <option>Smartphone</option>
        </motion.select>
        <motion.li  animate={down?{rotate:0}:{rotate:90 , color:'blue'}} transition={{duration:0.3}}><MdKeyboardArrowRight /> </motion.li>
        <input type='text' placeholder='Search for Product...'  onChange={(a)=>{setsearch(a.target.value)}}/>
        <div className='searchhmain'>
        <FiSearch className='searchh' />
        </div>
        </div>
     </ul>

     <ul>
       
        <li><FaArrowRightArrowLeft className='arrow' /></li>
        <p onClick={showhide} className='serachinput'><FiSearch /></p>
        <NavLink className='logcart2' to={'/login'}><li><FaRegUser /></li></NavLink>
        <NavLink className='logcart3' to={'/whishlist'}><li><FaRegHeart />
        <div className='heartnotification'>{wh}</div>
        </li></NavLink>
        <NavLink className='logcart4' to={'/cart'}><li><GrCart /><div className='cartnotification'>{cnoti}</div> ${c}</li></NavLink>
        <ul onClick={navdown}>
          <motion.li animate={down3?{rotate:45,top:9}:{rotate:0,top:2}}></motion.li>
          <motion.li animate={down3?{opacity:0}:{opacity:1}}></motion.li>
          <motion.li animate={down3?{rotate:-45,top:9}:{rotate:0,top:15}}></motion.li>
        </ul>
       
     </ul>
      </div>

      <div className='innernav2'>
        <ul>
          <NavLink className='navlink' to={'/'}><li>Home</li></NavLink>
          <NavLink className='navlink' to={'/pages'}> <li>Pages</li></NavLink>
          <NavLink className='navlink' to={'/shop'}><li>Shop</li></NavLink>
          <NavLink className='navlink' to={'/blog'}> <li>Blog</li></NavLink>
          <NavLink className='navlink' to={'/landing'}><li>Landing</li></NavLink>
        </ul>
        
        <motion.ul whileHover={dd} onMouseOut={d2d}>
          <li>Weekly Discount</li>
          <motion.li  animate={down1?{rotate:0}:{rotate:90}} transition={{duration:0.3}}><MdKeyboardArrowRight /> </motion.li>
        </motion.ul>
      </div>

    </div>

    <motion.div className='sidebar' initial={{x:-252}} animate={down2?{x:0}:{x:-252}}  transition={{duration:0.5}} >
      <div className='side1'>
        <h1>Gizmos</h1>
        <p onClick={side} className='cross'><RxCross2 /></p>
      </div>
      <div className='side2'>
        <ul>
          <li>Weekly Bestsellers</li>
        </ul>
        <ul>
          <li>Premium Tech</li>
        </ul>
        <ul>
          <li>New Arrivals</li>
        </ul>
        <motion.ul whileHover={()=>{setdisplay(true)}}  onMouseLeave={()=>setdisplay(false)}>
          <li>Home & Kitchen</li>
          <li><MdOutlineArrowRight />

           <motion.ul initial={{opacity: 0,visibility:'hidden'}} animate={display1?{opacity: 1,visibility:'visible'}:{opacity: 0,visibility:'hidden'}} >
            <div className='uld'>

              <div className='inneruld'>
                <div className='inneruldh4'>
                  <h4> Iron & Washers</h4>
                </div>
                <div className='inneruldp'>
                <p>Basic Iron</p>
                <p>Steam Iron</p>
                <p>Travel Iron</p>
                <p>Vertical Steam</p>
                <p>Top Load Machine</p>
                <p>Front Load Machine</p>
                </div>
              </div>
              <div className='inneruld'>
                <div className='inneruldh4'>
                  <h4>Kitchen & Dining</h4>
                </div>
                <div className='inneruldp'>
                <p>Basic Blender</p>
                <p>Hand Blender</p>
                <p>Mixer</p>
                <p>French Door Fridge</p>
                <p>Side-by-Side Fridge</p>
                <p>Stacked Fridge</p>
                </div>
              </div>
              <div className='inneruld'>
                <div className='inneruldh4'>
                  <h4>Vacuum Cleaners</h4>
                </div>
                <div className='inneruldp'>
                  <p>Canister</p>
                  <p>Carpet Cleaners</p>
                  <p>Cordless</p>
                  <p>Robotics</p>
                  <p>Upholstery Cleaners</p>
                  <p>Upright</p>
                </div>
              </div>
              <div className='inneruld'>
                <div className='inneruldh4'>
                  <h4>Water Air Purifies</h4>
                </div>
                <div className='inneruldp'>
                  <p>Activated Crabon</p>
                  <p>Air-to-Air</p>
                  <p>Central</p>
                  <p>HEPA</p>
                  <p>Iconic</p>
                  <p>Ultraviolet</p>
                </div>
              </div>
              
            </div>
           
          </motion.ul>
          </li>

        </motion.ul>

        <motion.ul  whileHover={()=>{setdisplay2(true)}} onMouseLeave={()=>setdisplay2(false)}>
          <li>Technology</li>
          <li><MdOutlineArrowRight />
          <motion.ul initial={{opacity: 0,visibility:'hidden'}} animate={display2?{opacity: 1,visibility:'visible'}:{opacity: 0,visibility:'hidden'}}>
              <div className='uld1'>

                <div  className='inneruld1' >
                  <div  className='inneruldh41'>
                    <h4>Home Entertainment</h4>
                  </div>
                  <div  className='inneruldp1'>
                    <p>Audio Systems</p>
                    <p>Games</p>
                    <p>Home Cinemas</p>
                    <p>Projecters</p>
                    <p>Speakers</p>
                    <p>LED TVs</p>
                    <p>LCD TVs</p>
                    <p>OLED TVs</p>
                  </div>
                </div>

                <div  className='inneruld12' >
                  <div  className='inneruldh41'>
                    <h4>Computer Components</h4>
                  </div>
                  <div  className='inneruldp1'>
                    <p>Cabels</p>
                    <p>Data storage</p>
                    <p>Keyboardes</p>
                    <p>Microphones</p>
                    <p>Monitors</p>
                    <p>Scanners</p>
                    
                  </div>
                </div>

                <div  className='inneruld13' >
                  <div  className='inneruldh41'>
                    <h4>Headphones & Earbuds</h4>
                  </div>
                  <div  className='inneruldp1'>
                    <p>Earbuds(In-Ear)</p>
                    <p>Gaming Headsets</p>
                    <p>Earbuds</p>
                    <p>Bluetooth</p>
                    <p>Wireless earbuds</p>
                   
                  </div>
                </div>

                <div  className='inneruld14' >
                  <div  className='inneruldh41'>
                    <h4>PC Parts</h4>
                  </div>
                  <div  className='inneruldp1'>
                    <p>Hard Drive</p>
                    <p>Internal Drive</p>
                    <p>Computer Case</p>
                    <p>CPU Air Cooler</p>
                    <p>Mechanical Keyboards</p>
                  </div>
                </div>

                <div  className='inneruld15' >
                  <div  className='inneruldh4'>
                    <h4>Webcams & Equipments</h4>
                  </div>
                  <div  className='inneruldp1'>
                    <p>Auto Focus</p>
                    <p>GoPro</p>
                    <p>Manual Focus</p>
                    <p>Webcame Mounts</p>
                    <p>Webcame Stands</p>
                  </div>
                </div>

                

              </div>
            </motion.ul>
          </li>
        </motion.ul>

        <motion.ul whileHover={()=>{setdisplay3(true)}}  onMouseLeave={()=>setdisplay3(false)}>
          <li>Innovative Appliances</li>
          <li><MdOutlineArrowRight />
          <motion.ul initial={{opacity: 0,visibility:'hidden'}} animate={display3?{opacity: 1,visibility:'visible'}:{opacity: 0,visibility:'hidden'}}>
            <div className='uld2'>
              <div className='inneruld21'>
                <div className='inneruldh42'>
                  <h4>For Home</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>Irons</p>
                  <p>Garments Steamer</p>
                  <p>Washing Machines</p>
                  <p>Clothes Dryers</p>
                  <p>2in 1 Washers & Dryers</p>
                  <p>Portable Dryers</p>
                  <p>Carpet Cleaners</p>
                  <p>Steam Cleaners</p>
                  <p>Air Conditioners</p>
                  <p>Hair Dryers</p>
                </div>
              </div>

              <div className='inneruld22'>
                <div className='inneruldh42'>
                  <h4>For Kitchen</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>Coffee Makers</p>
                  <p>Hand Mixers</p>
                  <p>Stand Mixers</p>
                  <p>Hand Blenders</p>
                  <p>Personal Size Blenders</p>
                  <p>Freezers</p>
                  <p>Ice Makers</p>
                  <p>Juicers</p>
                  <p>Refrigerators</p>
                </div>
              </div>

              <div className='inneruld23'>
                <div className='inneruldh42'>
                  <h4>Cameras</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>Compact</p>
                  <p>DSLRS</p>
                  <p>Mirrorless</p>
                  <p>Action</p>
                  <p>360</p>
                  <p>Medium Format</p>
                  <p>Traditional Film</p>
                </div>
              </div>

              <div className='inneruld24'>
                <div className='inneruldh42'>
                  <h4>IT Tech</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>2 in 1 Laptops</p>
                  <p>Gaming Laptops</p>
                  <p>Business Laptops</p>
                  <p>All-In-One PC</p>
                  <p>Mini PC</p>
                  <p>Gaming PC</p>
                  <p>Desktops</p>
                  <p>eReaders</p>
                  <p>Tablets</p>
                  <p>Tablets for Kids</p>
                </div>
              </div>

              <div className='inneruld25'>
                <div className='inneruldh42'>
                  <h4>Smart Watches</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>Sports Watches</p>
                  <p>Men's Watches</p>
                  <p>Woman's Watches</p>
                  <p>Kid's Watches</p>
                  <p>Premium Watches</p>
                </div>
              </div>

              <div className='inneruld26'>
                <div className='inneruldh42'>
                  <h4>Audio</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>Earbud Headphones</p>
                  <p>On-Ear Headphones</p>
                  <p>Over-Ear Headphones</p>
                  <p>Wireless Earbuds</p>
                  <p>Waterproof Headphones</p>
                </div>
              </div>

              <div className='inneruld27'>
                <div className='inneruldh42'>
                  <h4>Accessories</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>USB</p>
                  <p>Mice</p>
                  <p>Keyboards</p>
                  <p>External HDD</p>
                  <p>Webcams</p>
                  <p>Printers</p>
                  <p>All-In-One</p>
                </div>
              </div>

              <div className='inneruld28'>
                <div className='inneruldh42'>
                  <h4>Gaming</h4>
                </div>
                <div  className='inneruldp2'>
                  <p>Action games</p>
                  <p>Consoles</p>
                  <p>Multiplayer Games</p>
                  <p>Racing Games</p>
                  <p>Processors</p>
                  <p>Station Consoles</p>
                </div>
              </div>

             
            </div>
          </motion.ul>
          </li>
        </motion.ul>
      </div>
    </motion.div>

    <motion.div onClick={navdown} className='updown' initial={{height:0}} animate={down3?{height:200}:{height:0}}>
      <div className='innerupdown'>
    <motion.ul initial={{display:'none'}} animate={down3?{display:'flex'}:{display:'none'}}>
          <NavLink className='navlink' to={'/'}><li>Home</li></NavLink>
          <NavLink className='navlink' to={'/pages'}> <li>Pages</li></NavLink>
          <NavLink className='navlink' to={'/shop'}><li>Shop</li></NavLink>
          <NavLink className='navlink' to={'/blog'}> <li>Blog</li></NavLink>
          <NavLink className='navlink' to={'/landing'}><li>Landing</li></NavLink>
        </motion.ul>
        </div>
    </motion.div>

    <motion.div  className='topsearchbar' initial={{display:'none'}} animate={show?{display:'none'}:{display:'flex'}}>
      <div className='innertopsearchbar'>
      <FiSearch  className='topsearchicon'/>
      <input type='text' placeholder='Type your search here...'  onChange={(a)=>{setsearch(a.target.value)}} />
      <RxCross2 onClick={showhide} className='topsearchicon'/>
      </div>
    </motion.div>

    </div>

   
    
  )
}

export default Nav
