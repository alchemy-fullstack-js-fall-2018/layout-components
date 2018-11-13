import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  render() {

    const header = new Header({
      links: ['about', 'blog', 'contact']
    });

    const section1 = new Section ({
      message: 'I am section 1.'
    })

    const section2 = new Section ({
      message: 'I am section 2.'
    })

    const footer = new Footer({
      peopleToThank: ['Mom', 'Dad', 'my agent']
    })

    return `
    ${header.render()}
    ${section1.render()}
    ${section2.render()}
    ${footer.render()}
    `;
  }
}