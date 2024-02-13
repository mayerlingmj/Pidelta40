import React from 'react'
import { Link } from 'react-router-dom'

const About40th = () => {
  const containerStyle = {
    textShadow: '2px 2px 4px white',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    alignItems: 'flex-end', // Align items to the bottom
    position: 'relative',
    marginTop: '10px',
    marginBottom: '10px',
    minHeight: '100vh' // Ensure the container takes up at least the full height of the viewport
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
    width: '52%',
    padding: '50px',
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
    fontSize: '34px',
    fontWeight: 'bold'
  }

  const paragraphStyle = {
    fontSize: '20px',
    textAlign: 'left',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px white'
  }

  const linkStyle = {
    fontSize: '29px',
    textDecoration: 'none',
    color: '#cc0000',
    fontWeight: 'bold',
    marginTop: '20px' // Add margin to separate it from the bottom
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
        <p style={paragraphStyle}>
          {/* As we approach our 40th anniversary, excitement fills the air. It's a
          time when we eagerly anticipate reuniting with beloved sisters from
          years past and embracing the opportunity to create new memories that
          will be cherished for years to come. Our celebration isn't just about
          the past, but it's also a chance to look towards the future with hope
          and determination. The 40th-anniversary celebration promises to be a
          memorable event, and we can't wait to see everyone come together in
          the spirit of unity and sisterhood. Let's reminisce about cherished
          memories, both big and small, that have defined our journey. We'll
          gather to celebrate not only our accomplishments but also the promise
          of an even brighter future for the Pi Delta chapter. Our commitment to
          scholarship and service remains as strong as ever, and the support and
          love we have for each other continue to flourish. Here's to 40 years
          of togetherness, growth, and making a difference in the world. Oo-Oop
          Pi Delta! */}
        </p>
        <Link to="/about40th/hotelinfo" style={linkStyle}>
          Hotel Information
        </Link>
      </div>
    </div>
  )
}

export default About40th
