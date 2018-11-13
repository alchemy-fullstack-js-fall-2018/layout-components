import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
  render() {
    console.log(this.props.sections);
    const sections = this.props.sections.map(section => {
      return `
      <h1 class="${styles.title}">${section.title}</h1>
      <p class="${styles.content}">${section.content}</p>

      `;
    });

    return `
    <section>
      <div class="${styles.container}">${sections.join(' ')}</div>
    </section>
    `;
  }
}
