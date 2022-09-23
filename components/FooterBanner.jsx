import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: { //這邊加上參數後，下面P標籤的{}內就不用再寫footerBanner.discount，直接寫discount就好
  discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image
} }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>

        {/* <img 
          src = {urlFor(image)}
          className= "footer-banner-image"
        /> */}
      </div>
    </div>
  )
}

export default FooterBanner