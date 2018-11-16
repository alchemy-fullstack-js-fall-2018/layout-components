import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

export default class App extends Component {
    render() {
        const header = new Header({
            links: ['about', 'blog', 'contact']
        });

        const section1 = new Section({
            title: 'Hello World',
            paragraphs: ['It\'s good to see you today.', 'Is anyone out there?']
        });

        const section2 = new Section({
            title: 'I Like Coding',
            paragraphs: ['It\'s such a relief to be writing JavaScript again.', 'After CSS, it feels like coming home.']
        });

        const footer = new Footer({
            author: 'Sarah Flynn'
        });

        return `
            ${header.render()}
            ${section1.render()}
            ${section2.render()}
            ${footer.render()}`;
    }
}
