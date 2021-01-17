/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import './App.scss';
import getContacts from './utils/contactsAPI';
import Tabs from './components/Tabs';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getContacts();
      if (response.error) {
        setError('Something went wrong, please try again.');
        setLoading(false);
      } else {
        setContacts(response);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="app-wrapper">
      {error && <div className="error">{error}</div>}
      {loading
        ? <p className="loader">Loading...</p>
        : (contacts.length > 0 && (
          <Tabs>
            {contacts.map((item) => (
              <div key={item.title} label={item.title}>
                {item.data}
              </div>
            ))}
          </Tabs>
        ))}
    </div>
  );
};

export default App;
