import React from 'react';
import './option-rend.css';

const RendOption = (props) => {
  return (
    <div className="more-cash">
      <img src={props.src} />
      <p>{props.type}</p>
      <p>{props.desc}</p>
    </div>
  )
}

export default RendOption;