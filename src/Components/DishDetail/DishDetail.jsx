/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const DishDetail = ({ btn, title, id, img, desc, width}) => {
    console.log(desc)
  return (
      <div className="col-5 m-2" key={id}>
          <div className="card" style={{ width: width}}>
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