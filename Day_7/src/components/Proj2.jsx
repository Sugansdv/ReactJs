import React, { useState } from 'react';

function Proj2() {
  const [formData, setFormData] = useState({ name: '', place: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', place: '' }); 
  };
  return (
    <div className="form-container">
      <h3>Mini Project 2: Name Form</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            placeholder="Enter Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input 
            id="place"
            type="text" 
            name="place" 
            placeholder="Enter Place" 
            value={formData.place} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Place:</strong> {submittedData.place}</p>
        </div>
      )}
    </div>
  );
}

export default Proj2;
