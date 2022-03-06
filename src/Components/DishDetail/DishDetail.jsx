/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const DishDetail = ({btn, title, id, img, desc}) => {
    
  return (
      <div className="col col-md-3 m-3" key={id}>
          <div className="card" style={{width: '18rem'}}>
              <img src={img} className="card-img-top" alt={title} />
                  <div className="card-body">
                  <h5 className="card-title">{title} </h5>
                      <p className="card-text">{desc} </p>
                  <a href="#" className="btn btn-primary">{btn} </a>
                  </div>
          </div>
    </div>
  )
}

export default DishDetail