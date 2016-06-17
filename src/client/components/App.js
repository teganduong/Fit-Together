import React from 'react';
import { Link } from 'react-router';
import login from './Login';

const App = () => (
  <div>
    React Init
    <Link to='/login'><button>Test Login</button></Link>

  </div>
);

export default App;
