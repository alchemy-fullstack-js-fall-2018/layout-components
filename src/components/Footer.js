import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    const gratitude = `Special thanks to: ${this.props.peopleToThank.join(', ')}`

    return `
        <footer class="${styles.footer}">
          <p>${gratitude}</p>
        </footer>
    `
  }
}