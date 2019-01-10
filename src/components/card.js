import classNames from 'classnames';
import React from 'react';

import './card.css';

export default function Card({ children, className, element: Element }) {
  const classes = classNames('Card', className);
  return <Element className={classes}>{children}</Element>;
}

Card.defaultProps = {
  element: 'div',
};
