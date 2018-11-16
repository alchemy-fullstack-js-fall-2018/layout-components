import Component from '../Component/Component';

import styles from './Section.css';
export default class Section extends Component {

  render() {


    const teamAbout = this.props.teams.map(team => {
      return `
        <div class="${styles.tile} ${styles[`_${team.name}`]}">
          <h2>${team.name}</h2>
          <p>${team.story}</p>
        </div>
      `;
    });

    return `
      <section id="${styles.container}">
        ${teamAbout.join(' ')}
      </section>
    `;
  }


}
