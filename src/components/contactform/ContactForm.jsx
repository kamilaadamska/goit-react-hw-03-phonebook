import PropTypes from 'prop-types';
import css from './contactform.module.css';
const { Component } = require('react');

class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const addContactForm = e.currentTarget;
    const addedName = addContactForm.elements.name.value;
    const addedNumber = addContactForm.elements.number.value;

    this.props.onSubmit({ addedName, addedNumber });
    addContactForm.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            className={css.formInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            className={css.formInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
