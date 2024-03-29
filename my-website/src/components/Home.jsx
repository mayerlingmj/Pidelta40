import React from 'react'

const homeContainerStyle = {
  backgroundImage: "url('https://i.imgur.com/hsd2IlB.png')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundPosition: 'center',
  minHeight: '100vh', // Set minHeight instead of height for smaller content on mobile
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'rgb(141, 27, 16)',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgb(1, 1, 1)'
}

const homeTitleStyle = {
  fontSize: '5vw', // Responsive font size
  fontFamily: 'Shrikhand, cursive',
  marginBottom: '2vw',
  marginTop: '5vw' // Adjusted margin for better spacing
}

const homeDescriptionStyle = {
  fontSize: '3vw' // Responsive font size
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgb(141, 27, 16)',
  color: 'white',
  padding: '1vw 0', // Responsive padding
  textAlign: 'center'
}

const emailLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const textBeforeLogoStyle = {
  marginRight: '1vw' // Responsive margin
}

const Home = () => (
  <div className="home-container" style={homeContainerStyle}>
    <h1 className="home-title" style={homeTitleStyle}>
      {/* Welcome to Pi Delta's 40th Anniversary */}
    </h1>
    <p className="home-description" style={homeDescriptionStyle}>
      {/* Add content for the homepage here */}
    </p>

    {/* Footer */}
    <div style={footerStyle}>
      <p style={emailLinkStyle}>
        <span style={textBeforeLogoStyle}>For inquiries, contact us</span>
        <a href="mailto:oracleeventplanning@gmail.com" style={emailLinkStyle}>
          <img
            src="https://i.imgur.com/PHBBGr5.png"
            alt="Email Logo"
            style={{ maxWidth: '2vw', marginTop: '1vw' }} // Responsive image size and margin
          />
        </a>
      </p>
    </div>
  </div>
)

export default Home
