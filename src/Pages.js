import React, { useState } from 'react'
import './page.css'
import { FaTv } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoWatchOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import axios from 'axios'

function Pages() {
  const [pform,setpform] = useState({message:'',fname:'',email:''})
  
    function handlform(e){
      setpform({...pform,[e.target.name] : e.target.value})
    }

    async function handlesubmit(e){
      e.preventDefault()
      try{
        const res = await axios.post("http://localhost:2211/pages",pform)
        setpform({message:'',fname:'',email:''})
        alert('register')
        
      }
      catch(err){
        alert('not register')
      }
      // console.log(pform)
     alert("Your data is successfully submited")
     
     
    }

  return (
    <div className='page'>

      <div className='innerpage1'>
        <div className='gmap'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8900.715645520275!2d72.92681600570401!3d20.608899113443655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e93fd4a2db9b%3A0xe46ac635cd350d53!2z8J2QivCdkJHwnZCFXyBCZXN0IENvbXB1dGVyIENsYXNzZXM!5e0!3m2!1sen!2sin!4v1740219363100!5m2!1sen!2sin"></iframe>
        </div>
      </div>

      <div className='innerpage2'>
        <div className='page2page'>
          <div className='page2pageinner1'>
            <h1>Get in touch with us</h1>
            <div className='pagetxt'>
              <h4>Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu am, velit rutrum dictum lobortis, turpis justo auc tor quam, a auctor. Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.</h4>
              <h4>Nam nibh purus, fermentum sit amet lorem eget, pellentesque. Vestibulum vestibulum urna odio, non pulvinar mauris cursus.</h4>
            </div>
            <div className='page2txt'>
              <div className='page2txtlogo'>
                <div className='lp'>
                  <FaTv className='plogo' />
                  <p>+000 123 456 789</p>
                </div>
              </div>
              <div className='page2txtlogo'>
                <div className='lp'>
                  <IoGameControllerOutline className='plogo' />
                  <p>[email protected]</p>
                </div>
              </div>
              <div className='page2txtlogo'>
                <div className='lp2'>
                  <IoWatchOutline className='plogo' />
                  <p>18 Manhattan Avenue, New York, USA</p>
                </div>
              </div>
              <div className='page2txtlogo2'>
                <div className='headphones'>
                  <FiHeadphones className='plogo2' />
                  <p>Monday to Friday: 9am-9pm
                    Saturday to Sunday: 9am-10pm</p>
                </div>
              </div>
            </div>
          </div>
         
          <div className='page2pageinner2'>
             <form onSubmit={handlesubmit}>
             <textarea rows={14} value={pform.message} cols={72} placeholder='Message*' name='message' onChange={handlform}  required></textarea>
              <input type='text'  value={pform.fname} placeholder='Your Name*'  name='fname' onChange={handlform}  required/>
              <input type='text' value={pform.email} placeholder='Your Email*'  name='email' onChange={handlform}  required/>
              <input type='submit'/>
             </form>
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default Pages
