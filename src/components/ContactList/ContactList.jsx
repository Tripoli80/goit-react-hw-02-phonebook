import React, { Component } from 'react';
import { ListContacts, ContactItem, RemoveBtn } from './ContactList.styled';
export default class ContactList extends Component {
  render() {
    const { onRemoveContact, toVisibleContacts } = this.props;
    // console.log(contacts);
    return (
      <ListContacts>
       
        {toVisibleContacts().map(item => (
          <ContactItem key={item.id}>
            Name: {item.name} Phone: {item.number}
            <RemoveBtn onClick={() => onRemoveContact(item.id)}>D</RemoveBtn>
          </ContactItem>
        ))}
      </ListContacts>
    );
  }
}
