import React from 'react'
import { Link } from 'react-router-dom'

const aboutContainerStyle = {
  textShadow: '2px 2px 4px white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  position: 'relative',
  marginTop: '10px',
  marginBottom: '10px',
  overflowX: 'hidden'
}

const backgroundImageStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
  width: '100%',
  height: '100%'
}

const contentContainerStyle = {
  width: '90%',
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: 'cream',
  color: 'black',
  fontFamily: 'Papyrus, fantasy',
  fontWeight: 'bold',
  fontStyle: 'italic',
  textAlign: 'left'
}

const h1Style = {
  fontSize: '24px',
  color: '#A51C30'
}

const pStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  textShadow: '2px 2px 4px white',
  textAlign: 'left',
  lineHeight: '1.6',
  letterSpacing: '0.5px',
  margin: '10px 0'
}

const linkStyle = {
  fontSize: '16px',
  textDecoration: 'none',
  color: 'white',
  backgroundColor: '#cc0000',
  fontWeight: 'bold',
  marginTop: '20px',
  padding: '10px 20px',
  borderRadius: '5px',
  display: 'inline-block',
  transition: 'background-color 0.3s',
  alignSelf: 'flex-start' // Align the link to the bottom right
}

const About = () => (
  <div style={aboutContainerStyle}>
    <img
      src="https://i.imgur.com/3JUVD6u.png"
      alt="Background"
      style={backgroundImageStyle}
    />
    <div style={contentContainerStyle}>
      {/* <h1 style={h1Style}>About Pi Delta</h1> */}
      <p style={pStyle}>
        <strong>{/* Your content goes here */}</strong>
      </p>
    </div>
    <Link to="/about/crossinglines" style={linkStyle}>
      Crossing Lines
    </Link>
  </div>
)

export default About
