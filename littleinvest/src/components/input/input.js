import React from 'react';
import "./input.css"

const Input = (props) => {
  return (
    <div className="inputs-label">
      <label className="label" htmlFor={props.for}>{props.text}</label>
      <input className="input" id={props.id}>
      </input>
    </div>
  )
}

export default Input;
