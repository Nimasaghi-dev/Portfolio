// ResponsiveNav component - here we implement the functionality to have a responsive navbar.
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  return (
    <div>
        <Nav />
        <MobileNav />
    </div>
  )
}

export default ResponsiveNav