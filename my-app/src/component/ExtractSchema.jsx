import React from 'react';

const ExtractSchema = () => {
  return (
    <div>
      <h2 className="mb-4">Extract Schema Data</h2>
      <div className="container">
        <h4>Upload PDF</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="pdfUpload" className="form-label">Choose PDF file:</label>
            <input type="file" className="form-control" id="pdfUpload" accept=".pdf" />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default ExtractSchema;
