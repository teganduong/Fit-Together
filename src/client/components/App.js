import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;