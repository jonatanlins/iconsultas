import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Page from '../app/Page';

function Steps({ children, step, onChangeStep, icons, action = 'forward' }) {
  const percentage = (step * 100) / (icons.length - 1);

  return (
    <>
      <StyledMarker percentage={percentage}>
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`step ${step === index ? 'active' : ''}`}
            onClick={() => index < step && onChangeStep(index)}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </StyledMarker>

      <StyledWrapper step={step} className="steps">
        <TransitionGroup>
          <CSSTransition key={step} timeout={500} classNames="slide">
            <Page reverse={action === 'backward'}>{children[step]}</Page>
          </CSSTransition>
        </TransitionGroup>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledMarker = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: linear-gradient(
      to right,
      #4cb906 ${props => props.percentage}%,
      #888 ${props => props.percentage}%
    );
    height: 0.2em;
    margin: 1.4em 1em;
    width: calc(100% - 4em);
  }

  .step {
    border-radius: 99px;
    width: 2em;
    color: #4cb906;
    line-height: 2em;
    z-index: 1;
    background: white;
    border: 0.2em solid #4cb906;
    padding: 0.3em;
    text-align: center;
    transition: all 0.2s ease;
    cursor: pointer;

    &.active {
      background: #4cb906;
      color: white;

      ~ .step {
        cursor: default;
        color: #888;
        border-color: #888;
      }
    }
  }
`;

export default Steps;
