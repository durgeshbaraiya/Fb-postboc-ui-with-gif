import React from 'react';
import './styles/main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './Components/Home/HomeScreen';

function App() {
  return (
    <div className='w-screen h-full min-h-screen bg-gray-100'>
      <div className='w-full h-full bg-gray-100'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
