import Component from './Component';
import styles from './Projects.css';


export default class Projects extends Component {
  render() {
    const projectContent = `<h3>Projects</h3>

    <div id="projects"><h4>${this.props.project1}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique</p>
    <h4>${this.props.project2}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique</p>
    <h4>${this.props.project3}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quasi consequuntur veniam, eaque numquam sint tenetur velit in, voluptas quisquam eos! Possimus adipisci natus obcaecati inventore quaerat facilis enim similique</p></div>
    `;

    return `<section class="${styles.projectSection}">
      ${projectContent}
    </section>`;
  };
}
