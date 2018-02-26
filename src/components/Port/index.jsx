import React from 'react'
import { port } from 'regef'

import PortView from './PortView'

@port()
export default class Port extends React.Component {
  render() {
    const { visible } = this.props
    return (<PortView visible={visible} />)
  }
}
