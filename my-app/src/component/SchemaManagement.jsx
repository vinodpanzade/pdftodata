import React, { useState } from 'react';

const SchemaManagement = () => {
  // State to hold the schema data
  const [schema, setSchema] = useState([]);
  // State to hold new entry input
  const [newLabel, setNewLabel] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Function to handle adding new schema entry
  const handleAddEntry = () => {
    if (newLabel && newDescription) {
      setSchema([...schema, { label: newLabel, description: newDescription }]);
      setNewLabel('');
      setNewDescription('');
    }
  };

  // Function to handle deleting a schema entry
  const handleDeleteEntry = (index) => {
    const updatedSchema = schema.filter((_, i) => i !== index);
    setSchema(updatedSchema);
  };

  // Function to handle saving the schema data
  const handleSaveData = () => {
    // Here you would typically send `schema` to your server or save it in local storage
    console.log('Schema data saved:', schema);
  };

  return (
    <div className="container">
      <h1>Schema Management</h1>
      
      {/* Form to add new entry */}
      <div className="mb-3">
        <label htmlFor="labelInput" className="form-label"><b>Label</b></label>
        <input
          type="text"
          className="form-control"
          id="labelInput"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label"><b>Description</b></label>
        <input
          type="text"
          className="form-control"
          id="descriptionInput"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddEntry}>Add Entry</button>
      
      {/* List of schema entries */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Label</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schema.map((entry, index) => (
            <tr key={index}>
              <td>{entry.label}</td>
              <td>{entry.description}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteEntry(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Save button */}
      <button className="btn btn-success mt-3" onClick={handleSaveData}>Save Data</button>
    </div>
  );
};

export default SchemaManagement;
