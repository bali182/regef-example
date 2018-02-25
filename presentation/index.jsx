import React from 'react'
import { render } from 'react-dom'
import Presentation from './Presentation'
import 'codemirror/lib/codemirror.css'
import './assets/global.css'

render(
  <Presentation />,
  document.getElementById('app'),
)
