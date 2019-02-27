import React from 'react';

function Modal({ active, close, content }) {
  return (
    <>
      <div className={`floatMenu ${active && 'active'}`}>
        <div className="closeButton" onClick={close}>
          <i className="icon-cancel" />
        </div>

        {content.map(({ name, action }, index) => (
          <button className="button item" onClick={action} key={index}>
            {name}
          </button>
        ))}
      </div>
      <div className="overlay" onClick={close} />
    </>
  );
}

export default Modal;
