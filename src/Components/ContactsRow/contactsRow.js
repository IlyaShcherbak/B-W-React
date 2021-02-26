import React from 'react';
import './contactsRow.css'
import ContactsCard from '../ContactsCard/contactsCard';

class ContactsRow extends React.Component {
  
  data = [
    {
      image: '/assets/phone.svg',
      imageDescription: 'phone-number',
      information: '333-222-111'
    },
    {
      image: '/assets/location.svg',
      imageDescription: 'location',
      information: 'Here is some address'
    },
    {
      image: '/assets/email.svg',
      imageDescription: 'email',
      information: 'somemail@hotmail.com'
    },
  ];
  
  render() {
    return (
      <div className="contacts-row">
        {
          this.data.map((dat, i) => {
      
            return (
              <ContactsCard
                key={i}
                image={dat.image}
                imageDescription={dat.imageDescription}
                information={dat.information}
              />
            );
          })
        }
      </div>
    );
  }
}

export default ContactsRow;
