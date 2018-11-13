import App from './components/App';

const app = new App({
  message: 'hi there this is working'
});

app.attach(document.getElementById('header'));
app.attach(document.getElementById('footer'));
