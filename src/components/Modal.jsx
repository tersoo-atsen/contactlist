import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = (props) => {
  const { close, children } = props;

  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        <div className="modal__close demo-close" onClick={close} aria-hidden="true">
          <svg className="" viewBox="0 0 24 24">
            <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
            <path d="M0 0h24v24h-24z" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
