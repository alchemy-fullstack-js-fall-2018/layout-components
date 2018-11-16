import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import ImageGallery from './ImageGallery';
import images from '../data/data';
import styles from './App.css';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['About', 'Fun Facts', 'Dog Photos']
    });



    const imageGallery = new ImageGallery({
      images: images
    });

    const section = new Section({
      children: [imageGallery]
    });

    console.log(section);

    const footer = new Footer();

    return `
    <main class="${styles.main}">
    ${header.render()}
    ${section.render()}
    ${footer.render()}
    </main>
    `;
  }
}
