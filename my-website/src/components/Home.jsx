import React from 'react'

const homeContainerStyle = {
  backgroundImage: "url('https://i.imgur.com/ZyGrAi6.png')",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'rgb(141, 27, 16)',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgb(1, 1, 1)'
}

const homeTitleStyle = {
  fontSize: '70px',
  fontFamily: 'Shrikhand, cursive',
  marginBottom: '20px',
  marginTop: '70px'
}

const homeDescriptionStyle = {
  fontSize: '15px'
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgb(141, 27, 16)',
  color: 'white',
  padding: '0.5px 0',
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
  marginRight: '10px'
}

const Home = () => (
  <div className="home-container" style={homeContainerStyle}>
    <h1 className="home-title" style={homeTitleStyle}>
      Welcome to Pi Delta's 40th Anniversary
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
            style={{ maxWidth: '50px', marginTop: '10px' }}
          />
        </a>
      </p>
    </div>
  </div>
)

export default Home
