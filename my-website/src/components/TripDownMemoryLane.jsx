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
      'https://i.imgur.com/oiJ4vM2.jpg',
      'https://i.imgur.com/3mwDvlm.jpeg',
      'https://i.imgur.com/SHXeIBc.jpeg',
      'https://i.imgur.com/SddBjKQ.jpeg',
      'https://i.imgur.com/6DaqQPk.jpeg',
      'https://i.imgur.com/dmGZRDE.jpeg',
      'https://i.imgur.com/IT2LPgh.jpeg',
      'https://i.imgur.com/fB8YrSE.jpeg',
      'https://i.imgur.com/rzQpEf2.jpeg',
      'https://i.imgur.com/wWSO5yE.jpeg',
      'https://i.imgur.com/GYRWUaV.jpeg',
      'https://i.imgur.com/c6IAo9D.jpeg',
      'https://i.imgur.com/5vxREUj.jpeg',
      'https://i.imgur.com/40JyWPB.jpeg',
      'https://i.imgur.com/b9eTo0V.jpeg',
      'https://i.imgur.com/03zOZbp.jpeg',
      'https://i.imgur.com/QXIvTV0.jpeg',
      'https://i.imgur.com/xzpHrp4.jpeg',
      'https://i.imgur.com/SFOG1UL.jpeg',
      'https://i.imgur.com/gNuhpSL.jpeg',
      'https://i.imgur.com/DmQFinn.jpeg',
      'https://i.imgur.com/ydsxX3t.jpeg',
      'https://i.imgur.com/Eo96nyu.jpeg',
      'https://i.imgur.com/vOQrk5t.jpeg',
      'https://i.imgur.com/BesjFsC.jpeg',
      'https://i.imgur.com/iwlyqwt.jpeg',
      'https://i.imgur.com/FSVVirb.jpeg',
      'https://i.imgur.com/BUrNTNC.jpeg',
      'https://i.imgur.com/yNyqdxA.jpeg',
      'https://i.imgur.com/VmJDw6D.jpeg',
      'https://i.imgur.com/kCNIE3W.jpeg',
      'https://i.imgur.com/8WMHHv8.jpeg',
      'https://i.imgur.com/OlpAkEn.jpeg',
      'https://i.imgur.com/QqiQvQR.jpeg',
      'https://i.imgur.com/ua7TimB.jpeg',
      'https://i.imgur.com/hKFJWOe.jpeg',
      'https://i.imgur.com/pEJxS86.jpeg',
      'https://i.imgur.com/G98BlS0.jpeg',
      'https://i.imgur.com/JFyJ1PT.jpeg',
      'https://i.imgur.com/kmZKWRz.jpeg',
      'https://i.imgur.com/bQsDN0V.jpeg',
      'https://i.imgur.com/i1ocIuN.jpeg',
      'https://i.imgur.com/VTBlQho.jpeg'

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
    speed: 9000, // Adjust the speed as needed (duration for each slide)
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
