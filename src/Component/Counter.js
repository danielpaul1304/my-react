import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Counter = () => {
  return (
    <div>
        <p>Counter</p>
        <Link to='mail'>Mail</Link>
        <Outlet/>
    </div>
  )
}

export default Counter  
