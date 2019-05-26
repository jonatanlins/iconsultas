import React from 'react';
import styled from 'styled-components';

const dates = {
  '10/03/2019': {
    name: 'Segunda',
    hours: ['08:15', '08:30', '09:45', '10:30', '12:15', '12:30', '15:15'],
  },
  '11/03/2019': {
    name: 'Terça',
    hours: ['08:15', '08:30', '08:45', '09:00', '12:15', '14:00', '15:15'],
  },
  '12/03/2019': {
    name: 'Quarta',
    hours: ['08:45', '09:00', '09:45', '10:30', '15:15', '15:30', '16:30'],
  },
  '13/03/2019': {
    name: 'Quinta',
    hours: ['08:15', '08:30', '09:00', '09:45', '10:30', '12:30', '16:30'],
  },
  '14/03/2019': {
    name: 'Sexta',
    hours: ['08:15', '08:30', '08:45', '09:00', '15:15', '15:30', '16:30'],
  },
  '15/03/2019': {
    name: 'Sábado',
    hours: ['08:15', '08:30', '08:45', '09:00', '09:45', '10:30', '11:20'],
  },
  '16/03/2019': { name: 'Domingo', hours: [] },
};

const MomentSelect = ({
  selectedDate,
  setDate,
  selectedTime,
  setTime,
  className,
}) => {
  const selectDate = (date, key) => {
    if (date.hours.length) {
      setDate(key);
      setTime(null);
    }
  };

  return (
    <StyledMomentSelect className={className}>
      <div className="dateSelect">
        <ul>
          {Object.keys(dates).map((key, index) => {
            const date = dates[key];

            const className =
              (selectedDate === key ? 'selected' : '') +
              (!date.hours.length ? 'disabled' : '');
            const onClick = () => selectDate(date, key);

            return (
              <li key={index} className={className} onClick={onClick}>
                <em>{date.name.substring(0, 3)}</em>
                <br />
                {key.slice(0, 5)}
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="timeSelect">
        {selectedDate &&
          dates[selectedDate].hours.map((time, index) => (
            <li
              key={index}
              className={selectedTime === time ? 'selected' : ''}
              onClick={() => setTime(time)}
            >
              {time}
            </li>
          ))}
      </ul>
    </StyledMomentSelect>
  );
};

const StyledMomentSelect = styled.div`
  ul {
    display: flex;
    padding: 1em 0;
    margin: 0;
    list-style: none;
    user-select: none;
    box-sizing: border-box;
    justify-content: center;

    li {
      padding: 0.8em;
      margin: 0.1em;
      background-color: #eee;
      color: #555;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s ease;

      em {
        font-style: normal;
        font-weight: bold;
      }

      &.selected {
        background-color: #4cb906;
        color: white;
      }

      &.disabled {
        color: #888;
      }
    }
  }

  .dateSelect {
    overflow-x: auto;
    width: 100%;
  }

  .timeSelect {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default MomentSelect;
