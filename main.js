const contactBook = {
  contacts: [
    {name: 'Alex', phone: '+380934209812', email: 'alex@gmail.com'},
    {name: 'Frederick', phone: '+380675519833', email: 'fred@gmail.com'},
    {name: 'Ermes', phone: '+380995123202', email: 'ermes@gmail.com'},
    {name: 'Alice', phone: '+380734734396', email: 'alice@gmail.com'},
    {name: 'Todd', phone: '+38095553322', email: 'todd@gmail.com'},
    {name: 'Alex', phone: '+380994443311', email: 'alex2@gmail.com'}
  ],
  addContact(name, phone = '', email = '') {
    if (name !== undefined && name !== '') {
      this.contacts.push(
        {
          name,
          phone,
          email
        }
      );
    }
  },
  searchContact(name) {
    const filteredContacts = this.contacts.filter((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (filteredContacts.length > 0) {
      return filteredContacts;
    }

    return 'Contact not found';
  }
}

contactBook.addContact('Bob', '+380503914444', 'bob@gmail.com');

console.log(contactBook);


console.log(contactBook.searchContact('Bob'));
console.log(contactBook.searchContact('Alex'));