import React from 'react';
import styled, { keyframes } from 'styled-components';

function Page({ children, color = 'default' }) {
  return <StyledPage color={color}>{children}</StyledPage>;
}

const slideInRight = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;

const colors = {
  primary: '#d40000',
  grey: '#eee',
  default: 'white',
};

const StyledPage = styled.div`
  background-color: ${({ color }) => colors[color] || color || colors.default};
  min-height: 100vh;

  &.page-enter {
    animation: ${slideInRight} 500ms forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 500ms forwards;
    position: absolute;
    top: 0;
    overflow: hidden;
  }
`;

export default Page;
