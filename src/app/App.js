import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { FeedPage, DetailPage, PageNotFound } from 'pages/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect to="/page-not-found" />
      </Switch>
    </div>
  )
}

export default App
