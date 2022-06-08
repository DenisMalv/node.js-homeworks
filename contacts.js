const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await listContacts();
  const searchedContact = data.find(({ id }) => id === contactId.toString());
  if (!searchedContact) return null;
  return searchedContact;
}

async function removeContact(contactId) {
  const data = await listContacts();
  const deletedContactIndex = data.findIndex(
    ({ id }) => id === contactId.toString()
  );
  if (deletedContactIndex === -1) return null;

  const deletedContact = data.splice(deletedContactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data));
  return deletedContact;
}

async function addContact(name, email, phone) {
  const data = await listContacts();
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  const newData = [...data, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newData));
  return newContact;
}
// addContact("den", "123@mail", "123123123");
// addContact("denis", "qweqwe@mail", "123123122133");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
