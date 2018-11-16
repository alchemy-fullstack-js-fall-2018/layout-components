import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return `
      <footer class="${styles.footer}">
        <a>&copy;Mack BG</a>
      </footer>
    `;
  }

}
