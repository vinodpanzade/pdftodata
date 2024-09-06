import React from 'react';

const Inference = () => {
  return (
    <div>
      <h2 className="mb-4">Inference</h2>
      <div className="container">
        <h4>Upload CSV</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="csvUpload" className="form-label">Choose CSV file:</label>
            <input type="file" className="form-control" id="csvUpload" accept=".csv" />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default Inference;
