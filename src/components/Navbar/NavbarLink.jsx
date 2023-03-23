import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarLink = ({to, title}) => {
  return (
    <li className='text-xs hover:text-white'>
      <NavLink to={to} className={({isActive}) => isActive ? 'text-white' : 'text-gray-400'}>{title}</NavLink>
    </li>
  )
}

export default NavbarLink