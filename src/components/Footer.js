import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    const footerContent = `${this.props.footerContent}`;

    return `<footer class="${styles.footer}">
    <h3>Stuff About Me</h3>
    ${footerContent}
    </footer>`;
  }
}
