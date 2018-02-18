import React from 'react'
import { connect } from 'react-redux'
import { node } from 'regef'

import ContainerView from './ContainerView'
import Step from '../Step'
import ContainerEditPolicy from './ContainerEditPolicy'
import { setChildren, addChildren } from '../../state/actions'
import LineFeedback from './LineFeedback'

const stateToProps = ({ components, selection }, { id }) => ({
  container: components[id],
  selected: selection.indexOf(id) >= 0,
  components,
})

@connect(stateToProps, { setChildren, addChildren })
@node(ContainerEditPolicy)
export default class Container extends React.Component {
  constructor() {
    super()
    this.state = {
      insertionFeedback: null,
    }
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
    return (<ContainerView x={x} y={y} id={id} selected={selected}>
      {this.renderChildren()}
    </ContainerView>)
  }
}
