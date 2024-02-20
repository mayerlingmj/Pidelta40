import React from 'react'
import { Link } from 'react-router-dom'

const About40th = () => {
  const containerStyle = {
    textShadow: '2px 2px 4px white',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    justifyContent: 'flex-end', // Align items to the bottom
    position: 'relative',
    minHeight: '100vh', // Ensure the container takes up at least the full height of the viewport
    paddingLeft: '20px', // Add padding to the left for space
    paddingBottom: '20px' // Add padding to the bottom for space
  }

  const backgroundImageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%'
  }

  const contentStyle = {
    width: '100%', // Adjusted width for mobile
    padding: '20px', // Adjusted padding for mobile
    backgroundColor: 'cream',
    color: 'black',
    fontFamily: 'Papyrus, fantasy',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    position: 'relative',
    left: '0',
    top: '0',
    height: '100%'
  }

  const headingStyle = {
    fontSize: '24px', // Adjusted font size for mobile
    fontWeight: 'bold'
  }

  const paragraphStyle = {
    fontSize: '16px', // Adjusted font size for mobile
    textAlign: 'left',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px white'
  }

  const linkStyle = {
    fontSize: '16px', // Adjusted font size for mobile
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#cc0000',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '20px',
    display: 'inline-block',
    transition: 'background-color 0.3s'
  }

  return (
    <div style={containerStyle}>
      <img
        src="https://i.imgur.com/NfmbdGu.png"
        alt="Background"
        style={backgroundImageStyle}
      />
      <div style={contentStyle}>
        <h1 style={headingStyle}></h1>
        <p style={paragraphStyle}>{/* Your paragraph text goes here */}</p>
        <Link to="/about40th/hotelinfo" style={linkStyle}>
          Hotel Information
        </Link>
      </div>
    </div>
  )
}

export default About40th
