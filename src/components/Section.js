import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
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
