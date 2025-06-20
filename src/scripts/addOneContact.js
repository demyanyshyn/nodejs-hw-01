import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  const prevContacts = await readContacts();
  await writeContacts([...prevContacts, newContact]);
};

addOneContact();
