import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge 
                    firstName="Eli" 
                    lastName="Martin" 
                    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                    jobTitle="Engineer" 
                    twitter="mpampols"/>, container);