import { Component } from 'react';
import ContactForm from './contactform/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './contactlist/ContactList';
import { Filter } from './filter/Filter';
import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts');
    if (contactsFromLS) {
      const parsedContacts = JSON.parse(contactsFromLS);
      this.setState({ contacts: parsedContacts });
    }
    return;
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = newName => {
    const { addedName, addedNumber } = newName;

    const contact = {
      id: nanoid(3),
      name: addedName,
      number: addedNumber,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === addedName.toLowerCase()
      )
    ) {
      return alert(`${addedName} is already in contacts!`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterContact = evt => {
    this.setState({ filter: evt.target.value });
  };

  removeContact = idToRemove => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToRemove),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.container}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm onSubmit={name => this.addContact(name)} />
        <h2 className={css.headerSecondary}>Contacts</h2>
        <div className={css.contactsBox}>
          <Filter findContact={this.filterContact} filter={filter} />
          <ContactList
            contacts={contacts}
            filter={filter}
            removeContact={this.removeContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
