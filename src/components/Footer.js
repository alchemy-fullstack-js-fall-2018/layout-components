import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    const links = this.props.links.map(link => {
      return `<a href="/${link}">${link}</a>`;
    });

    return `
      <footer class="${styles.footer}">
        <nav>
          ${links.join(' ')}
        </nav>
      </footer>`;
  }
}
