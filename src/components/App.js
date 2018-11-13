import Component from './Component';
import Header from './Header';
import styles from './App.css';
import Projects from './Projects';
import Services from './Services';
import Footer from './Footer';

export default class App extends Component {

  render() {
    const header = new Header({
      links: ['about', 'contact', 'projects', 'services']
    })

    const footer = new Footer({
      footerContent: 'Footer area'
    })

    const projectSection = new Projects({
      project1: 'Dog match',
      project2: 'Salmon Cookies',
      project3: 'Day planner'
    })

    const services = new Services({
      service: ['Design', 'Programming', 'Freelancing']
    })

    return `
      ${header.render()}
      <h1 class="${styles.main}">${this.props.message}</h1>
      ${projectSection.render()}
      ${services.render()}
      ${footer.render()}
      `;
  }
}
