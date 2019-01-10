import React from 'react';

export default (ForwardRefComponent) => (props) => {
  return <ForwardRefComponent {...props} />
};
