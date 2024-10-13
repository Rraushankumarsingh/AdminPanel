import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./User.css";

export const User = () => {
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Use dummy data instead of fetching from API
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        productId: "P001",
        name: "John Doe",
        Email: "john.doe@example.com",
        gender: "Male",
        birthday: "1990-05-14",
        alternativeName: "Johnny",
      },
      {
        id: 2,
        productId: "P002",
        name: "Jane Smith",
        Email: "jane.smith@example.com",
        gender: "Female",
        birthday: "1985-11-25",
        alternativeName: "Janie",
      },
      {
        id: 3,
        productId: "P003",
        name: "Mark Johnson",
        Email: "mark.johnson@example.com",
        gender: "Male",
        birthday: "1992-09-02",
        alternativeName: "MJ",
      },
      {
        id: 4,
        productId: "P004",
        name: "Emily Davis",
        Email: "emily.davis@example.com",
        gender: "Female",
        birthday: "1993-03-20",
        alternativeName: "Em",
      },
      {
        id: 5,
        productId: "P005",
        name: "Michael Brown",
        Email: "michael.brown@example.com",
        gender: "Male",
        birthday: "1988-07-15",
        alternativeName: "Mike",
      },
      // Add more dummy data as needed
    ];
    setUserList(dummyData);
  }, []);

  const firstPage = currentPage * itemsPerPage;
  const lastPage = firstPage - itemsPerPage;
  const currentItems = userList.slice(lastPage, firstPage);

  // Calculate total pages
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const downloadAsTxt = () => {
    const content = userList
      .map(
        (user) =>
          `Name: ${user.name}, Email: ${user.Email}, Gender: ${user.gender}, Birthday: ${user.birthday}, Alternative Name: ${user.alternativeName}`
      )
      .join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "users.txt");
  };

  const downloadAsExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userList);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users.xlsx");
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
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container4">
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
            <th>Product ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Alternative Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length === 0 ? (
            <tr>
              <td colSpan="7">No user available</td>
            </tr>
          ) : (
            currentItems.map((user) => (
              <tr key={user.id}>
                <td>{user.productId}</td>
                <td>{user.name}</td>
                <td>{user.Email}</td>
                <td>{user.gender}</td>
                <td>{user.birthday}</td>
                <td>{user.alternativeName}</td>
                <td>
                  <button>👁️</button>
                  <button>✏️</button>
                  <button>🗑️</button>
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
            Next
          </button>
        )}
      </div>
    </div>
  );
};
