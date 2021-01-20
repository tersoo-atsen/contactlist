/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import './App.scss';
import getContacts from './utils/contactsAPI';
import Tabs from './components/Tabs';

/**
 * Container for all other components
 *
 * @component
 */
const App = () => {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getContacts();
      if (response === null) {
        setError('Something went wrong, please try again.');
        setLoading(false);
      } else {
        setDataArray(response);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="app-wrapper">
      {error && <div className="error">{error}</div>}
      {loading
        ? <p className="loader">Loading...</p>
        : (dataArray.length > 0 && (
          <Tabs>
            {dataArray.map((item) => (
              <div key={item.tab} label={item.tab}>
                {item.data}
              </div>
            ))}
          </Tabs>
        ))}
    </div>
  );
};

export default App;
