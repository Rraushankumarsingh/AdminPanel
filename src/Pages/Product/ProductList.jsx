import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./ProductList.css";
import { NavLink, useNavigate } from "react-router-dom";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  // Dummy product data
  const dummyProducts = [
    {
      _id: "1",
      name: "Product 1",
      basePrice: 500,
      finalPrice: 450,
      stock: true,
      images: ["https://via.placeholder.com/50"],
    },
    {
      _id: "2",
      name: "Product 2",
      basePrice: 300,
      finalPrice: 280,
      stock: false,
      images: ["https://via.placeholder.com/50"],
    },
    {
      _id: "3",
      name: "Product 3",
      basePrice: 1000,
      finalPrice: 950,
      stock: true,
      images: ["https://via.placeholder.com/50"],
    },
    // Add more dummy products as needed
  ];

  useEffect(() => {
    // Simulating API call with dummy data
    setProductList(dummyProducts);
  }, []);

  const lastPage = currentPage * itemsPerPage;
  const firstPage = lastPage - itemsPerPage;
  const currentItems = Array.isArray(productList)
    ? productList.slice(firstPage, lastPage)
    : [];
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const downloadAsTxt = () => {
    const content = Array.isArray(productList)
      ? productList
          .map(
            (product) =>
              `Product: ${product.name}, Product ID: ${
                product._id
              }, Base Price: Rs ${product.basePrice}, Final Price: Rs ${
                product.finalPrice
              }, Stock: ${product.stock ? "In Stock" : "Out Of Stock"}`
          )
          .join("\n")
      : "";
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "products.txt");
  };

  const downloadAsExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(productList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "products.xlsx");
  };

  const downloadCSS = () => {
    const content = `
      .container1 { width: 80%; margin: 0 auto; }
      .actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
      .actions button, .actions input { margin: 0 5px; padding: 10px; border: none; cursor: pointer; }
      .search { flex-grow: 1; padding: 10px; border-radius: 5px; }
      .delete { background-color: red; color: white; }
      .add-new { background-color: purple; color: white; }
      table { width: 100%; border-collapse: collapse; }
      thead { background-color: #f4f4f4; }
      th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
      img { width: 50px; height: 50px; margin-right: 10px; vertical-align: middle; }
      .pagination { display: flex; justify-content: center; margin-top: 20px; }
      .pagination button { margin: 0 5px; padding: 10px; border: none; cursor: pointer; }
      .pagination .active { background-color: purple; color: white; }
    `;
    const blob = new Blob([content], { type: "text/css;charset=utf-8" });
    saveAs(blob, "styles.css");
  };

  const printPage = () => {
    window.print();
  };

  const handaleDelete = (id) => {
    setProductList(productList.filter((item) => item._id !== id));
  };

  const handaleviewDatails = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="container1">
      <div className="actions">
        <button onClick={downloadCSS}>Css</button>
        <button onClick={downloadAsTxt}>Txt</button>
        <button onClick={downloadAsExcel}>Excel</button>
        <button onClick={printPage}>Print</button>
        <input type="text" placeholder="Search" className="search" />
        <button
          onClick={() => {
            navigate("/AddProduct");
          }}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product ID</th>
            <th>Base Price</th>
            <th>Final Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.length === 0 ? (
            <tr>
              <td colSpan="6">No products available</td>
            </tr>
          ) : (
            currentItems.map((product, index) => (
              <tr
                key={product._id}
                className={index % 2 === 0 ? "evenRow" : "oddRow"}
              >
                <td>
                  <img
                    src={product.images[0] || "default-image.jpg"}
                    alt={product.name || "Default Name"}
                  />
                  {product.name}
                </td>
                <td>{product._id}</td>
                <td>Rs {product.basePrice}</td>
                <td>Rs {product.finalPrice}</td>
                <td>{product.stock ? "In Stock" : "Out Of Stock"}</td>
                <td>
                  <button onClick={() => handaleviewDatails(product._id)}>
                    👁️
                  </button>

                  <button onClick={() => handaleDelete(product._id)}>🗑️</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            next
          </button>
        )}
      </div>
    </div>
  );
};
