import App from './components/App';

const app = new App({
  message: 'I am a component'
});

app.attach(document.getElementById('root'));
