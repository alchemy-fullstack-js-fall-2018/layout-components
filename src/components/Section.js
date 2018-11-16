import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    return `
        <section class="${styles.section}">
          <p class="${styles.p}">${this.props.message}</p>
        </section>
    `
  }
}