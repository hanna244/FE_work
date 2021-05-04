import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from 'app/App'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// 서비스 워커 설정
if (process.env.NODE_ENV === 'production') {
  import('./serviceWorker')
    .then((serviceWorker) => serviceWorker.register)
    .catch((error) => console.error(error.message))
}
