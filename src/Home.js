// import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './home.css'
import main1 from './image/main1.jpg'
import main2 from './image/main2.jpg'
import main3 from './image/main3.jpg'
import { motion, Variants } from 'framer-motion'
// import { useState } from "react";

function Home() {

  const homepage = [
    {
      image: main1,
      name: 'Computers up to -15% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },
    {
      image: main2,
      name: 'Laptops up to -20% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },
    {
      image: main3,
      name: 'Smartphones up to -30% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },

    {
      image: main1,
      name: 'Computers up to -15% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },
    {
      image: main2,
      name: 'Laptops up to -20% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },
    {
      image: main3,
      name: 'Smartphones up to -30% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },

    {
      image: main1,
      name: 'Computers up to -15% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },
    {
      image: main2,
      name: 'Laptops up to -20% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    },
    {
      image: main3,
      name: 'Smartphones up to -30% off',
      suggest: 'The biggest risk is a missed oppourtinity.'
    }
  ]


  const a: Variants = {
    start: {
      y: -25,
      opacity: 0
    },
    end: {
      y:0 ,
      opacity: 1,
      transition: {
        staggerChildren: 2,
        duration: 0.8
      }
    }
  }

  const b: Variants = {
    start: {
      y: -25,
      opacity: 0
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 1,
        duration: 0.5,
      }
    }
  }
  
  return (
    <div className="mainhome">
      <div className="home">
        <motion.div className="homeduplicate" initial={'start'} animate={'end'}  variants={a} >

          {
            homepage.map((data) => {
              return (
                <motion.div className='slideimg' >
                  <motion.img src={data.image} variants={a}/>
                  <motion.div className='slidetext' variants={b}>
                    <h2>{data.name}</h2>
                    <p>{data.suggest}</p>

                    <div className='slidebut'>
                      <button>SHOP NOW</button>
                    </div>
                  </motion.div>

                </motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Home
