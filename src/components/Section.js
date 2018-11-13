import Component from './Component';
import styles from './Header.css';

export default class Section extends Component {
  render() {
    const links = this.props.links.map(link => {
      return `<a href="/${link}">${link}</a>`;
    });

    return `
      <section class="${styles.section}">
        <nav>
          ${links.join(' ')}
        </nav>
      </section>`;
  }
}
