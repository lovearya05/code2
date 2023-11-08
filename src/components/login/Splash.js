import React from 'react'
import './splash.css'
import code2Logo from '../../assets/code2Logo.svg'
import code2LogoText from '../../assets/code2LogoText.svg'

function Splash() {
  return (
    <div className='container' >
      <div className='mainView' >
        <div className='logoDiv' >

          <div>
            <img src={code2Logo} alt='' className='logoImg' />
          </div>
          
          <div  >
            <img className='logoText' src={code2LogoText} alt='' />
          </div>
          <div className='text1splash' >Let’s Green the Planet again!</div>
        </div>
      </div>
    </div>
  )
}

export default Splash
