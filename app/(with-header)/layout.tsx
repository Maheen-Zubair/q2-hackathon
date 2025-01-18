import React, { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({children}: {children:ReactNode}) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
