import React from 'react'
import { filterButton } from './FilterButton.module.scss'
import { Button } from 'components/index'
import PropTypes from 'prop-types'

const FilterButton = ({ label, type, ...restProps }) => {
  return <Button label="필터" className={filterButton} {...restProps} />
}

FilterButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default FilterButton
