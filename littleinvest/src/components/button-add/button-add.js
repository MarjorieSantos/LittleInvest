import React from 'react';
import './button-add.css';

const ButtonAdd = (props) => {
  return (
    <button className="btn-add" id={props.id}
      value={props.value}
      onClick={props.handleClick}>
      {props.name}{props.children}
      <div className="circle-more">
        +
      </div>
    </button>
  )
};

export default ButtonAdd;