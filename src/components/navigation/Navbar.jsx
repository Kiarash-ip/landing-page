import React from 'react'

export default function Navbar() {
  return (
    <div className='container flex mx-auto flex justify-between py-5 fixed  z-10 top-0 left-0 right-0'>
            <img src='/images/logo.svg'/>
            <ul className='flex gap-10 items-center'>
                <li className='text-white'>Furniture</li>
                <li className='text-white'>Shop</li>
                <li className='text-white'>About Us</li>
                <li className='text-white'>Contact</li>
            </ul>
            <img src='/images/logo.svg'/>
    </div>
  )
}
