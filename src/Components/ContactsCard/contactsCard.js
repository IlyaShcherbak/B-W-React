import React from 'react';
import './contactsCard.css'

class ContactsCard extends React.Component {
  render() {
    const {image, imageDescription, information} = this.props;
    
    return (
      <div className="contacts-card-item">
        <img className="contacts-card-img" src={process.env.PUBLIC_URL + image} alt={imageDescription}/>
        <p className="contacts-card-text">{information}</p>
      </div>
    );
  }
}

export default ContactsCard;
