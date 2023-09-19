import React from 'react'
import { Link, Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <p>Layout</p>
        <Link to='counter'> Counter</Link>
        <Link to='todo'> / Todo</Link>
        <Link to='bmiCalculator'> / bmiCalculator</Link>
        <Outlet/>
    </div>
  )
}

export default Layout
