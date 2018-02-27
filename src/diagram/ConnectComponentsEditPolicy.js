import { DispatchingEditPolicy } from 'regef'
import { isContainer, isNode, isRoot } from './typeUtils'

export default class ConnectComponentsEditPolicy extends DispatchingEditPolicy {
  endConnection({ source: port, target }) {
    const { toolkit } = this
    if (!isContainer(target) && !isNode(target)) {
      return
    }
    const source = toolkit.parent(port)
    toolkit.root().props.addConnection({
      source: source.props.id,
      target: target.props.id,
    })
  }

  requestEndConnectionFeedback(intent) {
    const { target } = intent
    if (isRoot(target)) {
      this.toolkit.root().setState({ connectionFeedback: this.connectionWithLocation(intent) })
    } else if (isContainer(target) || isNode(target)) {
      this.toolkit.root().setState({ connectionFeedback: this.connectionWithTarget(intent) })
    }
  }

  eraseEndConnectionFeedback() {
    this.toolkit.root().setState({ connectionFeedback: null })
  }

  connectionWithTarget({ source, target }) {
    const { toolkit } = this
    const srcBounds = toolkit.bounds(toolkit.parent(source))
    const tgtBounds = toolkit.bounds(target)

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
      return sourcePoint.lineSegmentTo(targetPoint)
    }
    return null
  }

  connectionWithLocation({ source, location }) {
    const { toolkit } = this
    const parent = toolkit.parent(source)
    const bounds = toolkit.bounds(parent)

    const centerToLocation = bounds.center().lineSegmentTo(location)
    const borders = [bounds.top(), bounds.right(), bounds.bottom(), bounds.left()]

    const sourcePoint = borders
      .map((border) => border.intersection(centerToLocation))
      .find((intersection) => intersection)

    if (sourcePoint) {
      return sourcePoint.lineSegmentTo(location)
    }
    return null
  }
}
