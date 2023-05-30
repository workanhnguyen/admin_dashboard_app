import React from 'react';

const Button = ({ backgroundColor, color, size, text, borderRadius}) => {
  return (
    <button
      type='button'
      style={{ backgroundColor, color, borderRadius }}
      className={`text-${size} hover:drop-shadow-xl p-3`}
    >
      {text}
    </button>
  )
}

export default Button