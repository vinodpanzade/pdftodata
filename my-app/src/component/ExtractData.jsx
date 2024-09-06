import React, { useState } from 'react';

const ExtractData = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Handle the file upload logic here
      console.log('File uploaded:', file);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="container">
      <h2>Extract Data</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div className="mb-3">
          <label htmlFor="pdf-upload" className="form-label"  >Upload PDF</label>
          <input 
            type="file" 
            id="pdf-upload" 
            accept=".pdf"
            onChange={handleFileChange}
            className="form-control"
            style={{ backgroundColor: '#F7CAC9', color: '#92A8D1' }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default ExtractData;
