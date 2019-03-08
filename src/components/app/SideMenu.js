import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideMenu({ content, active, close }) {
  return (
    <>
      <StyledWrapper active={active}>
        {content.map(({ name, action, icon }, index) => (
          <button key={index} type="text">
            {name}
          </button>
        ))}

        <div className="closeButton" onClick={close}>
          <FontAwesomeIcon icon="times" />
        </div>
      </StyledWrapper>

      <div className="overlay" onClick={close} />
    </>
  );
}

const StyledWrapper = styled.div`
  background: #d40000;
  position: fixed;
  height: 100vh;
  width: 20em;
  max-width: 80vw;
  top: 0;
  z-index: 15;
  left: ${props => (props.active ? '0' : '-85%')};
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  padding: 2em 0;

  button {
    border: none;
    background: transparent;
    color: white;
    font-size: 1.1em;
    text-transform: uppercase;
    padding: 0.8em 0;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .closeButton {
    position: fixed;
    top: 0;
    right: ${props => (props.active ? 0 : -3)}em;
    line-height: 2em;
    width: 2em;
    text-align: center;
    font-size: 2em;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  & + .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 14;
    background: rgba(0, 0, 0, 0.8);
    opacity: ${props => (props.active ? 1 : 0)};
    visibility: ${props => (props.active ? 'visible' : 'hidden')};
    transition: all 0.5s ease;
  }
`;

export default SideMenu;
