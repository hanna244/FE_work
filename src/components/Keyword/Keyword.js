import React from 'react'
import PropTypes from 'prop-types'
import {
  keyword,
  largeSize as largeSizeClass,
  greenColor as greenColorClass,
} from './Keyword.module.scss'
import classNames from 'classnames'

const Keyword = ({ label, largeSize, greenColor, ...propTypes }) => {
  return (
    <p
      className={classNames(
        keyword,
        largeSize ? largeSizeClass : null,
        greenColor ? greenColorClass : null
      )}
      {...propTypes}
    >
      {label}
    </p>
  )
}

Keyword.defaultProps = {
  label: 'name',
  largeSize: false,
  greenColor: false,
}

Keyword.propTypes = {
  label: PropTypes.string.isRequired,
  largeSize: PropTypes.bool,
  greenColor: PropTypes.bool,
}

export default Keyword
