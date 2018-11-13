import Component from './Component';
import styles from './Image.css';

export default class Image extends Component {
  render() {
    const images = this.props.images.map(img => {
      return `<img src="./src/assets/${img}"></img>`;
    }).join(' ');

    return `
        <div class="${styles.image}">
          ${images}
        </div>
       `;
  }
}
