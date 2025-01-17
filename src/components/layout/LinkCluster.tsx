import React from 'react'
import Link from 'next/link'


function LinkCluster() {
  return (
    <div className="flex flex-col ml-10">
      <div>
        <p className='text-gray-500 text-sm'>
          Welcome guest!
        </p>
        <div>
          <Link
            href=''
          >
            Sign in
          </Link>
          &nbsp;|&nbsp;
          <Link
            href=''
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LinkCluster