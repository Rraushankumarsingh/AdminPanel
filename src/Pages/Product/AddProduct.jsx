import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import "./Addproduct.css";

let initialValue = {
  name: "",
  Description: "",
  brand: "",
  color: "",
  size: "",
  stock: "",
  basePrice: "",
  finalPrice: "",
  file: null,
  action: "",
};

export const AddProduct = () => {
  const [images, setImages] = useState([null, null, null]); 
  const [addProduct, setAddproduct] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const newImages = [...images];
      Array.from(files).forEach((file, index) => {
        if (index < 3) {
          newImages[index] = file; 
        }
      });
      setImages(newImages); 
    } else {
      setAddproduct((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    Object.keys(addProduct).forEach((key) => {
      if (addProduct[key] !== null) {
        newFormData.append(key, addProduct[key]);
      }
    });

    images.forEach((image, index) => {
      if (image) {
        newFormData.append(`image${index + 1}`, image);
      }
    });

    try {
      const response = await PostProductData(newFormData);
      if (response) {
        alert("Product data added successfully");
        // Optionally clear the form and images here
        setAddproduct(initialValue);
        setImages([null, null, null]);
      }
    } catch (error) {
      console.log("Facing problem in post data in API:", error);
    }
  };

  return (
    <div className="product-form1">
      <h2>Product Form</h2>
      <form>
        <div className="form-sections">
          <div className="form-left">
            <div className="form-group">
              <TextField
                name="name"
                label="Product Name"
                value={addProduct.name}
                onChange={handleOnChange}
                sx={{ height: "50px" }}
                variant="outlined"
                fullWidth
                required
              />
              <small>
                Do Not Exceed 20 Characters When Entering The Product Name.
              </small>
            </div>
            <div className="form-row">
              <FormControl
                fullWidth
                variant="outlined"
                className="form-control"
              >
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={addProduct.category}
                  onChange={handleOnChange}
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="category1">Category 1</MenuItem>
                  <MenuItem value="category2">Category 2</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                variant="outlined"
                className="form-control"
              >
                <InputLabel>Sub Category</InputLabel>
                <Select
                  name="subCategory"
                  value={addProduct.subCategory}
                  onChange={handleOnChange}
                  label="Sub Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                  <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                </Select>
              </FormControl>
            </div>
            <FormControl fullWidth variant="outlined" className="form-group">
              <InputLabel>Brand</InputLabel>
              <Select
                name="brand"
                value={addProduct.brand}
                onChange={handleOnChange}
                label="Brand"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="brand1">Brand 1</MenuItem>
                <MenuItem value="brand2">Brand 2</MenuItem>
              </Select>
            </FormControl>
            <div className="form-group">
              <TextField
                name="Description"
                label="Description"
                value={addProduct.Description}
                onChange={handleOnChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
              <small>
                Do not exceed 100 characters when entering the product name.
              </small>
            </div>
          </div>
          <div className="form-right">
            <div className="upload-images">
              <h4>Upload Images</h4>
              <input
                type="file"
                name="file"
                accept="image/*"
                multiple
                id="image-upload"
                onChange={handleOnChange}
              />
              <div className="upload-boxes">
                {images.map((image, index) => (
                  <div key={index} className="upload-box">
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Upload ${index}`}
                        className="upload-preview"
                      />
                    ) : (
                      <label htmlFor="image-upload">
                        {index === 0 ? "Upload Image 1" : index === 1 ? "Upload Image 2" : "Upload Image 3"}
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="form-row">
              <FormControl
                fullWidth
                variant="outlined"
                className="form-control"
              >
                <InputLabel>Size</InputLabel>
                <Select
                  name="size"
                  value={addProduct.size}
                  onChange={handleOnChange}
                  label="Size"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="small">S</MenuItem>
                  <MenuItem value="medium">M</MenuItem>
                  <MenuItem value="large">L</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                variant="outlined"
                className="form-control"
              >
                <InputLabel>Color</InputLabel>
                <Select
                  name="color"
                  value={addProduct.color}
                  onChange={handleOnChange}
                  label="Color"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="red">Red</MenuItem>
                  <MenuItem value="blue">Blue</MenuItem>
                  <MenuItem value="green">Green</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-row">
              <TextField
                name="basePrice"
                label="Base Price"
                value={addProduct.basePrice}
                onChange={handleOnChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                name="finalPrice"
                label="Final Price"
                value={addProduct.finalPrice}
                onChange={handleOnChange}
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <TextField
                name="schedule"
                label="Schedule"
                type="date"
                value={addProduct.schedule}
                onChange={handleOnChange}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className="save-button"
              onClick={handleSave}
            >
              Save Product
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};



