import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from 'components'
import getPublicAssets from '../../utils/getPublicAssets'
import {
  commercialCard,
  loadingContainer,
  loadingImg,
  commercialSponsor,
  contents as contentsClass,
  contentItem,
  contentHead,
  contentBody,
} from './CommercialCard.module.scss'

const CommercialCard = ({ commercialData, ...propTypes }) => {
  const {
    id,
    title,
    contents,
    img: pathImg,
    created_at,
    updated_at,
  } = commercialData

  return (
    <CardContainer composeClass={commercialCard}>
      <p className={commercialSponsor}>sponsored</p>
      <a className={contentsClass} href="/">
        <figure className={loadingContainer}>
          <img
            className={loadingImg}
            src={getPublicAssets('spinner.gif')}
            alt="이미지를 불러오는 중입니다."
          />
        </figure>
        <dl className={contentItem}>
          <dt className={contentHead} aria-label={title}>
            {title}
          </dt>
          <dd className={contentBody} aria-label={contents}>
            {contents}
          </dd>
        </dl>
      </a>
    </CardContainer>
  )
}

CommercialCard.defaultProps = {
  commercialData: {
    id: 91,
    title:
      'Voluptates aut magnam occaecati enim molestiae quis et voluptatem architecto dolorem magn',
    contents:
      'Y박사는, "감기가 기관지염이 되었습니다. 좀 쉬시면 괜찮으시겠습니다. 요새 환절에 조심 아니 하시면 병이 중해지십니다. 네, 무얼 염려하실 것은 없지마는 그래도 지금 잘 조리를 하셔야지요. 글쎄, 이렇게 해 보시지요." .',
    img: 'test1.jpg',
    created_at: '2019-11-11T06:00:49.000000Z',
    updated_at: '2019-11-11T06:00:49.000000Z',
  },
}

CommercialCard.propTypes = {}

export default CommercialCard
