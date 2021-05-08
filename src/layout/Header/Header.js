import React from 'react'
import { outerContainer, innerContainer } from './Header.module.scss'
import { PropTypes } from 'prop-types'

const Header = ({ SubmitDate, SubmitName, ...propTypes }) => {
  return (
    <header className={outerContainer} {...propTypes}>
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

Header.propTypes = {
  SubmitDate: PropTypes.string,
  SubmitName: PropTypes.string,
}

export default Header
