import React from 'react'
import { Link } from 'react-router-dom'

const hotelInfoStyle = {
  backgroundImage: 'url(https://i.imgur.com/yfrlzYh.png)',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  color: 'white',
  textAlign: 'center',
  marginTop: '0',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}

const roomStyle = {
  margin: '20px'
}

const headingStyle = {
  fontSize: '36px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
}

const priceStyle = {
  fontWeight: 'bold',
  fontSize: '18px'
}

const bookButtonStyle = {
  marginTop: '20px'
}

const linkStyle = {
  display: 'inline-block',
  padding: '15px 30px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  color: 'red',
  textDecoration: 'none',
  fontWeight: 'bold',
  border: '2px solid red',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s'
}

const HotelInfo = () => (
  <div style={hotelInfoStyle}>
    <div style={bookButtonStyle}>
      <a
        href="https://group.hiltongardeninn.com/6ce2lo"
        style={linkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>
    </div>
  </div>
)

export default HotelInfo
