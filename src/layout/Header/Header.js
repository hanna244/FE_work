import React from 'react'
import PropTypes from 'prop-types'
import { outerContainer, innerContainer } from './Header.module.scss'

const Header = ({ SubmitDate, SubmitName, ...propTypes }) => {
  return (
    <header className={outerContainer}>
      <div className={innerContainer}>
        [{SubmitDate}] {SubmitName}
      </div>
    </header>
  )
}

Header.defaultProps = {
  SubmitDate: '제출일',
  SubmitName: '이름',
}

Header.propTypes = {}

export default Header
