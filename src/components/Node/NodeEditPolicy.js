import { DispatchingEditPolicy } from 'regef'

export default class NodeEditPolicy extends DispatchingEditPolicy {
  endConnection({ source: srcPort }) {
    const { toolkit, host: target } = this
    const source = toolkit.parent(srcPort)
    toolkit.root().props.addConnection({
      source: source.props.id,
      target: target.props.id,
    })
  }
  requestAddChildrenFeedback({ delta, components }) {
    const { toolkit } = this
    const bounds = components.map((moved) => toolkit.bounds(moved).translate(delta))
    toolkit.root().setState({ errorFeedback: bounds })
  }
  eraseAddChildrenFeedback() {
    this.toolkit.root().setState({ errorFeedback: null })
  }
  requestEndConnectionFeedback({ source }) {
    const { toolkit } = this
    const srcBounds = toolkit.bounds(toolkit.parent(source))
    const tgtBounds = toolkit.bounds(this.host)

    const centerToLocation = srcBounds.center().lineSegmentTo(tgtBounds.center())
    const srcBorders = [srcBounds.top(), srcBounds.right(), srcBounds.bottom(), srcBounds.left()]
    const tgtBorders = [tgtBounds.top(), tgtBounds.right(), tgtBounds.bottom(), tgtBounds.left()]

    const sourcePoint = srcBorders
      .map((border) => border.intersection(centerToLocation))
      .find((intersection) => intersection)

    const targetPoint = tgtBorders
      .map((border) => border.intersection(centerToLocation))
      .find((intersection) => intersection)

    if (sourcePoint && targetPoint) {
      const connectionFeedback = sourcePoint.lineSegmentTo(targetPoint)
      toolkit.root().setState({ connectionFeedback })
    }
  }
  eraseEndConnectionFeedback() {
    this.toolkit.root().setState({ connectionFeedback: null })
  }
}
