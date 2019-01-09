import classNames from 'classnames';
import React from 'react';

import './button.css';

export const TYPES = {
  DEFAULT: 'default',
  SUCCESS: 'succeess',
  WARNING: 'warning',
  DANGER: 'danger',
};

export default function Button({
  children,
  className: classNameProp,
  type,
  ...remainingProps
}) {
  const className = classNames(
    'Button',
    { [`Button--${TYPES[type || 'DEFAULT']}`]: true },
    classNameProp
  );

  return (
    <button className={className} {...remainingProps}>
      {children}
    </button>
  );
}
