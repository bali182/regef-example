import { DispatchingEditPolicy } from 'regef'
import { isRoot } from './typeUtils'

export default class MoveRootChildrenEditPolicy extends DispatchingEditPolicy {
  moveChildren({ components, delta, container }) {
    if (!isRoot(container)) {
      return
    }
    components.forEach((component) => {
      const { x, y } = this.toolkit.bounds(component).location()
      container.props.setPosition({
        id: component.props.id,
        x: Math.round(x + delta.x),
        y: Math.round(y + delta.y),
      })
    })
  }

  requestMoveChildrenFeedback({ components, delta, container }) {
    if (!isRoot(container)) {
      return
    }
    container.setState({
      moveFeedback: components.map((c) => this.toolkit.bounds(c).translate(delta)),
    })
  }

  eraseMoveChildrenFeedback({ container }) {
    if (!isRoot(container)) {
      return
    }
    container.setState({
      moveFeedback: null,
    })
  }
}
