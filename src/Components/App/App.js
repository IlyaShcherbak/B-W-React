import React from "react";
import './App.css';
import Home from '../Home/home';
import Story from '../Story/story';
import Team from '../Team/team';
import Services from '../Services/services';
import Contacts from '../Contacts/contacts';
import Footer from '../Footer/footer';

function App() {
  return (
    <div>
      <Home/>
      
      <Story/>
      
      <Team/>
      
      <Services/>
  
      <Contacts/>
      
      <Footer/>
    </div>
    
  );
}

export default App;
