import React from 'https://dev.jspm.io/react';
import css from 'https://unpkg.com/csz';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      button: any;
    }
  }
}

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