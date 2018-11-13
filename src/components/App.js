import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['banh mi', 'deli', 'subs']
    });
    const footer = new Footer();

    return `
    ${header.render()}
    <h1>${this.props.message}</h1>
    `;
  }
}

// ${footer.render()}