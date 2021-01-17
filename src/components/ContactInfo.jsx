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
          <span>{contact.name.first}</span>
          {' '}
          <span>{contact.name.last}</span>
        </h3>
        <p className="email">
          <span className="bold">Email:</span>
          {' '}
          {contact.email}
        </p>
        <p className="phone">
          <span className="bold">Phone:</span>
          {' '}
          {contact.phone}
        </p>
        <p className="street">
          <span className="bold">Street:</span>
          {' '}
          {contact.location.street.number}
          {' '}
          {contact.location.street.name}
        </p>
        <p className="city">
          <span className="bold">City:</span>
          {' '}
          {contact.location.city}
        </p>
        <p className="state">
          <span className="bold">State:</span>
          {' '}
          {contact.location.state}
        </p>
        <p className="postcode">
          <span className="bold">Postcode:</span>
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
