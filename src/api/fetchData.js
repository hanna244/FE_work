import axios from 'axios'

// 사용자 정의 인스턴스 기본 설정
export const commentoApi = axios.create({
  baseURL: 'https://problem.comento.kr',
  headers: {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
