import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    const children = this.props.children.map(child => child.render()).join(' ');
    return `
      <section class="${styles.section}">
      <h1>'Murica</h1>
        ${children}
      </section>`;
  }
}
