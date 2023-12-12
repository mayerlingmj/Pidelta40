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

const Home = () => (
  <div style={homeContainerStyle} className="home-container">
    <h1 style={homeTitleStyle} className="home-title">
      Welcome to Pi Delta's 40th Anniversary
    </h1>
    <p style={homeDescriptionStyle} className="home-description">
      {/* Add content for the homepage here */}
    </p>
  </div>
)

export default Home
