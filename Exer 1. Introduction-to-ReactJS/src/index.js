import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerender = (app) => {
    ReactDOM.render(App(), document.getElementById('root'))
};

rerender(App());
export default rerender;