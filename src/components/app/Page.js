import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import {
  slideInRight,
  slideInLeft,
  slideOutLeft,
  slideOutRight,
} from '../../utils/animations';

function Page({ children, animation = 'slide', color = 'default', history }) {
  return (
    <StyledPage
      color={color}
      animation={animation}
      reverse={history.action === 'POP'}
    >
      {children}
    </StyledPage>
  );
}

const colors = {
  primary: '#d40000',
  grey: '#eee',
  default: 'white',
};

const StyledPage = styled.div`
  background-color: ${({ color }) => colors[color] || color || colors.default};
  min-height: 100vh;

  &.slide-enter {
    animation: ${props => (props.reverse ? slideInLeft : slideInRight)} 500ms
      forwards;
    overflow: hidden;
    width: 100%;
  }

  &.slide-exit {
    animation: ${props => (props.reverse ? slideOutRight : slideOutLeft)} 500ms
      forwards;
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
  }
`;

export default withRouter(Page);
