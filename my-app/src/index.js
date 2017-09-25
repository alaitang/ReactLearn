import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

var elem = React.createElement(App, {user:{Title:"SWE",Name:"alai"}});
var clockElem = React.createElement(Clock, {date:new Date()});

ReactDOM.render(<Clock />, document.getElementById('root'));
registerServiceWorker();
