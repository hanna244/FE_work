import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from 'components'
import {
  detailQuestionCard,
  contents as contentsClass,
  contentHead,
  contentBody,
  date,
} from './DetailQuestionCard.module.scss'

const DetailQuestionCard = ({ question, ...propTypes }) => {
  const {
    id,
    title,
    contents,
    category_id,
    user_id,
    created_at,
    updated_at,
    category,
  } = question

  return (
    <CardContainer composeClass={detailQuestionCard}>
      <dl className={contentsClass}>
        <dt className={contentHead} aria-label={title}>
          {title}
        </dt>
        <dd className={contentBody} aria-label={contents}>
          {contents}
        </dd>
      </dl>
      <time className={date} dateTime={created_at}>
        {created_at.slice(0, 10)}
      </time>
    </CardContainer>
  )
}

DetailQuestionCard.defaultProps = {
  question: {
    id: 4,
    title:
      'Est saepe et non non quos nam suscipit iste aperiam quaerat ut cupiditate iure minus adipisci perspiciatis aspernatur accusamus voluptatibus ac',
    contents:
      'P선생에게 맡기고 가니 아무 때에나 필요하거든 찾아 써라. 절약해 쓰면 네가 일생이라도 먹고 살 만하니 돈 걱정은 말고 부디 몸조심해서 공부를 잘해라. 네가 호흡기가 약하니까 학교를 졸업하더라도 교사 노릇할 생각은 말고 혼인하기까지에는 너 혼자서 네 마음대로 공부를 하려무나. 네가 그렇게 해 주어야 나',
    category_id: 3,
    user_id: 71,
    created_at: '2019-11-11T06:00:52.000000Z',
    updated_at: '2019-11-11T06:00:52.000000Z',
    category: {
      id: 3,
      name: 'coconut',
      created_at: '2019-11-11T06:00:49.000000Z',
      updated_at: '2019-11-11T06:00:49.000000Z',
    },
  },
}

DetailQuestionCard.propTypes = {}

export default DetailQuestionCard
