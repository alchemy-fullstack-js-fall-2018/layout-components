import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  render() {

    const header = new Header({
      links: ['About', 'Portfolio', 'Blog']
    });

    const section = new Section({
      sectionTitles: ['About', 'Portfolio', 'Blog']
    });

    const footer = new Footer({
      contactIcons: ['far fa-envelope', 'fab fa-linkedin-in', 'fab fa-github']
    });

    return `
    ${header.render()}
    ${section.render()}
    ${footer.render()}
    `;
  }
}
