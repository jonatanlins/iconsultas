import React from 'react';
import styled from 'styled-components';

function Button({
  type = 'raised',
  children,
  onClick,
  className,
  color,
  disabled,
}) {
  return (
    <StyledButton
      className={`${type} ${className} ${disabled ? 'disabled' : ''}`}
      type="button"
      onClick={onClick}
      color={color}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  &.raised {
    color: white;
    font-size: 1em;
    text-transform: uppercase;
    border-radius: 0.5em;
    border: none;
    padding: 1em;
    cursor: pointer;
    background: ${props => props.color || '#d40000'};

    &.disabled {
      background-color: #bbb;
    }
  }

  &.outline {
    color: ${props => props.color || '#d40000'};
    font-size: 1em;
    text-transform: uppercase;
    border-radius: 0.5em;
    border: 2px solid ${props => props.color || '#d40000'};
    padding: 1em;
    cursor: pointer;
    background: transparent;
    font-weight: bold;

    &.disabled {
      color: #bbb;
      border-color: #bbb;
    }
  }

  &.text {
    background: transparent;
    border: none;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;
  }

  svg {
    width: 1.5em !important;
  }
`;

export default Button;
