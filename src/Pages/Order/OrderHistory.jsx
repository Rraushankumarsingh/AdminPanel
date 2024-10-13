import React, { useState } from 'react';
import './OrderHistory.css';
// import '../assets/Global.css'
const products = [
  {
    id: 1,
    name: "Men Shirts",
    productId: "#757123059",
    price: -1452,
    sale: 1200,
    stock: "In Stock",
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Women Shirts",
    productId: "#7712509",
    price: 452,
    sale: 200,
    stock: "Out Of Stock",
    imageUrl: "path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Men Shirts",
    productId: "#8712309",
    price: 2442,
    sale: 1900,
    stock: "In Stock",
    imageUrl: "path/to/image3.jpg",
  },
  {
    id: 4,
    name: "Kid",
    productId: "#6612309",
    price: -3452,
    sale: 2200,
    stock: "Out Of Stock",
    imageUrl: "path/to/image4.jpg",
  },
  {
    id: 5,
    name: "Yellow Shirts",
    productId: "#5412305",
    price: -1452,
    sale: 1200,
    stock: "In Stock",
    imageUrl: "path/to/image5.jpg",
  },
  {
    id: 6,
    name: "Black Shirts",
    productId: "#2212709",
    price: -1452,
    sale: 1200,
    stock: "Out Of Stock",
    imageUrl: "path/to/image6.jpg",
  },
];

export const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current items
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const downloadAsTxt = () => {
    const content = products
      .map(
        (product) =>
          `Product: ${product.name}, Product ID: ${product.productId}, Price: Rs ${product.price}, Sale: ${product.sale}, Stock: ${product.stock}`
      )
      .join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "products.txt");
  };

  const downloadAsExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(products);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "products.xlsx");
  };

  const downloadCSS = () => {
    const content = `
      .container {
        width: 80%;
        margin: 0 auto;
      }
      .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      .actions button, .actions input {
        margin: 0 5px;
        padding: 10px;
        border: none;
        cursor: pointer;
      }
      .search {
        flex-grow: 1;
        padding: 10px;
        border-radius: 5px;
      }
      .delete {
        background-color: red;
        color: white;
      }
      .add-new {
        background-color: purple;
        color: white;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      thead {
        background-color: #f4f4f4;
      }
      th, td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ddd;
      }
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      .pagination button {
        margin: 0 5px;
        padding: 10px;
        border: none;
        cursor: pointer;
      }
      .pagination .active {
        background-color: purple;
        color: white;
      }
    `;
    const blob = new Blob([content], { type: "text/css;charset=utf-8" });
    saveAs(blob, "styles.css");
  };

  const printPage = () => {
    window.print();
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container3">
    <div className="actions">
      <button onClick={downloadCSS}>Css</button>
      <button onClick={downloadAsTxt}>Txt</button>
      <button onClick={downloadAsExcel}>Excel</button>
      <button onClick={printPage}>Print</button>
      <input type="text" placeholder="Search" className="search" />
      <button className="delete">Delete</button>
      <button className="add-new">+ Add New</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Product ID</th>
          <th>Price</th>
          <th>Sale</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.imageUrl} alt={product.name} />
              {product.name}
            </td>
            <td>{product.productId}</td>
            <td>Rs {product.price}</td>
            <td>{product.sale}</td>
            <td>{product.stock}</td>
            <td>
              <button>👁️</button>
              <button>✏️</button>
              <button>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={currentPage === index + 1 ? 'active' : ''}
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
  )
}
