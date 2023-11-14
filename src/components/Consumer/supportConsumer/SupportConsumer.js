import React from 'react'
import NavbarConsumer from '../navbarConsumer/NavbarConsumer'

function SupportConsumer() {
  return (
    <div>
      {/* {loading && <Loader />} */}
      <NavbarConsumer />
    </div>
  )
}

export default SupportConsumer