import React from 'react'
import { connect } from 'react-redux'
import { node } from 'regef'
import autobind from 'autobind-decorator'

import ContainerView from './ContainerView'
import Port from '../Port'
import Step from '../Step'
import LineFeedback from './LineFeedback'

const stateToProps = ({ components, selection }, { id }) => ({
  container: components[id],
  selected: selection.indexOf(id) >= 0,
  components,
})

@connect(stateToProps)
@node()
export default class Container extends React.Component {
  constructor() {
    super()
    this.state = {
      insertionFeedback: null,
      portVisible: false,
    }
  }

  @autobind onMouseEnter() {
    this.setState({ portVisible: true })
  }

  @autobind onMouseLeave() {
    this.setState({ portVisible: false })
  }

  renderChildren() {
    const { components, container: { children } } = this.props
    const { insertionFeedback } = this.state
    const childComponents = children.map((id) => {
      const { type } = components[id]
      switch (type) {
        case 'STEP': {
          return <Step id={id} key={id} />
        }
        default:
          throw new TypeError(`Expected child STEP got "${type}" instead`)
      }
    })
    if (insertionFeedback !== null) {
      return [
        ...childComponents.slice(0, insertionFeedback),
        <LineFeedback key="feedback" />,
        ...childComponents.slice(insertionFeedback),
      ]
    }
    return childComponents
  }

  render() {
    const { id, selected } = this.props
    const { x, y } = this.props.container
    return (<ContainerView
      x={x}
      y={y}
      id={id}
      selected={selected}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}
    >
      {this.renderChildren()}
      <Port visible={this.state.portVisible} />
    </ContainerView>)
  }
}
