import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['home', 'about', 'projects', 'contact']
    });
    const section = new Section({});
    const footer = new Footer({
      links: ['home', 'about', 'projects', 'contact']
    });

    return `
    ${header.render()}
    ${section.render()}
    ${footer.render()}
    `;
  }
}
