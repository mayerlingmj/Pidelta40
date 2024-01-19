import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TripDownMemoryLane = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    // Add your image addresses here
    const imageAddresses = [
      'https://i.imgur.com/Ulkq85Z.jpg',
      'https://i.imgur.com/N0dubsl.jpg',
      'https://i.imgur.com/MeNw2Wl.jpg',
      'https://i.imgur.com/6bJDMxd.jpg',
      'https://i.imgur.com/wLLEhK7.jpg',
      'https://i.imgur.com/bkx2p1y.jpg',
      'https://i.imgur.com/2DH1ehr.jpg',
      'https://i.imgur.com/0ZHLWrX.jpg',
      'https://i.imgur.com/5QOLo7y.jpg',
      'https://i.imgur.com/gN6tjQ7.jpg',
      'https://i.imgur.com/06gVp2t.jpg',
      'https://i.imgur.com/l8pUAyQ.jpg',
      'https://i.imgur.com/oiJ4vM2.jpg'
      // Add more image addresses as needed
    ]

    // Create an array of image objects with an index and description
    const imagesData = imageAddresses.map((address, index) => ({
      index,
      imageUrl: address,
      description: `Image ${index + 1}`
    }))

    setImages(imagesData)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 10000, // Adjust the speed as needed (duration for each slide)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 to control autoplay manually
    cssEase: 'linear'
  }

  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>
        Trip Down Memory Lane
      </h1>
      <Slider {...settings}>
        {images.map((image) => (
          <div
            key={image.index}
            className="slide"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              margin: '0 10px',
              backgroundColor: 'black'
            }}
          >
            <img
              src={image.imageUrl}
              alt={image.description}
              style={{
                maxWidth: '100%',
                maxHeight: '600px',
                marginBottom: '10px'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TripDownMemoryLane
