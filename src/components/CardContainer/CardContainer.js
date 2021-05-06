import classNames from 'classnames'
import React from 'react'
import { cardContainer } from './CardContainer.module.scss'

const CardContainer = ({ composeClass, ...propTypes }) => {
  return (
    <article
      className={classNames(cardContainer, composeClass)}
      {...propTypes}
    ></article>
  )
}

export default CardContainer
