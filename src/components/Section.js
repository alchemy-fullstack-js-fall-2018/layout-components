import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    return `
      <section class="${styles.section}">
        <h1>DURR HURR 'MURICA.</h1>
      </section>`;
  }
}
