import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as NotificationsActions } from '../store/ducks/notifications';

import Shell from '../components/app/Shell';

import checkIcon from '../assets/icons/check.png';
import warningIcon from '../assets/icons/warning.png';
import questionIcon from '../assets/icons/question.png';
import discountsIcon from '../assets/icons/discounts.png';

const icons = {
  check: checkIcon,
  warning: warningIcon,
  discounts: discountsIcon,
  question: questionIcon,
};

function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.data);

  React.useEffect(() => {
    dispatch(NotificationsActions.notificationsRequest());
  }, []);

  return (
    <Shell title="Notificações">
      <StyledWrapper>
        <StyledList className="notificationList">
          {notifications.map(({ id, type, text }) => (
            <li key={id}>
              <Link to="">
                <img src={icons[type]} alt="Ícone" className="icon" />
                <span className="content">{text}</span>
              </Link>
            </li>
          ))}
        </StyledList>
      </StyledWrapper>
    </Shell>
  );
}

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  list-style: none;
`;

export default Notifications;
