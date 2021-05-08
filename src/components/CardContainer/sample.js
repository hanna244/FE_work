import React from 'react'
import PropTypes from 'prop-types'
import { sample } from './sample.module.scss'

const Sample = ({ ...propTypes }) => {
  return <div className={sample}></div>
}

Sample.defaultProps = {}

Sample.propTypes = {}

export default Sample
