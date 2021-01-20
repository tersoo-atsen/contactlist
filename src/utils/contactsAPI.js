import config from '../config';
import formatContactData from './formatContactData';

const api = `${config.userUrl}`;
const count = config.numberCards;
const apiOptions = `?results=${count}&exc=gender,registered,dob,cell,timezone,nat,id&nat=au,us,dk,fr,gb`;
const headers = { Accept: 'application/json' };
const getContacts = async () => {
  try {
    const response = await fetch(`${api}/${apiOptions}`, { method: 'GET', headers });
    const data = await response.json();
    return formatContactData(data.results);
  } catch (error) {
    return null;
  }
};
export default getContacts;
