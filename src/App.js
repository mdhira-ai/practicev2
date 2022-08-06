import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage'


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
