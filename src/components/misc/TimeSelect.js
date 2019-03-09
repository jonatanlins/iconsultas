import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import TimeKeeper from 'react-timekeeper';
import Overlay from '../app/Overlay';

function DateSelect ({value, onChange, active, close}) {
  const handleChange = time => onChange(dayjs().set('hours', time.hour).set('minutes', time.minute))
  return (
    <StyledOverlay active={active} close={close}>
      <TimeKeeper time={dayjs(value).format('HH:mm')} onChange={handleChange}/>
    </StyledOverlay>
  )
}

const StyledOverlay = styled(Overlay)`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default DateSelect