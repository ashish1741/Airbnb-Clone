import React from 'react'
import "./Footer.css"

function Footer() {
    const date = new Date().getFullYear();
  return (
    <div className='footer'>
            <p>© {date} Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
  )
}

export default Footer