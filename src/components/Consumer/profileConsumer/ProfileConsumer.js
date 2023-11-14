import React from 'react'
import NavbarConsumer from '../navbarConsumer/NavbarConsumer'

function ProfileConsumer() {
  return (
    <div>
      {/* {loading && <Loader />} */}
      <NavbarConsumer />
    </div>
  )
}

export default ProfileConsumer
