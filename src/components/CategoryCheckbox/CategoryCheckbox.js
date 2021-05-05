import React from 'react'
import PropTypes from 'prop-types'
import { categoryCheckbox, checkClass } from './CategoryCheckbox.module.scss'
import { CheckBox } from 'components'

const CategoryCheckbox = ({ checked, ...propTypes }) => {
  return (
    <CheckBox
      checked={checked}
      className={checkClass}
      composeClass={categoryCheckbox}
      {...propTypes}
    ></CheckBox>
  )
}

CategoryCheckbox.defaultProps = {
  checked: false,
}

CategoryCheckbox.propTypes = {
  checked: PropTypes.bool,
}

export default CategoryCheckbox
