import App from './components/App';

const app = new App({ message: 'I AM APP' });

app.attach(document.getElementById('root'));