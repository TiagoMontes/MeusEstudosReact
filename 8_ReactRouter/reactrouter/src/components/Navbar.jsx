// 2- Links com react router

import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* Funciona como <a><a/>, porém em sua sintaxe do React */}
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
        <NavLink 
          to="/" 
          // className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
        >
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export {Navbar}