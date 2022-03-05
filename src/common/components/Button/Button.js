import React from 'react';
import cx from 'classnames';

import './styles/button.scss';

const Button = ({
  buttonText,
  onClick,
  className,
  buttonLocation
}) => {
  return (
    <button 
      className={cx(
        'button',
        `custom-button--${buttonLocation}`,
        className
      )}
      onClick={onClick}
      type="button">
      {buttonText}
    </button>
  )
}

export default Button;