import React from 'react'
import { connect } from 'react-redux'
import { node } from 'regef'
import autobind from 'autobind-decorator'

import NodeView from './NodeView'
import Port from '../Port'

const stateToProps = ({ components, selection }, { id }) => ({
  node: components[id],
  selected: selection.indexOf(id) >= 0,
})

@connect(stateToProps)
@node()
export default class Node extends React.Component {
  constructor() {
    super()
    this.state = {
      portVisible: false,
    }
  }

  @autobind onMouseEnter() {
    this.setState({ portVisible: true })
  }

  @autobind onMouseLeave() {
    this.setState({ portVisible: false })
  }

  render() {
    const { id, selected, node: { x, y } } = this.props
    return (<NodeView
      x={x}
      y={y}
      id={id}
      selected={selected}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}
    >
      <Port visible={this.state.portVisible} />
    </NodeView>)
  }
}
