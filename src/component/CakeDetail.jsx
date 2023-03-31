import { color } from 'framer-motion'
import React from 'react'
import Review from '../Review'
import RadioButtons from './RadioButtons'

const CakeDetail = () => {
  return (
    <div className='CakeDetail'>
        <h1 style={{
            
        }}><b>Chocolate Truffle</b> </h1>
        <h3><b>₹599</b> <strike><span className='sp1'>₹699</span></strike><span className="sp2">9% OFF</span></h3>
        <br />
        <h3><b>select wieght</b></h3>

        <RadioButtons/>
        <div className="place">
            <input type="text" placeholder='enter pincode' style={{
height:'35px',
marginRight:'0.8rem',
border:'solid 1px black',
borderRadius:'0.5rem',
textAlign:'center',
outline:'none'
}}/>
           
    <input type="date" id="date" name="date" placeholder="select date" required  style={{
height:'35px',
    marginRight:'0.8rem',
    border:'solid 1px black',
    borderRadius:'0.5rem',
    textAlign:'center',
    outline:'none'
}}/>

        </div>
      <br />
<input style={{ margin:'0.5rem' }} type="radio" id="eggless" name="catogry" value="eggless"/>
<label for="eggless">eggless</label>
<input style={{ margin:'0.5rem' }} type="radio" id="with egg" name="catogry" value="with egg"/>
<label  for="with egg">with egg</label> <input type="text" style={{
height:'35px',
    marginRight:'0.8rem',
    border:'solid 1px black',
    borderRadius:'0.5rem',
    textAlign:'center',
    outline:'none'
}}placeholder='massage on cake' />
<br />
<br />
<h1><b>select delivery type</b></h1>
<br />
       <div className="deltime">
        <button>standerd  <span>free</span></button>
        <button>fixed time <span>500</span></button>
        <button>Mid night <span>600</span></button>
       </div>
       {/* <label for="cars">Select time</label> */}
       <br />
<select id="time" name="time">
  <option value="">time</option>
  <option value="7:00 am">7:00 am</option>
  <option value="7:00 am">7:00 am</option>
  <option value="7:00 am">7:00 am</option>
  <option value="7:00 am">7:00 am</option>
  <option value="7:00 am">7:00 am</option>
</select>

<div className="salebtn">

    <button 
    style={{
        border:"solid 1px ",
        borderRadius:'0.5rem',
        padding:'10px 50px'
    }}
    >Add to cart</button><button
    style={{
        border:"solid 1px ",
        borderRadius:'0.5rem',
        padding:'10px 50px',
        color:'white',
        background:'red',
    }}
    ><b>buy now</b></button>
</div>
<div className="discrip">
    <br />
    <p><b>Product Discription</b></p>
    <br />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio cum eos illo qui rem! Illo voluptates molestias dolor accusamus excepturi voluptatum, quo voluptate quibusdam quisquam ratione quae itaque? Sit, maiores.
    Repellendus enim quod minima repellat repudiandae nemo esse vero numquam explicabo? Officia corrupti dolorem, quia similique mollitia aliquid quo corporis veritatis cupiditate consequatur expedita animi eius odit neque adipisci sapiente?
    Nulla doloremque maiores voluptatem sint aliquid, officiis placeat? Optio quasi laudantium, reiciendis, id, dolores ratione am autem recusandae repellendus. Ab.</p>
    <div className="ulm">
        <ul>
            <li>wieght: 500g</li>
            <li>Flavour: Chocolate</li>
        </ul>
        <ul>
            <li>Shape: round</li>
            <li>countru of origin: India</li>
        </ul>
    </div>
    <p><b>Disclaimer</b></p>
    <ul>
            <li>Lorem ipsum dolor sit amet c laboriosam voluptate distinctio expedita magni labore, harum ipsam blanditiis.</li>
            <li>Lorem ipsum dolor sit amet conipisicing elit. Numquam magnatibus deleniti dicta quae, velit laboriosam voluptate distinctio expedita magni labore, harum ipsam blanditiis.</li>
            <li>Flavour: Chocolate or sit amet conipisicing elit. Numquam magnatibus de</li>
        </ul>
</div>
<Review/>
    </div>
  )
}

export default CakeDetail