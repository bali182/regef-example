import { DispatchingEditPolicy } from 'regef'
import { isRoot } from './typeUtils'

export default class MoveRootChildrenEditPolicy extends DispatchingEditPolicy {
  move({ components, delta, container }) {
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

  requestMoveFeedback({ components, delta, container }) {
    if (!isRoot(container)) {
      return
    }
    container.setState({
      moveFeedback: components.map((c) => this.toolkit.bounds(c).translate(delta)),
    })
  }

  eraseMoveFeedback({ container }) {
    if (!isRoot(container)) {
      return
    }
    container.setState({
      moveFeedback: null,
    })
  }
}
