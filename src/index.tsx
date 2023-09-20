import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import { Breadcrumb } from './components/Breadcrumb';
import { Sidebar } from './components/SideBar';
import { Accordion } from './components/Accordion';

ReactDOM.render(
  <React.StrictMode>
    <Button />
    <Breadcrumb/>
    <Sidebar/>
    <Accordion/>
  </React.StrictMode>,
  document.getElementById('root')
);
