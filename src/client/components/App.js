import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => (
  <div>
    React Init
      <Link to='/postdoc'>Postdoc</Link>
      {children}
  </div>
);


export default App;
