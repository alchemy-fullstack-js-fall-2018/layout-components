import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {

  render() {
    const contactIcons = this.props.contactIcons.map(icon => {
      return `
      <a id="${styles[icon.id]}">
        <i class="${icon.class}"></i>
      </a>
      `;
    });

    return `
    <footer>
      <h1>Contact</h1>
      <div class="${styles.icons}">
        ${contactIcons.join(' ')}
      </div>
    </footer>
    `;
  }
}
