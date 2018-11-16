import Component from './Component';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    const links = this.props.links.map(link => {
      return `<a class="${styles.nav}"href="/${link}">${link}</a>`;
    });

    return `
      <header class="${styles.header}">
        <h2 id="${styles.logo}">Mack BG<h2>
        <nav class="${styles.nav}">
          ${links.join(' ')}
        </nav>
      </header>`;
  }
}
