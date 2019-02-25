import React from 'react'
import styled from 'styled-components'

function Page ({children}) {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

const StyledPage = styled.div`
&.page-appear,
&.page-enter {
  transform: translateX(100%);
  z-index: 1;
}
&.page-appear-active,
&.page-enter.page-enter-active {
  transform: translateX(0);
  transition: transform 500ms ease;
}

&.page-exit {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

&.page-exit.page-exit-active {
  transform: translateX(-100%);
  transition: transform 500ms ease 10ms;
}
`

export default Page