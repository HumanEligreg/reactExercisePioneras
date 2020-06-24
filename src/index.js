import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
