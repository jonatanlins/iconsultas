import React from 'react';
import Carousel from "tiny-slider-react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Page from '../components/app/Page'
import carousel1 from '../assets/images/tutorial-01.png'
import carousel2 from '../assets/images/tutorial-02.png'

function Tutorial () {
  const settings = {
    items: 1,
    slideBy: 'page',
    navPosition: 'bottom',
    arrowKeys: true,
    loop: false,
    controls: false,
    preventScrollOnTouch: 'force',
    swipeAngle: 90,
    mouseDrag: true,
  }

  return (
    <Page>
      <StyledWrapper>
      <Carousel settings={settings}>
        <img src={carousel1}/>
        <img src={carousel2}/>
      </Carousel>
      
      <Link to="/cidades" className="skipTutorialButton">Continuar</Link>
      </StyledWrapper>
    </Page>
  )
}

const StyledWrapper = styled.div`
img {
  height: 100vh;
}
.tns-nav {
  z-index: 1;
  padding-top: 3em;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}
`

export default Tutorial;
