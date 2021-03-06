import React from 'https://cdn.skypack.dev/react';
import css from 'https://cdn.skypack.dev/csz';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      button: any;
    }
  }
}

// @todo: sort these lazy types out across the code base
const Button = (props: any) => 
  <button 
    className={css`
      background: rebeccapurple;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 3px;
    `}
    type={props.type} 
    onClick={props.onClick}
  >
    {props.children}
  </button>

export default Button;