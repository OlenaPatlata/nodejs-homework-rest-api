const fs = require('fs/promises')
const contacts=require('./contacts.json')
const listContacts = async () => {
  const result= await fs.readFile('./')
  return {result, status:200}
}

const getContactById = async (contactId) => {}

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
