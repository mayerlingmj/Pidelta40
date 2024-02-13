import React from 'react'
import { Link } from 'react-router-dom'
const aboutContainerStyle = {
  textShadow: '2px 2px 4px white',
  display: 'flex',
  alignItems: 'flex-end',
  minHeight: '100vh',
  position: 'relative',
  marginTop: '10px',
  marginBottom: '10px'
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
  width: '30%',
  padding: '50px',
  backgroundColor: 'cream',
  color: 'black',
  fontFamily: 'Papyrus, fantasy',
  fontWeight: 'bold',
  fontStyle: 'italic',
  textAlign: 'left',
  left: '0',
  top: '0'
}

const h1Style = {
  fontSize: '36px',
  color: '#A51C30'
}

const pStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'black',
  textShadow: '2px 2px 4px white',
  textAlign: 'left',
  lineHeight: '1.6',
  letterSpacing: '0.5px',
  margin: '15px 0'
}

const linkStyle = {
  fontSize: '29px',
  textDecoration: 'none',
  color: '#cc0000',
  fontWeight: 'bold',
  marginTop: '20px'
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
        <strong>
          {/* Pi Delta is thrilled to mark a significant milestone in its history as
          we celebrate 40 years of sisterhood, scholarship, and service. Founded
          on May 12, 1984, our sorority has been a beacon of unity and support
          for generations of women. Since our humble beginnings, Pi Delta has
          grown into a diverse and tight-knit community of sisters who have
          thrived together through every challenge and triumph. This momentous
          occasion is a testament to the enduring bonds we've forged, the
          leadership we've cultivated, and the positive impact we've made on our
          campus and beyond. Our 40th-anniversary celebration promises to be a
          memorable event filled with reflection, gratitude, and an unwavering
          commitment to our core values. Join us as we honor our founding
          members, reminisce about cherished memories, and look ahead to an even
          brighter future for Pi Delta chapter! */}
        </strong>
      </p>

      <Link to="/about/crossinglines" style={linkStyle}>
        Crossing Lines
      </Link>
    </div>
  </div>
)

export default About
