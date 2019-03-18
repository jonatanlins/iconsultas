import React from 'react';
import styled from 'styled-components';

function Overlay({ close, active, children, className }) {
  const handleClick = event => event.target === event.currentTarget && close();

  return (
    <StyledOverlay onClick={handleClick} active={active} className={className}>
      {children}
    </StyledOverlay>
  );
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 15;
  transition: all 0.5s ease;
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
`;

export default Overlay;
