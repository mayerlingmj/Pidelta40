import React from 'react'
import { Link } from 'react-router-dom'

const containerStyle = {
  backgroundImage: "url('https://i.imgur.com/PVrepN5.png')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: 'Shrikhand, cursive',
  fontSize: '25px', // Adjusted font size for mobile
  fontWeight: 'bold',
  color: 'rgb(11, 11, 10)',
  height: '100vh',
  borderRadius: '15px',
  textAlign: 'center',
  margin: '0',
  padding: '60px 20px' // Adjusted padding for better visibility on mobile
}

const h1Style = {
  fontSize: '28px', // Adjusted font size for mobile
  fontWeight: 'bold',
  color: 'rgb(4, 3, 3)',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
  marginTop: '20px', // Adjusted margin for mobile
  marginBottom: '15px'
}

const crossingLineStyle = {
  margin: '30px 0', // Adjusted margin for mobile
  fontWeight: 'bold',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '0px',
  borderRadius: '5px'
}

const CrossingLines = () => (
  <div style={containerStyle} className="crossing-lines-container">
    <h1 style={h1Style}></h1>
  </div>
)

export default CrossingLines
