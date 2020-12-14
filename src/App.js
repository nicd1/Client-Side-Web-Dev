import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home.js';
import ListPage from './pages/lists.js';
import LoginPage from './pages/login.js';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/lists" component={ListPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
}