import React from 'react';
import {ThemeProvider} from './ThemeContext';
import FunctionContextComponent from './FunctionContextComponent';

export default function App() {
  return (
    <div>
      <h1>useContext practice</h1>

      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>

    </div>
  );
}
