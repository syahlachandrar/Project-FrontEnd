import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}from 'react-icons/bs'
import { IoLogOut } from 'react-icons/io5'

const HeaderAdmin = ({OpenSidebar}) => {
  return (
    <header className='header-admin'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>

        
    </header>
  )
}

export default HeaderAdmin