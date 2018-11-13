import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Image from './Image';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['home', 'about', 'projects', 'contact']
    });
    const section = new Section({
      children: [
        new Image({
          images: ['dummy2.jpg', 'dummy1.jpg', 'dummy3.png']
        })
      ]
    });
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
