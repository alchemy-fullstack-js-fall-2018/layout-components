import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    const footerContent = `<h3>Stuff About Me</h3>
    <p>${this.props.footer}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique.</p>`;

    return `<footer class="${styles.footer}">
      ${footerContent}
    </footer>`;
  }
}
