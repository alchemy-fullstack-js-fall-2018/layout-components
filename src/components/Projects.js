import Component from './Component';
import styles from './Projects.css';


export default class Projects extends Component {
  render() {

    const projectContent = this.props.projects.map(project => {
      return (
        `<h3>${project.name}</h3>
        <p> ${project.details} </p>`
      )
    });

    return `<section class="${styles.projectSection}">
    <h3>Projects</h3>
    <div id="projects">
    ${projectContent }
    </div>
    `;
  };
}
