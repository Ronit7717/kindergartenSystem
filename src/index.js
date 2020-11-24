import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Sign } from './components/Sign/Sign';
import { Crew } from './components/Crew/Crew';
import { NewStaff } from './components/NewStaff/NewStaff';
import { Presence } from './components/Presence/Presence';
import { AllPresence } from './components/AllPresence/AllPresence';
import { PrincipleBar } from './PrincipleBar/PrincipleBar';
import { TeacherBar } from './TeacherBar/TeacherBar';




ReactDOM.render(
  <PrincipleBar/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
