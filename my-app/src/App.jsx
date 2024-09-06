// import React from 'react';
// //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import VerticalNavbar from './component/VerticalNavbar';


// function App() {
//   return (
//     <div style={{ backgroundColor: '#34568B', height: '100vh' }}> {/* Set background color here */}
//     <VerticalNavbar />
//   </div>
    
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalNavbar from './component/VerticalNavbar';
import ExtractData from './component/ExtractData';
import ExtractSchema from './component/ExtractSchema';
import Inference from './component/Inference';
import SchemaManagement from './component/SchemaManagement';
function App() {
  return (
    <Router>
      <div style={{  display: 'flex', height: '100vh' }}>
        <VerticalNavbar />
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#34568B' }}>
          <Routes>
            <Route path="/extract-data" element={<ExtractData />} />
            <Route path="/extract-schema" element={<ExtractSchema />} />
            <Route path="/inference" element={<Inference />} />
            <Route path="/schema" element={<SchemaManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

