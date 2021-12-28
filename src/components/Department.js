import React from 'react';
import './Style.css'

const Department = (props) => {

  return (
    <>
      <div className="department">
        <i className={`fas fa-${props.icon}`} style={{color: `${props.color}`}}></i><br/>
          <h3>{props.department}</h3>
      </div>
    </>
  )
}

export default Department
