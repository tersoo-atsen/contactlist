import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = (props) => {
  const { contact } = props;

  return (
    <div className="contact-info">
      <div className="avatar-wrapper">
        <img className="avatar" src={contact.picture.large} alt="Avatar" />
      </div>
      <div className="contact-details">
        <h3 className="name">
          {contact.name.first}
          {' '}
          {contact.name.last}
        </h3>
        <p className="email">
          Email:
          {' '}
          {contact.email}
        </p>
        <p className="phone">
          Phone:
          {' '}
          {contact.phone}
        </p>
        <p className="street">
          Street:
          {' '}
          {contact.location.street.number}
          {' '}
          {contact.location.street.name}
        </p>
        <p className="city">
          City:
          {' '}
          {contact.location.city}
        </p>
        <p className="state">
          State:
          {' '}
          {contact.location.state}
        </p>
        <p className="postcode">
          Postcode:
          {' '}
          {contact.location.postcode}
        </p>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
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
