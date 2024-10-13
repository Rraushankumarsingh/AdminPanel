import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
 import "./RecentOrders.css";
 import { useNavigate } from "react-router-dom";
 import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { getAllProductApi } from "../Service/Allapi";
 
const products = [
  {
    id: 1,
    name: "Men Shirts",
    OrderId: "#757123059",
    Date:"20/09/2024",
    Total: 1200,
    PaymentStatus:"Success",
    Paymentmethod:"visa",
    viewDetails:"view",
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Men Shirts",
    OrderId: "#757123059",
    Date:"20/09/2024",
    Total: 1200,
    PaymentStatus:"Success",
    Paymentmethod:"visa",
    viewDetails:"view",
  
    
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Men Shirts",
    OrderId: "#757123059",
    Date:"20/09/2024",
    Total: 1200,
    PaymentStatus:"Pending",
    Paymentmethod:"visa",
    viewDetails:"view",
  
    
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Men Shirts",
    OrderId: "#757123059",
    Date:"20/09/2024",
    Total: 1200,
    PaymentStatus:"Pending",
    Paymentmethod:"visa",
    viewDetails:"view",
  
    
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Men Shirts",
    OrderId: "#757123059",
    Date:"20/09/2024",
    Total: 1200,
    PaymentStatus:"pending",
    Paymentmethod:"visa",
    viewDetails:"view",
  
    
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Men Shirts",
    OrderId: "#757123059",
    Date:"20/09/2024",
    Total: 1200,
    PaymentStatus:"Success",
    Paymentmethod:"visa",
    viewDetails:"view",
  
    
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const RecentOrders = () => {
  const navigate=useNavigate()
  // const [resentOrder,setResentOrder]=useState([])
  // console.log(resentOrder,"resent order from api");


  // useEffect(()=>{

  //   const getData= async()=>{
  //     const result= await getAllProductApi()
  //     setResentOrder(result.data)
  //   }

  //   getData()
  // },[])
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
    <div className="container">
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
            <th>Name</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment Status</th>
            <th>Payment Method</th>
            <th>View Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? "evenRow" : "oddRow"}>
              <td>
                <img src={product.imageUrl} alt={product.name} />
                {product.name}
              </td>
              <td>{product.OrderId}</td>
              <td>{product.Date}</td>
              <td>Rs {product.Total}</td>
              <td className={product.PaymentStatus ? "payment-success" : "payment-pending"}>
                {product.PaymentStatus ? "Success" : "Pending"}
              </td>
              <td>{product.Paymentmethod}</td>
             
              <td onClick={()=>navigate("/OrderSummary")} style={{marginLeft:"2rem",cursor:"pointer"}}>{<MdOutlineRemoveRedEye />}</td>
             
              
              <td >
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
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RecentOrders;
