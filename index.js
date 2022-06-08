const contactsOperations = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsOperations.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) throw new Error(`Product whith id=${id}, not defined`);
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      const deletedContact = await contactsOperations.removeContact(id);
      if (!deletedContact)
        throw new Error(`Product whith id=${id}, not defined`);
      console.log(deletedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
