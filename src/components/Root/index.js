import React from 'react'
import { connect } from 'react-redux'
import { root } from 'regef'
import RootView from './RootView'
import { setPosition, setSelection, deleteComponent } from '../../state/actions'

import Container from '../Container'
import Node from '../Node'
import RootEditPolicy from './RootEditPolicy'
import { DragFeedback, SelectionFeedback, ErrorFeedback } from './RectFeedback'

const stateToProps = ({ components, selection }) => ({
  components,
  selection,
})

const boundActions = { setPosition, setSelection, deleteComponent }

@connect(stateToProps, boundActions)
@root(RootEditPolicy)
export default class Root extends React.Component {
  constructor() {
    super()
    this.state = {
      errorFeedback: null,
      moveFeedback: null,
      selectionFeedback: null,
    }
  }
  renderChildren() {
    const { components } = this.props
    const { root: rootComponent } = this.props.components
    return rootComponent.children.map((id) => {
      const component = components[id]
      switch (component.type) {
        case 'NODE':
          return <Node id={id} key={id} />
        case 'CONTAINER':
          return <Container id={id} key={id} />
        default:
          throw new TypeError(`Root's children must be either CONTAINER or NODE, ${component.type} given.`)
      }
    })
  }
  renderErrorFeedback() {
    if (this.state.errorFeedback) {
      return this.state.errorFeedback.map(({ x, y, width, height }, key) => (<ErrorFeedback
        // eslint-disable-next-line react/no-array-index-key
        key={`${key}-err`}
        x={x}
        y={y}
        width={width}
        height={height}
      />))
    }
    return null
  }
  renderMoveFeedback() {
    if (this.state.moveFeedback) {
      return this.state.moveFeedback.map(({ x, y, width, height }, key) => (<DragFeedback
        // eslint-disable-next-line react/no-array-index-key
        key={`${key}-move`}
        x={x}
        y={y}
        width={width}
        height={height}
      />))
    }
    return null
  }
  renderSelectionFeedback() {
    if (this.state.selectionFeedback) {
      const { x, y, width, height } = this.state.selectionFeedback
      return <SelectionFeedback x={x} y={y} width={width} height={height} />
    }
    return null
  }
  render() {
    return (<RootView>
      {this.renderChildren()}
      {this.renderMoveFeedback()}
      {this.renderErrorFeedback()}
      {this.renderSelectionFeedback()}
    </RootView>)
  }
}