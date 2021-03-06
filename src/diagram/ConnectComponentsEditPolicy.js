import { DispatchingEditPolicy } from 'regef'
import { isContainer, isNode, isRoot, isPort, isStep } from './typeUtils'

export default class ConnectComponentsEditPolicy extends DispatchingEditPolicy {
  endConnection({ source: port, target: rawTarget }) {
    const { toolkit } = this
    if (!isContainer(rawTarget) && !isNode(rawTarget) && !isPort(rawTarget) && !isStep(rawTarget)) {
      return
    }
    const target = isNode(rawTarget) || isContainer(rawTarget)
      ? rawTarget
      : toolkit.parent(rawTarget)
    const source = toolkit.parent(port)
    this.dependencies.addConnection({
      source: source.props.id,
      target: target.props.id,
    })
  }

  requestEndConnectionFeedback(intent) {
    const { source, target, location } = intent
    if (isRoot(target)) {
      this.toolkit.root().setState({
        connectionFeedback: this.connectionWithLocation(source, location),
      })
    } else if (isContainer(target) || isNode(target)) {
      this.toolkit.root().setState({
        connectionFeedback: this.connectionWithTarget(source, target),
      })
    } else if (isPort(target) || isStep(target)) {
      const parent = this.toolkit.parent(target)
      this.toolkit.root().setState({
        connectionFeedback: this.connectionWithTarget(source, parent),
      })
    }
  }

  eraseEndConnectionFeedback() {
    this.toolkit.root().setState({ connectionFeedback: null })
  }

  connectionWithTarget(source, target) {
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

  connectionWithLocation(source, location) {
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
