import React from 'react'

function Card ({title, imagen, sub}) {
  return (
    <div className='card text-center bg-success'>
        <img src={imagen} alt="" />
        <div className="card-body">
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{sub}</p>
            <a href="#" className="btn btn-secondary">Ver más</a>
        </div>
    </div>

  )
}
export default Card