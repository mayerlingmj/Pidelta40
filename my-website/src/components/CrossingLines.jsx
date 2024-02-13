import React from 'react'
import { Link } from 'react-router-dom'

const containerStyle = {
  backgroundImage: "url('https://i.imgur.com/PVrepN5.png')",
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center center',
  backgroundSize: 'cover',
  fontFamily: 'Shrikhand, cursive',
  fontSize: '35px',
  fontWeight: 'bold',
  color: 'rgb(11, 11, 10)',
  padding: '410px',
  margin: '130px 0',
  borderRadius: '15px',
  textAlign: 'center'
}

const h1Style = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: 'rgb(4, 3, 3)',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '0px',
  borderRadius: '5px',
  textAlign: 'center',
  marginTop: '35px',
  marginBottom: '15px'
}

const crossingLineStyle = {
  margin: '50px 0',
  fontWeight: 'bold',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '0px',
  borderRadius: '5px'
}

const CrossingLines = () => (
  <div style={containerStyle} className="crossing-lines-container">
    <h1 style={h1Style}></h1>

    {/* <div style={crossingLineStyle}>
      <p>Spring 1984 - Black Diamonds</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1985 - Cressida Odyssey</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1986 - Nia Imani</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1987 - Avator Credence</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1988 - Revelation</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1989 - Renaissance</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1990 - 5 Mohogamy Roses</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1992 - Ujima Imani</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Fall 1993 - X</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1995 - Prosperity</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1996 - Daughters of the Dust</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 1999 - Evolution</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2000 - Quintessence</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2003 - Resurrection</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2004 - Reciprocity</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2005 - Accession</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2006 - E.P.I.C Trilogy</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2007 - Vitality</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2009 - Eminence</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2011 - Arpeggio</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Fall 2012 - Xenia</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2014 - Nala Amara</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Fall 2016 - Audacity</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2017 - Nje Ya Moto</p>
    </div>

    <div style={crossingLineStyle}>
      <p>Spring 2018 - IneVitable</p>
    </div> */}
  </div>
)

export default CrossingLines
