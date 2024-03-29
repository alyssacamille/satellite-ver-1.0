import React from 'react'
// import './Logo.css'

export default function Logo() {
  // XD why are there 2 divs with no css or existence wrapping up an image 😂😂
  return (
    <div>
      <div >
        <img className='satellite-logo' src='src/assets/satellite-logo.svg' alt="Satellite Logo"  />
      </div>
    </div>
  )
}
