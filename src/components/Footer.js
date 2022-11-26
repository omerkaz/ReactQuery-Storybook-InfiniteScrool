import React from 'react'
import './Footer.css'
function Footer({textContent = "NML ℗™ 2022"}) {
  return (
    <footer data-testid="firstEl" className='footer'>{textContent}</footer>
  )
}

export default Footer