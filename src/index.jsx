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

const store = createStore()
const engine = createEngine(store)

render(
  <Provider store={store}>
    <div style={rootContainerStyle}>
      <Diagram engine={engine}>
        <Root />
      </Diagram>
    </div>
  </Provider>,
  document.getElementById('app'),
)
