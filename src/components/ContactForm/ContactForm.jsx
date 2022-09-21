import React, { Component } from 'react';
import { InputName, ContactFormAdd, SubmitBtn } from './ContactForm.styled';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChangeForma = obj => {
    const { name, value } = obj.target;
    this.setState({
      [name]: value,
    });
  };
  onResetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    // console.log('🚀 ~changeName', onChangeForma);
    return (
      <div>
        <ContactFormAdd
          onSubmit={e =>
            onAddContact({ e: e, onResetInput: this.onResetInput })
          }
        >
          <InputName
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => this.onChangeForma(e)}
          />
          <InputName
            placeholder="Phone Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
            onChange={e => this.onChangeForma(e)}
          />
          <SubmitBtn> Add to my contact</SubmitBtn>
        </ContactFormAdd>
      </div>
    );
  }
}
