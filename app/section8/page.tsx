import React from 'react'
import Image from 'next/image'
import logo from '../../public/image 1174.png'

export default function Section8() {
  return (
    <div className=' w-screen flex  justify-center items-center pt-5 pb-5 sm:pt-10 sm:pb-10 md:pt-20 md:pb-20'> 
<Image src={logo} alt='logo'/>
    </div>
  )
}
