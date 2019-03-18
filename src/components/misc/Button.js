import React from 'react';
import styled from 'styled-components';

function Button({ type = 'raised', children, onClick, className, color, disabled }) {
  return (
    <StyledButton className={`${type} ${className}`} onClick={onClick} color={color} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  &.raised {
    color: white;
    font-size: 1em;
    text-transform: uppercase;
    border-radius: .5em;
    border: none;
    padding: 1em;
    cursor: pointer;
    background: ${props => props.color || '#d40000'};
  }

  &.text {
    background: transparent;
    border: none;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;
  }

  svg {
    width: 1.5em !important;
  }
`;

export default Button;
