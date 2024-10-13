import React, { useState } from 'react'
import './Addcatagori.css'
export const Addcategory = () => {

   const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      categoryName,
      description,
      image
    });
  };

  return (
    <div className="form-container">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category Name *</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Type Category Name"
            required
          />
        </div>
        <div className='form-froupflex'>
        <div className="form-group">
          <label>Upload Images *</label>
          <input
            type="file"
            onChange={handleImageUpload}
            required
          /><input/>
        </div>
        <div className="form-group">
          <label>Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type Description"
            required
          ></textarea>
        </div>
        </div>
        
        <button type="submit" className="submit-button0">Save Product</button>
      </form>
    </div>
  );
}
