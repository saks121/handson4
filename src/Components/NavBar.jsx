import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Link className="link" to='/'>Home</Link>

      <Link className="link" to='/contact'>Contact Us</Link>

      <Link className="link"to='/studentData'>Student Data</Link>
    </div>
  )
}
