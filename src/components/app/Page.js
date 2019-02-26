import React from 'react'
import styled, {keyframes} from 'styled-components'

function Page ({children}) {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

const animations = {
  slideInRight: keyframes`
   0% {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  `,

  slideOutLeft: keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  `,
}

const StyledPage = styled.div`
&.page-enter {
  animation: ${props => animations[props.enterAnimation || 'slideInRight']} 500ms forwards;
}
&.page-exit {
  animation: ${props => animations[props.exitAnimation || 'slideOutLeft']} 500ms forwards;
  position: absolute;
  top: 0;
  overflow: hidden;
}
`

export default Page