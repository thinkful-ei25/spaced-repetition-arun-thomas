import classNames from 'classnames';
import React from 'react';

import './input.css';

export const THEMES = {
  DEFAULT: 'default',
  ANSWER: 'answer',
};

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    const { className, theme, input, type, label, unit, ...remainingProps } = this.props;
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      const errorClasses = classNames(
        'Input_error',
        `Input_error--${theme || THEMES.DEFAULT}`
      );
      error = <div className={errorClasses}>{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      const warningClasses = classNames(
        'Input_warning',
        `Input_warning--${theme || THEMES.DEFAULT}`
      );
      warning = <div className={warningClasses}>{this.props.meta.warning}</div>;
    }

    const divClasses = classNames(
      'Input',
      `Input--${theme || THEMES.DEFAULT}`,
      className
    );
    const labelClasses = classNames(
      'Input_label',
      `Input_label--${theme || THEMES.DEFAULT}`
    );
    const inputClasses = classNames(
      'Input_input',
      `Input_input--${theme || THEMES.DEFAULT}`,
      {[`Input_input--${theme || THEMES.DEFAULT}--error`]: error},
      {[`Input_input--${theme || THEMES.DEFAULT}--warning`]: warning},
    );

    return (
      <div className={divClasses}>
        <label htmlFor={input.name} className={labelClasses}>
          {label}
        </label>
        <input
          {...input}
          id={input.name}
          type={type}
          className={inputClasses}
          ref={(input) => (this.input = input)}
          placeholder={label}
          {...remainingProps}
        />
        {unit}
        {error}
        {warning}
      </div>
    );
  }
}
