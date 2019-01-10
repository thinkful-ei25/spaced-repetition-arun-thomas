import classNames from 'classnames';
import React from 'react';

import './button.css';

export const THEMES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
};

export default function Button({
  children,
  className: classNameProp,
  theme,
  ...remainingProps
}) {
  const className = classNames(
    'Button',
    { [`Button--${theme || THEMES['DEFAULT']}`]: true },
    classNameProp
  );

  return (
    <button className={className} {...remainingProps}>
      {children}
    </button>
  );
}
