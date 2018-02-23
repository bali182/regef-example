import React from 'react'
import { Deck, Slide, Heading, Text, Fill, Link, List, ListItem, Appear, Fit } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import Demo1 from './demos/Demo1'

const monkeyImg = require('./assets/monkey.png')
const reactImg = require('./assets/react.png')
const paintImg = require('./assets/paint.jpg')
const constructionImg = require('./assets/construction.jpg')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#666',
  },
  {
    primary: 'sans-serif',
    secondary: 'sans-serif',
  },
)

// eslint-disable-next-line react/prefer-stateless-function
class Presentation extends React.Component {
  render() {
    return (<Deck transition={['slide']} theme={theme}>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          React
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Flowcharts
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Balázs Édes
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold caps>
          Workday Studio Team
        </Text>
      </Slide>
      <Slide bgColor="primary">
        <Demo1 />
      </Slide>
      <Slide bgColor="primary" bgImage={monkeyImg.replace('/', '')} bgDarken={0.5}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Libraries
        </Heading>
        <Appear>
          <Fit>
            <Heading margin="30px 0px 0px" size={1} fit caps lineHeight={1} textColor="primary">
              Do you really
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              want that banana?
            </Heading>
          </Fit>
        </Appear>
      </Slide>
      <Slide bgColor="primary">
        <Text fit caps size={1}>Custom APIs</Text>
        <Text fit bold caps textColor="tertiary" size={1}>Custom DOM handling</Text>
        <Text fit caps size={1}>App inside App</Text>
      </Slide>
      <Slide bgColor="primary" bgImage={reactImg.replace('/', '')} >
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Why not just
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          React
        </Heading>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          components?
        </Heading>
      </Slide>
      <Slide bgColor="primary" >
        <Text margin="10px 0px" textColor="tertiary" size={1} caps fit bold>
          regef
        </Text>
        <Text margin="20px 0px" size={1} fit>
          <Link href="https://github.com/bali182/regef" textColor="secondary" style={{ textDecoration: 'underline' }}>
            https://github.com/bali182/regef
          </Link>
        </Text>
      </Slide>
      <Slide bgColor="primary" bgImage={paintImg.replace('/', '')} bgDarken={0.7}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Render...
        </Heading>
        <Heading margin="30px 0px 0px" size={1} fit caps lineHeight={1} textColor="primary">
          ...whatever you want
        </Heading>
      </Slide>
      <Slide bgColor="primary" bgImage={constructionImg.replace('/', '')} bgDarken={0.7}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Model...
        </Heading>
        <Heading margin="30px 0px 0px" size={1} fit caps lineHeight={1} textColor="primary">
          ...however you want
        </Heading>
      </Slide>
    </Deck>)
  }
}

export default Presentation
