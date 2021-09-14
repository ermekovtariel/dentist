import React from 'react';
import './App.css';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(false);
  return <div className='App'>{routes}</div>;
}

export default App;
