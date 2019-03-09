import React from 'react'
import styled from 'styled-components'

import Calendar from 'react-calendar';
import Overlay from '../app/Overlay';

function DateSelect ({value, onChange, active, close}) {
  return (
    <Overlay active={active}>
      <StyledWrapper onClick={close}>
        <Calendar value={value} onChange={onChange}/>
      </StyledWrapper>
    </Overlay>
  )
}

const StyledWrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default DateSelect