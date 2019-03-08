import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ value, onChange, type, label, icon }) {
  return (
    <StyledWrapper icon={icon} className={value ? 'active' : ''}>
      <span className="label">{label}</span>
      <input value={value} onChange={onChange} type={type} />
      {icon && <FontAwesomeIcon icon={icon} />}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 1em 0;
  position: relative;

  input {
    font-size: 1em;
    border: none;
    border-bottom: 1px solid #777;
    color: black;
    transition: all 0.2s ease;
    margin-bottom: 1px;
    padding: 1em ${props => (props.icon ? 3 : 1)}em 1em 1em;
    width: 100%;
    box-sizing: border-box;
  }

  svg {
    position: absolute;
    right: 1em;
    top: 1.2em;
    font-size: 1.5em;
    color: #777;
    pointer-events: none;
  }

  .label {
    position: absolute;
    top: 1.8em;
    left: 1em;
    color: #555;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  &.active {
    input {
      border-bottom-color: black;
    }

    .label {
      font-size: 0.8em;
      left: 0.5em;
      top: 0.5em;
    }
  }

  input:focus {
    outline: none;
    border-bottom: 2px solid #d40000;
    margin-bottom: 0;
    color: #d40000;

    & ~ svg {
      color: #f40000;
    }
  }
`;

export default Input;
