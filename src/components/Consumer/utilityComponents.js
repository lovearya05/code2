import React from 'react'
import './utilityComponents.css'
import walmartLogo from './assets/walmart2.svg'

export const CircularBtn = ({isActive=false, text='',onClickBtn=()=>{} }) => {
  return (
    <div onClick={onClickBtn} className={isActive ? `circularBtnActive` : 'circularBtn'} >
        {text}
    </div>
  )
}
export const RecentTransectionCard = ({showTopLine=true})=>{
  return(
    <div className={`transectionCardMain ${showTopLine ? 'topLine' : 'marginTop16'} `} >
      <div className='transectionCardInner'>
        <div className='dateSmall' >Nov 1, 2023</div>
        <div className='content' >
          <div>Grocery</div>
          <div>85 pt.</div>
        </div>
        <div className='content2' >Walmart</div>
      </div>
    </div>
  )
}
export const EarnedCode2Card = ({showBottomLine=true})=>{
  return(
    <div className={`earnedCardMain ${showBottomLine ? 'bottomLine' : ''} `} >
      <div className='earnedCardInner'>
        
        <div className='flexRowSpaceBtn' >
          <img src={walmartLogo} alt="" className="" />
          <div className='greenText1'>35</div>
        </div>

        <div className='flexRowSpaceBtn marginTop6' >
          <div className='whiteText1'>Automobile Co.</div>
          <div className='whiteText2'>1 AED = 0.5</div>
        </div>
        <div className='dateSmall' >Nov 1, 2023</div>
      </div>
    </div>
  )
}