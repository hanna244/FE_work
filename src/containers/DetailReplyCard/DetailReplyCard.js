import React from 'react'
import { CardContainer } from 'components'
import {
  detailReplyCard,
  reply,
  date,
  userName,
} from './DetailReplyCard.module.scss'

const DetailReplyCard = ({ question, ...propTypes }) => {
  const {
    contents,
    created_at,
    user: { name },
  } = question

  return (
    <CardContainer composeClass={detailReplyCard}>
      <span className={userName}>{name}</span>
      <p className={reply} aria-label={contents}>
        {contents}
      </p>
      <time className={date} dateTime={created_at}>
        {created_at.slice(0, 10)}
      </time>
    </CardContainer>
  )
}

DetailReplyCard.defaultProps = {
  question: {
    id: 75,
    user_id: 82,
    parent: 4,
    contents:
      'T대학 병원에 입원하였습니다. 갑자기 각혈을 하여서." 하고 동정하는 말을 하였소. 했더니, 이 말 보시오. 그는 침음을 깨뜨리고 고개를 번쩍 들었더니 해가 떠오릅니다그려. 어떻게 붉고 둥글고 씩씩한지. `저 해 보오.\' 하고 나는 간호부를 향하여,"이야기 아니.',
    created_at: '2019-11-11T06:01:26.000000Z',
    updated_at: '2019-11-11T06:01:26.000000Z',
    user: {
      id: 82,
      name: 'Kennith Waelchi',
      email: 'hbrown@example.com',
      email_verified_at: '2019-11-11T06:00:46.000000Z',
      created_at: '2019-11-11T06:00:46.000000Z',
      updated_at: '2019-11-11T06:00:46.000000Z',
    },
  },
}

export default DetailReplyCard
