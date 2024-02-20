import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TripDownMemoryLane = () => {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const sliderRef = useRef()

  useEffect(() => {
    const imageAddresses = [
      'https://i.imgur.com/QqiQvQR.jpeg',
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
    ]

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
    speed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    beforeChange: (current, next) => {
      if (selectedImage !== null && current !== next) {
        setSelectedImage(null)
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const handleImageClick = (index) => {
    setSelectedImage(index)
    sliderRef.current.slickGoTo(index)
  }

  const handleSlideAfterChange = (currentSlide) => {
    setSelectedImage(currentSlide)
  }

  return (
    <div style={{ backgroundColor: 'black', padding: '20px', height: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}></h1>
      <Slider
        ref={sliderRef}
        {...settings}
        style={{ height: '80%' }}
        afterChange={handleSlideAfterChange}
      >
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
              margin: '0 auto',
              maxWidth: '800px',
              height: '100%',
              backgroundColor: 'black'
            }}
          >
            <img
              src={image.imageUrl}
              alt={image.description}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                maxHeight: '600px',
                marginBottom: '10px'
              }}
            />
          </div>
        ))}
      </Slider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          height: '20%',
          overflowX: 'auto'
        }}
      >
        <div style={{ display: 'flex' }}>
          {images.map((image) => (
            <img
              key={image.index}
              src={image.imageUrl}
              alt={image.description}
              style={{
                width: '50px',
                height: '50px',
                margin: '0 5px',
                cursor: 'pointer',
                border:
                  selectedImage === image.index ? '2px solid white' : 'none'
              }}
              onClick={() => handleImageClick(image.index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TripDownMemoryLane
