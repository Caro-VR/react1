import React from 'react'
import Card from './Card'

import imagen1 from '../assets/imagen1.jpg'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'

const cards = [
    {
        id: 1,
        title: 'Martín Pescador',
        image: imagen1,
        text: 'Pájaro'
    },

    {
        id: 2,
        title: 'Tigre',
        image: imagen2,
        text: 'Carnívoro'
    },

    {
        id: 3,
        title: 'Elefante',
        image: imagen3,
        text: 'Abrevadero'
    }
]

function Cards () {
  return (
    <div className="container">
        <div className="row">
            {
                cards.map ((card) => (
                    <div className="col-md-12" key={card.id}>
                        <Card title={card.title} imagen={card.image} sub={card.text} />
                    </div>
                ))
            }  

        </div>
    </div>
  )
}
export default Cards