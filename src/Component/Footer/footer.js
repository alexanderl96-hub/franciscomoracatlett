import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-info'>
            <p>Copyright 2012 FRANCISCO MORA CATLETT AACE RECORDS. All rights reserved.</p>
            <p style={{color: 'yellow', marginTop: '-13px'}}>Web Hosting by Turbify</p>
                {/* <br></br> */}
            <ul>
                <li>FRANCISCO MORA CATLETT AACE RECORDS</li>
                <li>NEW YORK, NY</li>
            </ul>
            <p style={{marginLeft: '37px'}}>United States</p>
            <p style={{marginLeft: '37px',marginTop: '-13px', color: 'yellow'}}>franciscomoracatlett@yahoo.com</p>
      </div>

    </div>
  )
}

export default Footer;