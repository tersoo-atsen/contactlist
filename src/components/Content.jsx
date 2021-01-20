import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Content.scss';
import Modal from './Modal';
import ContactInfo from './ContactInfo';

/**
 * Component for showing deatils for a selected contact.
 *
 * @component
 */
const Content = ({ contacts }) => {
  const [contact, setContact] = useState({});
  const [show, setShow] = useState(false);

  const handleClick = (selectedContact) => {
    setContact(selectedContact);
    if (!show && (contact !== selectedContact)) {
      setShow(!show);
    }
  };

  const onClose = () => {
    setShow(false);
    setContact({});
  };

  const renderContacts = contacts.map((person, idx) => {
    const classes = person === contact
      ? 'contact-list__contact contact-list__contact--active'
      : 'contact-list__contact';
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={idx} className="column contact-list__column">
        <div className={classes} onClick={() => { handleClick(person); }} aria-hidden="true">
          <span className="contact-list__name">
            {person.name.first}
            {', '}
            <span className="contact-list__last">{person.name.last}</span>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="contact-list">
      {show && (
        <Modal close={onClose} contact={contact}>
          <ContactInfo contact={contact} />
        </Modal>
      )}
      <div className="contact-list__container">
        <div className="row contact-list__row">
          {renderContacts}
        </div>
      </div>
    </div>
  );
};
Content.propTypes = {
  /**
  * Array of contacts
  */
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Content;
