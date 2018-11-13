import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    const sectionContent = this.props.sectionContent;

    return `
        <section class="${styles.section}">
            ${sectionContent}
        </section>`;
  }
}
