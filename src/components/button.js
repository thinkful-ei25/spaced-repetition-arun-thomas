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
    `Button--${theme || THEMES.DEFAULT}`,
    classNameProp
  );

  return (
    <button className={className} {...remainingProps}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  className,
  component: Component,
  theme,
  ...remainingProps
}) {
  const classes = classNames(
    'LinkButton',
    'Button',
    `Button--${theme || THEMES.DEFAULT}`,
    className
  );

  return (
    <Component {...remainingProps} className={classes}>
      {children}
    </Component>
  );
}

LinkButton.defaultProps = {
  component: 'a',
};
