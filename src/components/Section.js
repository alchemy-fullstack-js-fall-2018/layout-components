import Component from './Component';

export default class Section extends Component {

  render() {

    const team = {
      name: 'Raiders',
      story: 'They are doing really terribly. I blame Gruden.'
    };

    return `
      <section>
        <h2>${team.name}</h2>
        <p>${team.story}</p>
      </section>
    `;
  }


}
