import React from 'react';
import Card from '../Shared/Card';
import SectionTitle from '../Shared/SectionTitle';
import './style.css'

function NewArrivals(props) {
    const arrivals = [
        {
          id: '1',
          image : '1.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active',
        },
        {
          id: '2',
          image : '2.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active',

        },
        {
          id: '3',
          image : '3.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active',

        },
        {
          id: '4',
          image : '4.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: '',

        },
        {
          id: '5',
          image : '5.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active',

        },
        {
          id: '6',
          image : '6.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: '',

        },
        {
          id: '7',
          image : '7.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active',

        },
        {
          id: '8',
          image : '8.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: '',
        }
      ];
    return (
        <div className='container'>
            <SectionTitle title='Featured' />
            <div className='grid-container'>
                {arrivals.map(item => {
                    return (
                        <Card {...item}/>
                    )
                })}
            </div>
        </div>
    );
}

export default NewArrivals;