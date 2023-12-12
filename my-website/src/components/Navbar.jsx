// Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const navbarStyle = {
  backgroundColor: 'crimson',
  color: 'cream',
  padding: '2px',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000
}

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'space-around'
}

const liStyle = {
  margin: '0 10px',
  fontSize: '18px',
  color: 'rgb(219, 212, 192)'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  transition: 'color 0.3s'
}

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li style={liStyle}>
              <Link to="/about" style={linkStyle}>
                About Us
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/about40th" style={linkStyle}>
                About the 40th
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/comment" style={linkStyle}>
                Let's Chat
              </Link>
            </li>
            <li style={liStyle}>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li style={liStyle}>
              <Link to="/user" style={linkStyle}>
                User
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
