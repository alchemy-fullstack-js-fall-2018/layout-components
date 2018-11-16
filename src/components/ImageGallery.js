import Component from './Component';
import styles from './ImageGallery.css';

export default class ImageGallery extends Component {
  render() {
    const images = this.props.images.map(({ image }) => {
      return `<img src="${image}">`;
    });

    return `
      <section>
        <div class="${styles.container}">
          ${images.join(' ')}
        </div>
      </section>
    `;
  }
}
