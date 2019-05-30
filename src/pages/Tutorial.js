import React from 'react';
import Carousel from 'tiny-slider-react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import Page from '../components/app/Page';
import carousel1 from '../assets/images/tutorial-01.png';
import carousel2 from '../assets/images/tutorial-02.png';

function Tutorial({ history }) {
  const [carousel, setCarousel] = React.useState(null);

  const finishTutorial = () => history.push('/login');

  React.useEffect(() => {
    if (window.innerWidth > 450) {
      finishTutorial();
    }
  }, []);

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
  };

  const handleContinue = event => {
    if (carousel.slider.getInfo().index < 1) {
      event.preventDefault();
      carousel.slider.goTo('next');
    } else {
      finishTutorial();
    }
  };

  return (
    <Page>
      <StyledWrapper onClick={handleContinue}>
        <Carousel settings={settings} ref={setCarousel}>
          <img src={carousel1} alt="Agendar sua consulta nunca foi tão fácil" />
          <img src={carousel2} alt="Agendar sua consulta nunca foi tão fácil" />
        </Carousel>

        <Link
          to="/login"
          className="skipTutorialButton"
          onClick={handleContinue}
        >
          Continuar
        </Link>
      </StyledWrapper>
    </Page>
  );
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
`;

export default withRouter(Tutorial);
