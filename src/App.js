import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
