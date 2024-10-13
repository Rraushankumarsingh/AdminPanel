import React, { useState } from 'react'
import './CatagoriList.css'
const data = {
  categories: [
    { title: 'Men', image: 'path/to/men.jpg', description: 'New Arrivel' },
    { title: 'Women', image: 'path/to/women.jpg', description: 'Arrivel' },
    { title: 'Kids', image: 'path/to/kids.jpg', description: 'New Arrivel' },
  ],
  subCategories: {
    Women: [
      { title: 'Shirt', image: 'path/to/shirt.jpg', description: '' },
      { title: "Pent Men's Wear", image: 'path/to/pant.jpg', description: '' },
      { title: 'Tshirt', image: 'path/to/tshirt.jpg', description: '' },
    ],
  },
};
export const CategoryList = () => {
 

 
  return (
   
      <div className="category-page">
        <div className="category-header">
          <h1>Category</h1>
          <div className="category-actions">
            <button className="delete-button">Delete</button>
            <button className="add-new-button">+ Add New</button>
          </div>
        </div>
        <table className="category-table">
          <thead>
            <tr>
              <th>Product Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.categories.map((category, index) => (
              <tr key={index}>
                <td>{category.title}</td>
                <td><img src={category.image} alt={category.title} /></td>
                <td>{category.description}</td>
                <td className="action-buttons">
                  <button>👁️</button>
                  <button>🗑️</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="subcategory-section">
        <div className="category-header" >
        <h1>Sub Category</h1>

          <h3>Women</h3>
          <button className="add-new-button">+ Add New</button>
        </div>
         
          <table className="subcategory-table">
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.subCategories.Women.map((subcategory, index) => (
                <tr key={index}>
                  <td>{subcategory.title}</td>
                  <td><img src={subcategory.image} alt={subcategory.title} /></td>
                  <td>{subcategory.description}</td>
                  <td className="action-buttons">
                    <button>👁️</button>
                    <button>🗑️</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  
}
