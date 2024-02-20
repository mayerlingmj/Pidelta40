import React from 'react'
import { Link } from 'react-router-dom'

const hotelInfoStyle = {
  backgroundImage: 'url(https://i.imgur.com/yfrlzYh.png)',
  backgroundSize: 'cover', // Use 'cover' for background image size
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  color: 'white',
  textAlign: 'center',
  marginTop: '0',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end'
}

const headingStyle = {
  fontSize: '28px', // Adjust font size for mobile
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
}

const priceStyle = {
  fontWeight: 'bold',
  fontSize: '16px', // Adjust font size for mobile
  marginTop: '10px' // Add margin for spacing
}

const bookButtonStyle = {
  marginTop: '20px' // Add more space at the top
}

const linkStyle = {
  display: 'inline-block',
  padding: '10px 20px', // Adjust padding for better visibility
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
    {/* <h1 style={headingStyle}>Hotel Information</h1> */}
    {/* <p style={priceStyle}>Prices starting from $XXX per night</p> */}
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
