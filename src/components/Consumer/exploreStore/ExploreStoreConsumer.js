import React from 'react'
import NavbarConsumer from '../navbarConsumer/NavbarConsumer'
import './ExploreStoreConsumer.css'
import {EarnedCode2Card} from '../utilityComponents'

function ExploreStoreConsumer() {
  return (
    <div>
      {/* {loading && <Loader />} */}
      <NavbarConsumer />
      <div className='flexCenter' >
        <div className='text1explore'>Stores</div>
        <div className='yellowText blackTextExplore'>Supports CODE2 pt.</div>
      </div>

      <div className='paddHori16' >
        <div className='text2Explore'>Deals for you(10)</div>
      </div>

      <div>
        <EarnedCode2Card/>
        <EarnedCode2Card/>
        <EarnedCode2Card/>
        <EarnedCode2Card/>
        <EarnedCode2Card/>

      </div>

    </div>
  )
}

export default ExploreStoreConsumer