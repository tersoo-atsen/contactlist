import React from 'react';
import PropTypes from 'prop-types';

import './ContactInfo.scss';

/**
 * Component for showing details of the contact.
 *
 * @component
 */
const ContactInfo = (props) => {
  const { contact } = props;

  return (
    <div className="contact-info">
      <div className="contact-info__image-wrapper">
        <img className="contact-info__image" src={contact.picture.large} alt="Avatar" />
      </div>
      <div className="contact-info__details">
        <h3 className="contact-info__name">
          <span>{contact.name.first}</span>
          {' '}
          <span>{contact.name.last}</span>
        </h3>
        <div className="row contact-info__row">
          <div className="column contact-info__column">
            <p className="email">
              <span className="bold">Email:</span>
              {' '}
              {contact.email}
            </p>
          </div>
          <div className="column contact-info__column">
            <p className="phone">
              <span className="bold">Phone:</span>
              {' '}
              {contact.phone}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column contact-info__column">
            <p className="street">
              <span className="bold">Street:</span>
              {' '}
              {contact.location.street.number}
              {' '}
              {contact.location.street.name}
            </p>
          </div>
          <div className="column contact-info__column">
            <p className="city">
              <span className="bold">City:</span>
              {' '}
              {contact.location.city}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column contact-info__column">
            <p className="state">
              <span className="bold">State:</span>
              {' '}
              {contact.location.state}
            </p>
          </div>
          <div className="column contact-info__column">
            <p className="postcode">
              <span className="bold">Postcode:</span>
              {' '}
              {contact.location.postcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  /**
  * Object with contact detail
  */
  contact: PropTypes.shape({
    name: PropTypes.objectOf(PropTypes.string),
    email: PropTypes.string,
    phone: PropTypes.string,
    picture: PropTypes.objectOf(PropTypes.string),
    location: PropTypes.shape({
      street: PropTypes.shape({
        number: PropTypes.number,
        name: PropTypes.string,
      }),
      city: PropTypes.string,
      state: PropTypes.string,
      postcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default ContactInfo;
