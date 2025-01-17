import React from 'react'
import Link from 'next/link'

function Langbar() {
  return (
    <div
      className="w-full flex justify-center items-center no-underline border-b-[0.8px] h-[5%]"
    >   
        <div 
         className="w-[40%] flex justify-start"   
        >
          <div>
            
          </div>  
            <Link
              className=""
              href=""
            >
                English
            </Link>
            <Link
            className='ml-4'
              href=""
            >
                USD
            </Link>
            
        </div>

        <div 
         className="w-[40%] flex justify-end"
        >
          <div>
            
          </div>
            <Link
              className=""
              href=""
            >
                Email
            </Link>
            <Link
            className='ml-4'
              href=""
            >
                Call
            </Link>
            
        </div>
    </div>
  )
}

export default Langbar