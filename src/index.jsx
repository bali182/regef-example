import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Diagram } from 'regef'

import createStore from './state'
import createEngine from './diagram'
import Root from './components/Root'

const rootContainerStyle = {
  margin: '10vh',
}

render(
  <Provider store={createStore()}>
    <div style={rootContainerStyle}>
      <Diagram engine={createEngine()}>
        <Root />
      </Diagram>
    </div>
  </Provider>,
  document.getElementById('app'),
)
