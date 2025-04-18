import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Carousel from 'react-material-ui-carousel'

const images = [
    assets.slider1,
    assets.slider2,
    assets.slider3,
    assets.slider4,
  ];

const Slider = () => {
    return (
      <div>
        <Carousel
          indicatorContainerProps={{
            style: {
              position: 'absolute',
              bottom: 10,
              zIndex:10,
              
            }
          }}
          indicatorIconButtonProps={{
            style: {
              padding: '4px',
              margin: '0 4px',
              borderRadius: '12px',
              width: '24px',
              height: '8px',
              backgroundColor: 'white',
              color: 'transparent',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: '#494949',
              width: '32px',
            },
          }}
          navButtonsProps={{
            style: {
              borderRadius: 20,
              backgroundColor: 'white',
              color: '#494949',
            }
          }}
        >
          {
            images.map((item, i) => <img key={i} className='w-full w-[100vw] aspect-[16/7] object-cover' src={item} alt="" /> )
          }
        </Carousel>
      </div>
    )
}

export default Slider
