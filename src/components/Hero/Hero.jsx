import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; 

import styles from './Hero.module.css'

const slider = [
{title: " The Thor",
  description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  url: "/2.jpeg",},

  {title: " The SpiderMan",
  description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  url: "/3.jpeg",},

  {title: " The BatMan",
  description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  url: "/4.jpg",},

  {title: " The IronMan",
  description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  url: "/5.jpeg",},

  {title: " The SuperMan",
  description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  url: "/1.jpg",},

  
]

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <div className={styles['carousel-content']}>
          <span>discover</span>
          <h1>Ongoing Films</h1>
          <hr />
          <p>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <Link to="/Selectmovie/1" className={styles['slider-btn']}>Ongoing Movies</Link>
        </div>
      </div>

      <Swiper 
      className='myswiper'
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:3,
        slideShadows: true
      }}
      loop={true}
      pagination={{clickable: true}}
      
      autoplay={{
        delay:5000,
        disableOnInteraction: false
      }}
      breakpoints={{
        640:{
          slidesPerView: 2
        },
        768:{
          slidesPerView: 1
        },
        1024:{
          slidesPerView: 2
        },
        1560:{
          slidesPerView: 3
        }
      }}
      >
        {
          slider.map(data => (
            <SwiperSlide style = {{ backgroundImage: `url(${data.url})`}} className='myswiper-slider'>
              
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <a href={`${data.url}`} target="_blank" className={styles ['slider-btn']}>explore</a>
              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero;