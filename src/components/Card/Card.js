import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { cardHeader, cardDescription } from './Card.module.scss'

const Card = ({
  headingLevel,
  header,
  description,
  headerComposeClass,
  descriptionComposeClass,
  ...propTypes
}) => {
  let Tag = headingLevel

  return (
    <Fragment>
      <Tag
        className={classNames(cardHeader, headerComposeClass)}
        {...propTypes}
      >
        {header}
      </Tag>
      <p className={classNames(cardDescription, descriptionComposeClass)}>
        {description}
      </p>
    </Fragment>
  )
}

Card.defaultProps = {
  headingLevel: 'h2',
  header: '제목을 입력하세요',
  description: '본문을 입력하세요',
}

Card.propTypes = {
  headingLevel: PropTypes.string.isRequired,
  header: PropTypes.string,
  description: PropTypes.string,
  headerComposeClass: PropTypes.string,
  descriptionComposeClass: PropTypes.string,
}

export default Card
