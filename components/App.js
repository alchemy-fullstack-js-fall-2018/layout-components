import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['about', 'blog', 'contact']
    });

    const footer = new Footer({
      content: 'foooooteeerrrrr'
    });

    const section = new Section({
      sectionContent: 'section'
    });

    return `
      ${header.render()}
      <h1>${this.props.message}</h1>

      ${section.render()}

      ${footer.render()}
    `;
  }
}

