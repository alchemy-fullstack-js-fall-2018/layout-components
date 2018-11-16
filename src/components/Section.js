import Component from './Component';
import styles from './Section.css';

export default class Section extends Component {
    render() {
        const title = `<h2>${this.props.title}</h2>`;
        const paragraphs = this.props.paragraphs.map(paragraph => {
            return `<p>${paragraph}</p>`;
        });

        return `
            <section class="${styles.section}">
                ${title}
                ${paragraphs.join(' ')}
            </section>`;
    }
}
