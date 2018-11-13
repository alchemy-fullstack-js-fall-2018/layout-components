import App from './App';

describe('App Component', () => {
  it('should be an app', () => {

    const app = new App();

    expect(app.render()).toMatchSnapshot();
  });
});
