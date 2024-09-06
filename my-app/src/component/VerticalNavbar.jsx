// import React from 'react';

// const VerticalNavbar = () => {
//   return (
//     <div className="d-flex">
//       {/* Vertical Navbar */}
//       <nav
//         className="d-flex flex-column flex-shrink-0 p-3"
//         style={{ width: '280px', height: '100vh', backgroundColor: '#FF6F61' }} // Set navbar background color
//       >
//         <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//           <span className="fs-4">My App</span>
//         </a>
//         <hr className="text-white" />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <a href="#" className="nav-link text-white" aria-current="page">
//               <i className="fas fa-tachometer-alt me-2"></i> {/* Font Awesome Icon */}
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               <i className="fas fa-database me-2"></i> {/* Font Awesome Icon */}
//               Extract Data
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               <i className="fas fa-file-alt me-2"></i> {/* Font Awesome Icon */}
//               Extract Schema Data
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               <i className="fas fa-lightbulb me-2"></i> {/* Font Awesome Icon */}
//               Inference
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               <i className="fas fa-sitemap me-2"></i> {/* Font Awesome Icon */}
//               Schema
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               <i className="fas fa-info-circle me-2"></i> {/* Font Awesome Icon */}
//               About
//             </a>
//           </li>
//         </ul>
//         <hr className="text-white" />
//       </nav>

      
     
//     </div>
//   );
// };

// export default VerticalNavbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const VerticalNavbar = () => {
  return (
    <div className="d-flex">
      {/* Vertical Navbar */}
      <nav
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: '280px', height: '100vh', backgroundColor: '#FF6F61' }} // Navbar background color
      >
        {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4"></span>
        </a> */}
          <a 
          href="/" 
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            padding: '10px',
            borderRadius: '50%',
            border: '5px solid #fff',
            overflow: 'hidden',
            width: '100px', // Adjust width as needed
            height: '100px', // Adjust height as needed
            backgroundImage: 'url("https://e7.pngegg.com/pngimages/26/255/png-clipart-portable-document-format-data-conversion-microsoft-word-microsoft-excel-pdf-a-file-text-logo.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginLeft:'20px',
            padding:'10px'
          }}
        >
          {/* Optional: Add text or additional content here */}
          {/* <span className="fs-4 text-white" style={{ marginLeft: '10px' }}></span> */}
        </a>
        <hr className="text-white" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-tachometer-alt me-2"></i> {/* Font Awesome Icon */}
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/extract-data" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-database me-2"></i> {/* Font Awesome Icon */}
              Extract Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/extract-schema" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-file-alt me-2"></i> {/* Font Awesome Icon */}
              Extract Schema Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/inference" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-lightbulb me-2"></i> {/* Font Awesome Icon */}
              Inference
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/schema" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-sitemap me-2"></i> {/* Font Awesome Icon */}
              Schema
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link text-white ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-info-circle me-2"></i> {/* Font Awesome Icon */}
              About
            </NavLink>
          </li>
        </ul>
        <hr className="text-white" />
      </nav>
    </div>
  );
};

export default VerticalNavbar;
