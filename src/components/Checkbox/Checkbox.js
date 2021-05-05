import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { checkbox, checked as checkedClass } from './Checkbox.module.scss'

const Checkbox = ({
  handleClick,
  checked,
  composeClass,
  label,
  ...restProps
}) => {
  console.log(checked)
  return (
    <label
      className={classNames(
        checkbox,
        checked ? checkedClass : null,
        composeClass
      )}
    >
      <input type="checkbox" {...restProps} />
      {label}
    </label>
  )
}

Checkbox.defaultProps = {
  label: '체크박스',
  checked: false,
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  /** 체크박스 활성화/비활성화 상태를 설정할 수 있다. */
  checked: PropTypes.bool,
}

export default Checkbox
