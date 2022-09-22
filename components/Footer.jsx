import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Una's Clay Work All rights reserverd</p>
      <p className='icons'>
        <a href='https://www.instagram.com/unaclaywork/'>
          <AiFillInstagram />
        </a>
        <a href='https://www.facebook.com/unaclaywork/'>
          <AiFillFacebook />
        </a>
        <a href='https://shopee.tw/unanannie0609'>
          <FaShoppingCart />
        </a>
      </p>
    </div>
  )
}

export default Footer