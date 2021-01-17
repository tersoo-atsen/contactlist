import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Content.scss';
import ContactInfo from './ContactInfo';

const Content = ({ contacts }) => {
  const [contact, setContact] = useState(contacts[0]);

  const handleClick = (selectedContact) => setContact(selectedContact);

  return (
    <div className="content-wrapper">
      <div className="left">
        <h2>Contacts</h2>
        <div className="contacts-container">
          {contacts.map((person, idx) => {
            const classes = person === contact ? 'active contact' : 'contact';
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={idx} className={classes} onClick={() => { handleClick(person); }} aria-hidden="true">
                <span className="name">
                  {person.name.first}
                  {', '}
                  <span className="last">{person.name.last}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <ContactInfo contact={contact} />
      </div>
    </div>
  );
};
Content.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Content;
