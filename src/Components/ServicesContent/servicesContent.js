import React from 'react';
import './servicesContent.css'
import ServicesContentCard from '../ServicesContentCard/servicesContentCard';

class ServicesContent extends React.Component {
  
  data = [
    {
      image: '/assets/business.svg',
      title: 'some analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Nullam ex arcu, suscipit ut tortor et, hendrerit molestie odio.'
    },
    {
      image: '/assets/love-and-romance.svg',
      title: 'We provide you love',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/multimedia.svg',
      title: 'And some cloud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Nulla facilisi. Curabitur convallis sagittis feugiat.'
    },
  ];
  
  render() {
    return (
      <div className="services-content">
        {
          this.data.map((dat, i) =>{
            
            return(
              <ServicesContentCard
                key={i}
                image={dat.image}
                title={dat.title}
                description={dat.description}
              />
            );
          })
        }
      
      </div>
    
    );
  }
}

export default ServicesContent;
