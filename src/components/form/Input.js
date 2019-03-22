import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ value, onChange, type, label, icon }) {
  return (
    <StyledWrapper icon={icon} className={value ? 'active' : ''}>
      <input value={value} onChange={onChange} type={type} />
      <span className="label">{label}</span>
      {icon && <FontAwesomeIcon icon={icon} />}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 1em 0;
  position: relative;

  input {
    font-size: 1em;
    border: 1px solid #bbb;
    border-radius: 0.5em;
    color: black;
    transition: all 0.2s ease;
    padding: 1.3em ${props => (props.icon ? 3 : 1)}em 0.7em 1em;
    width: 100%;
    box-sizing: border-box;
    outline: none;
  }

  svg {
    position: absolute;
    right: 0.7em;
    top: 1.2em;
    font-size: 1.5em;
    color: #777;
    pointer-events: none;
  }

  .label {
    position: absolute;
    top: 1.95em;
    left: 1em;
    color: #555;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  &.active .label,
  input:focus ~ .label {
    font-size: 0.7em;
    left: 1.25em;
    top: 1.7em;
  }
`;

export default Input;
