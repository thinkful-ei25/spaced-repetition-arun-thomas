import classNames from 'classnames';
import React from 'react';

import './button.css';

export const STYLES = {
  DEFAULT: 'default',
  SUCCESS: 'succeess',
  WARNING: 'warning',
  DANGER: 'danger',
};

export default function Button({
  children,
  className: classNameProp,
  style,
  ...remainingProps
}) {
  const className = classNames(
    'Button',
    { [`Button--${STYLES[style || 'DEFAULT']}`]: true },
    classNameProp
  );

  return (
    <button className={className} {...remainingProps}>
      {children}
    </button>
  );
}
