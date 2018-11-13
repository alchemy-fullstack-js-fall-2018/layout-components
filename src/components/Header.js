import Component from './Component';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    const links = this.props.links.map(link => {
      return `<a href="/${link}">${link}</a>`;
    });

    return  `
    <header class=${styles.header}>

      <nav class=${styles.desktopNav}>
        ${links.join(' ')}
      </nav>

      <nav class=${styles.mobileNav}>
        <label for="hamburger"></label>
        <input type="checkbox" id="hamburger"/>
        <span class=${styles.hamburger}></span>
        <div class=${styles.mobileMenuContent}>
          ${links.join(' ')}
        </div>
      </nav>

    </header>
    `;
  }
}
