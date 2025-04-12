import React, { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import Pages from './Pages'
import Shop from './Shop'
import Blog from './Blog'
import Landing from './Landing'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Login'
import Cart from './Cart'
import Whishlist from './Whishlist'
import Featurepro from './Featurepro'
import Footer from './Footer'
import Details1 from './Details1'
import Detailsshop from './Detailsshop'

function App() {
  const [cart,setcart] = useState([])
  const [cart2,setcart2] = useState([])
  const [buy,setbuy] = useState([])
  const [whish,setwhish] = useState(0)
  const [cnoti,setnoti] = useState(0)
  const [search,setsearch] = useState(null)
  const [down2,setdown2] = useState(false)
  const [display1,setdisplay] = useState(false)
  const [display2,setdisplay2] = useState(false)
  const [display3,setdisplay3] = useState(false)
  const [cplus,setcplus] = useState(0)
  const [porder,setporder] = useState(1)
  


  const additem = (s)=>{
    setcart((items)=>[...items,s])
  } 

  const buyitem = (b)=>{
    setbuy((bitems)=>[...bitems,b])
  }

  const additem2 = (s2)=>{
    setcart2((items2)=>[...items2,s2])
    setcplus(cplus+s2.price)
  }

  function itemdelete(i){
    const p = [...cart]
    p.splice(i,1)
    setcart(p)
    // console.log(search)
  }

  function cartdelete(index,d){
    const c = [...cart2]
    c.splice(index,1)
    setcart2(c)
    setcplus(cplus-d.price)
    // console.log(search)
  }



  const route = createBrowserRouter([
    {
      path:'/',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} setsearch={setsearch} down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
        <Home/>
        <div className='feature'>
        <Featurepro additems={additem} add2={additem2} search={search} whish={whish} setwhish={setwhish} cn={cnoti} setcn={setnoti}/>
        </div>
        <Footer down2={down2} setdown2={setdown2} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      </>
    },
    {
      path:'/pages',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
        <Pages/>
        <Footer down2={down2} setdown2={setdown2} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      </>
    },
    {
      path:'/shop',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
        <Shop search={search} additems={additem} whish={whish} setwhish={setwhish} cn={cnoti} setcn={setnoti} add2={additem2}  />
        <Footer down2={down2} setdown2={setdown2} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      </>
    },
    {
      path:'/blog',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
        <Blog/>
        <Footer down2={down2} setdown2={setdown2} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      </>
    },
    {
      path:'/landing',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
        <Landing bcart={buy} setbcart={setbuy} porder={porder} setporder={setporder} />
      </>
    },
    {
      path:'/login',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      <Login />
      <Footer down2={down2} setdown2={setdown2} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      </>
    },
    {
      path:'/whishlist',
      element:<>
      <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      <Whishlist cartitem={cart} bitem={buyitem} additems={additem}  deleteit={itemdelete} whish={whish} setwhish={setwhish}/>
      </>
    },
    {
      path:'/cart',
      element:<>
       <Nav wh={whish} c={cplus} cnoti={cnoti} search={search} setsearch={setsearch}  down2={down2} setdown2={setdown2} display1={display1} display2={display2} display3={display3} setdisplay={setdisplay} setdisplay2={setdisplay2} setdisplay3={setdisplay3}/>
      <Cart fcart={cart2} c={cplus}  bitem={buyitem} setc={setcplus} cartdelete={cartdelete} cn={cnoti} setcn={setnoti} /></>
    },
    {
      path:'/details1/:fea',
      element:<Details1 bitem={buyitem}/>
    },
    {
      path:'/detailsshop/:shop',
      element:<Detailsshop bitem={buyitem}/>
    }
  ])
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App
