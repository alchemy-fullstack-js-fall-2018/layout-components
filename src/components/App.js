import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Image from './Image';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['banh mi', 'deli', 'subs']
    });

    const topSection = new Section({
      children: ['liver.jpg', '19.jpg', 'reuben.jpg'].map(img => new Image({ content: img }))
    });

    const midSection = new Section({
      children: ['liver.jpg', '19.jpg', 'reuben.jpg'].map(
        img => new Image({ content: img }))
    });

    const footer = new Footer({
      text: '&copy; 2018 Alex Rankin'
    });

    return `
    ${header.render()}
    <h1>${this.props.message}</h1>
    ${topSection.render()}
    ${midSection.render()}
    ${footer.render()}
    `;
  }
}
