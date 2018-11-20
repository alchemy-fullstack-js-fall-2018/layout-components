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
      footerContent: 'I like pizza and sushi; however, I like coding more.'
    })

    const projectSection = new Projects({
      projects: [
        {
          name: 'Dog match',
          details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos!'
        },
        {
          name: 'Salmon Cookies',
          details: 'amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos!'
        },
        {
          name: 'Day planner',
          details: 'veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique'
        }
      ]
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
