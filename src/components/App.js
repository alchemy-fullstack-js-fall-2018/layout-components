import Component from './Component';
import Header from './Header';
import Section from './Section';

export default class App extends Component {
  render() {

    const header = new Header({
      links: ['About', 'Portfolio', '{M:L}', 'Blog', 'Contact']
    });

    const section = new Section({
      sectionTitle: ['About', 'Portfolio', 'Blog', 'Contact']
    });

    return `
    ${header.render()}
    ${section.render()}
    `;
  }
}
