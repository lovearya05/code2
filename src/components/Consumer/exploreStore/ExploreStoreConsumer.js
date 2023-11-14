import React from 'react'
import NavbarConsumer from '../navbarConsumer/NavbarConsumer'

function ExploreStoreConsumer() {
  return (
    <div>
      {/* {loading && <Loader />} */}
      <NavbarConsumer />
    </div>
  )
}

export default ExploreStoreConsumer