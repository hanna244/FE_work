import React from 'react'
import { button } from './Button.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ label, className, type, ...restProps }) => {
  return (
    <button
      type={type}
      className={classNames(button, className)}
      {...restProps}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Button
