import React, { useState, useEffect } from 'react'
import './styless.css'
import { Link } from 'react-scroll'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Slider from 'react-slick'

const Home = () => {

  const services = [
    {
      name: 'Produto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/service-photo.png'
    },
    {
      name: 'Produto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/service-photo.png'
    },
    {
      name: 'Produto 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/service-photo.png'
    }
  ]

  const diferenciais = [
    {
      name: 'Café',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/cafe.png'
    },
    {
      name: 'Moedas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/moeda.png'
    },
    {
      name: 'Ambiente',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/ambiente.png'
    }
  ]

  const personas = [
    {
      name: 'Fulano',
      function: 'Funcionário',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/persona.png'
    },
    {
      name: 'Fulano',
      function: 'Funcionário',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/persona.png'
    },
    {
      name: 'Fulano',
      function: 'Funcionário',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/persona.png'
    },
    {
      name: 'Fulano',
      function: 'Funcionário',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisi odio, pretium.',
      photo: './home-assets/persona.png'
    },
  ]

  const [sliderSettings, setSliderSettings] = useState()

  const sliderDesktopSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const sliderMobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSliderSettings(sliderMobileSettings)
    } else {
      setSliderSettings(sliderDesktopSettings)
    }
  }, [])

  return (
    <div id='home-container'>
      <div id='home-wrapper'>
        <div id='banner-wrapper'>
          <div id='banner-left-side'>
            <div id='left-side-content'>
              <h2>Teste de Admissão</h2>
              <h3>Banner estático da página</h3>
              <p>Etiam sit amet diam dignissim sem pulvinar pulvinar. Quisque
              elementum purus nec uma consequat, ac feugiat eros ultrices. Mauris
        consectetur sapien non eros ultrices, nec ultrices turpis facilisis.</p>
              <Link to='services-wrapper' offset={-105} duration={1000} smooth={true}><img src='./home-assets/mouse-icon.png' alt='mouse'></img></Link>
            </div>
          </div>
          <div id='banner-right-side'>
            <img src='./home-assets/universe.png' alt='universe'></img>
          </div>
          <img id='xicara' src='./home-assets/xicara.png' alt='universe'></img>
        </div>
        <div id='services-wrapper'>
          <div id='services-title'>
            <h2>Serviços</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices est.</p>
          </div>
          <div id='services-box'>
            {services.map((service, index) => {
              return (
                <div key={index} className='service-info'>
                  <img src={service.photo} alt='service'></img>
                  <div className='service-description'>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div id='diferenciais-wrapper'>
          <div id='diferenciais-title'>
            <h2>Diferenciais</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices est.</p>
          </div>
          <div id='diferenciais-box'>
            {diferenciais.map((diferencial, index) => {
              return (
                <div key={index} className='diferencial-info'>
                  <img src={diferencial.photo} alt='diferencial'></img>
                  <div className='diferencial-description'>
                    <h2>{diferencial.name}</h2>
                    <p>{diferencial.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div id='personas-wrapper'>
          <div id='personas-title'>
            <h2>Personas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit et, ultrices est.</p>
          </div>
          <div id='personas-box'>
            <button className='slider-arrow-btn' id='left-arrow-btn'><HiChevronLeft /></button>
            <button className='slider-arrow-btn' id='right-arrow-btn'><HiChevronRight /></button>
            <Slider {...sliderSettings}>
              {personas.map((persona, index) => {
                return (
                  <div key={index} className='persona-info'>
                    <p>{persona.description}</p>
                    <div className='persona-id'>
                      <img src={persona.photo} alt='persona'></img>
                      <div className='persona-id-name'>
                        <h2>{persona.name}</h2>
                        <p>{persona.function}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home