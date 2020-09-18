
import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button className="btn" id={props.id}
      value={props.value}
      onClick={props.handleClick}>
      {props.name}{props.children}
    </button>
  )
};

export default Button;