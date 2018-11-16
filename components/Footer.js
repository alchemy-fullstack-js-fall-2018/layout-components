import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    const content = this.props.content;

    return `
      <footer class="${styles.footer}">
          ${content}
      </footer>`;
  }
}
