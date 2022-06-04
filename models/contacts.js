const fs = require('fs/promises');
const path=require('path');
const filePath=path.join(__dirname, 'contacts.json');

const listContacts = async () => {
    const result= await fs.readFile(filePath)
  return JSON.parse(result)
}

const getContactById = async (contactId) => {
  const allContacts=await listContacts();
  const [oneContact]=allContacts.filter(elem=>elem.id===contactId);
  if (!oneContact){return null};
  return oneContact;
}

const removeContact = async (contactId) => {}

const addContact = async (body) => {}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
