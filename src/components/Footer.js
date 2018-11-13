import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {

  render() {
    const contactIcons = this.props.contactIcons.map(icon => {
      return `<i class="${icon}"></i>`;
    });

    return `
    <footer class="${styles.icons}">${contactIcons.join(' ')}</footer>
    `;
  }
}
