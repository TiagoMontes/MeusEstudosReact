// 2- Links com react router

import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* Funciona como <a><a/>, porém em sua sintaxe do React */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}

export {Navbar}