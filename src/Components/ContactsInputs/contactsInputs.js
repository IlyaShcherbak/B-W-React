import React from 'react';
import './contactsInputs.css'


class ContactsInputs extends React.Component {
  render() {
    return (
      
      <div className="contacts-fields">
        <div className="contacts-fields-names">
          <input className="contacts-fields-item contacts-name" type="text"
                 placeholder="First Name"
          />
          
          <input className="contacts-fields-item contacts-name" type="text"
                 placeholder="Last Name"
          />
        </div>
    
        <input className="contacts-fields-item" type="email" placeholder="Email"/>
      
        <input className="contacts-fields-item" type="tel" placeholder="Number"/>

        <textarea className="contacts-fields-item contacts-fields-message" name="message" rows="5"
                  placeholder="Write your message here..."/>
    
        <button className="contacts-fields-button contacts-fields-item">Submit</button>
      </div>
    );
  }
}

export default ContactsInputs;
