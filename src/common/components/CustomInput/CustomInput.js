import React from 'react';
import cx from 'classnames';

const CustomInput = ({
  className,
  type = 'text'
}) => {
  return (
    <div className={cx(
      'custom-input',
      className
    )}>
      <input type={type} className="custom-input__field" />
    </div>
  );
};

export default CustomInput;