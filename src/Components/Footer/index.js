import React from 'react'
import './styless.css'

const Footer = () => {
  return (
    <div id='footer-container'>
      <div id='footer-wrapper'>
        <div id='photo-wrapper'>
          <img src='./footer-assets/cel-photo.png' alt='celphone'></img>
        </div>
        <div id='footer-content'>
          <h2>Este protótipo foi feito para<br /> conhecer melhor suas habilidades</h2>
          <p>
            Etiam sit amet diam dignissim sem pulvinar pulvinar. Quisque
            elementum purus nec uma consequat, ac feugiat eros ultrices. Mauris
            consectetur sapien non eros ultrices, nec ultrices turpis facilisis.
          </p>
          <img src='./footer-assets/show.png' alt='show'></img>
        </div>
      </div>
    </div>
  )
}

export default Footer