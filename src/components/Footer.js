import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    const text = this.props.text;

    return `
        <footer class="${styles.footer}">
            ${text}
        </footer>
    `;
  }
}
