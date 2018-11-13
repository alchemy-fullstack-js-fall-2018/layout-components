import Component from './Component'
import Header from './Header'
import Footer from './Footer'
import Section from './Section'

export default class App extends Component {

  render() {

    const header = new Header();
    const footer = new Footer();
    const section = new Section();

    return `
      ${header.render()}
      ${section.render()}
      ${footer.render()}
    `

  }


}
