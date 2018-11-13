import Component from './Component';
import styles from './Footer.css';

export default class Footer extends Component {
    render() {
        const author = `<p>Created by ${this.props.author}, &copy 2018</p>`;

        return `<footer class="${styles.footer}">${author}</footer>`;
    }
}
