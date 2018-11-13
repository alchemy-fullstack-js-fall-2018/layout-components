import App from './App';

describe('App Component', () => {
  it('should be an app', () => {
    const app = new App({ message: 'I AM APP' });

    expect(app.render()).toMatchSnapshot();
  });
});