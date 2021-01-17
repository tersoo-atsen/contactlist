import config from '../config';

const formatContactData = (contacts) => {
  if (contacts.length === 0) return [];

  const formattedContacts = Object.values(
    contacts.reduce((acc, contact) => {
      const firstLetter = contact.name.last[0].toLocaleLowerCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = { title: firstLetter, data: [contact] };
      } else {
        acc[firstLetter].data.push(contact);
      }
      return acc;
    }, {}),
  );

  config.tabs.map((tab) => {
    const titles = formattedContacts.map((item) => item.title);
    if (!titles.includes(tab.toLocaleLowerCase())) {
      formattedContacts.push({ title: tab, data: [] });
    }
    return tab;
  });

  formattedContacts.map((item, idx) => {
    formattedContacts[idx].data = item.data.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
    return item;
  });

  return formattedContacts.sort((a, b) => (a.title > b.title ? 1 : -1));
};

export default formatContactData;
