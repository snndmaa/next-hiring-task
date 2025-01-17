import React from 'react'
import Footer from './Footer'
import Langbar from './LangBar'

function Container({ children }) {
  return (
    <div
      className="w-full h-full flex flex-col justify-between items-center"
    >
      <div className="w-[90%] flex flex-col items-center flex-1">
        <Langbar />
            {children}
        <Footer />
      </div>
    </div>
  )
}

export default Container