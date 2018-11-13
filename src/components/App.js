import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['banh mi', 'deli', 'subs']
    });

    const topSection = new Section({
      content: 'Hey I\'m a section'
    });

    const footer = new Footer({
      text:  '&copy; 2018 Alex Rankin'
    });

    return `
    ${header.render()}
    <h1>${this.props.message}</h1>
    ${topSection.render()}
    ${footer.render()}
    `;
  }
}
