"use client"
import React from 'react'
import Image from 'next/image'
import DropdownMenu from '../menu/DropdownMenu'
import Search from './Search'
import LinkCluster from './LinkCluster'
import Cart from './Cart'
import logo from '../../../public/logo.avif'
import InverseButton from '../button/InverseButton'
import Link from 'next/link'

function Header() {
  return (
    <div className='w-[95%] flex items-center border-b-[0.8px]'>
      <Link href={'/'} className=''>
        <Image
          src={logo}
          width={80}
          alt="Logo"
          height={50}
        />
      </Link>

      <DropdownMenu

      />

      <InverseButton
        onClick={()=>{}}
        className='ml-5'
        disabled={false}
      >
        <p>Store</p>
      </InverseButton>

      <Search
      
      />
    
      <LinkCluster
      
      />

      <Cart
      
      />
    </div>
  )
}

export default Header