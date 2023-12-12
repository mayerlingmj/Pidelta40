import React, { useState, useEffect } from 'react'

const TripDownMemoryLane = () => {
  const [images, setImages] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div>
      <h1>Trip Down Memory Lane</h1>
      <div className="slideshow">
        {images.map((image) => (
          <div
            key={image.index}
            className={`slide ${
              currentImageIndex === image.index ? 'active' : ''
            }`}
          >
            <img src={image.imageUrl} alt={image.description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default TripDownMemoryLane
