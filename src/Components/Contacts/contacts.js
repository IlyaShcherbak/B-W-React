import React from 'react';
import './contacts.css'
import ContactsTitle from '../ContactsTitle/contactsTitle';
import ContactsRow from '../ContactsRow/contactsRow';
import ContactsInputs from '../ContactsInputs/contactsInputs';

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts section">
        <ContactsTitle/>
        <ContactsRow/>
        <ContactsInputs/>
      </div>
    );
  }
}

export default Contacts;
