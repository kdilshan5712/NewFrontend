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
{title: "Devi Kusumasana",
  description: "A gripping historical epic about royal intrigue, betrayal, and forbidden love, set against the backdrop of ancient Sri Lanka's majestic palaces and power struggles",
  url: "/1_DeviKusumasana.jpg",},

  {title: "Valampoori",
  description: "A powerful story of politics, romance, and betrayal, following a determined leader who struggles for justice, navigating loyalty and corruption in rural Sri Lanka",
  url: "/2_Valampuuri.jpg",},

  {title: "How To Train Your Dragon 4",
  description: "Hiccup and Toothless reunite for a breathtaking adventure filled with friendship, loyalty, new dragons, thrilling battles, and heartwarming moments that redefine their legendary bond",
  url: "/3_Dragon.jpg",},

  {title: "Maalik",
  description: "A farmer’s son rises from humble beginnings into the dangerous world of power, betrayal, and politics, becoming an unchallenged underworld figure feared by many",
  url: "/5_Maalik.jpg",},

  {title: "Baaghi",
  description: "An unstoppable warrior defies all odds, confronting ruthless enemies and dangerous conspiracies, fighting fearlessly for love, honor, justice, and redemption against impossible challenges",
  url: "/4_Baaghi.jpg",},

  
]

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <div className={styles['carousel-content']}>
          <span>discover</span>
          <h1>Ongoing Movies</h1>
          <hr />
          <p>
            Book your seats for the latest blockbusters now! Explore our collection of ongoing movies and enjoy a premium cinema experience with friends and family!          
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
                <Link to={`/booking/${data.title}`} className={styles['slider-btn']}>Book Tickets</Link>
              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero;