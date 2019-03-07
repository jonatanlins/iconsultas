import React from 'react';
import styled from 'styled-components';

function Button({ type = 'raised', children, onClick, className }) {
  return (
    <StyledButton className={`${type} ${className}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  &.raised {
    color: white;
    font-size: 1em;
    text-transform: uppercase;
    border-radius: 9em;
    border: none;
    padding: 1em;
    cursor: pointer;
    background: linear-gradient(to right, #ff3c3c, #d40000);
  }

  &.text {
    background: transparent;
    border: none;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export default Button;
