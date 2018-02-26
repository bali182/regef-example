import { DispatchingEditPolicy } from 'regef'

export default class RootEditPolicy extends DispatchingEditPolicy {
  moveChildren({ components, delta }) {
    components.forEach((component) => {
      const { x, y } = this.toolkit.bounds(component).location()
      this.host.props.setPosition({
        id: component.props.id,
        x: Math.round(x + delta.x),
        y: Math.round(y + delta.y),
      })
    })
  }

  select({ selection }) {
    const ids = selection.map((component) => component.props.id)
    this.host.props.setSelection({ selection: ids })
  }

  delete({ selection }) {
    const ids = selection.map((component) => component.props.id)
    ids.forEach((id) => this.host.props.deleteComponent({ id }))
  }

  requestMoveChildrenFeedback({ components, delta }) {
    this.host.setState({
      moveFeedback: components.map((c) => this.toolkit.bounds(c).translate(delta)),
    })
  }

  eraseMoveChildrenFeedback() {
    this.host.setState({
      moveFeedback: null,
    })
  }

  requestSelectFeedback({ bounds }) {
    this.host.setState({ selectionFeedback: bounds })
  }

  eraseSelectFeedback() {
    this.host.setState({
      selectionFeedback: null,
    })
  }

  requestAddChildrenFeedback({ components, delta }) {
    if (components.some((c) => c.props.step)) {
      this.host.setState({
        errorFeedback: components.map((c) => this.toolkit.bounds(c).translate(delta)),
      })
    }
  }

  eraseAddChildrenFeedback() {
    this.host.setState({ errorFeedback: null })
  }

  requestEndConnectionFeedback({ source, location }) {
    const { toolkit } = this
    const parent = toolkit.parent(source)
    const bounds = toolkit.bounds(parent)

    const centerToLocation = bounds.center().lineSegmentTo(location)
    const borders = [bounds.top(), bounds.right(), bounds.bottom(), bounds.left()]

    const sourcePoint = borders
      .map((border) => border.intersection(centerToLocation))
      .find((intersection) => intersection)

    if (sourcePoint) {
      const connectionFeedback = sourcePoint.lineSegmentTo(location)
      this.host.setState({ connectionFeedback })
    }
  }

  eraseEndConnectionFeedback() {
    this.host.setState({ connectionFeedback: null })
  }
}
