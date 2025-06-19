import React, { useEffect, useState } from "react";

const TableWithPagination = () => {
  const [data, setData] = useState([]);
  /* = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  })); */
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Failed to fetch data", error);
        alert("Failed to fetch data");
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <table
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          backgroundColor: "grey",
        }}
      >
        <thead style={{ backgroundColor: "green" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {/* {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => ( */}
        <button
          key={currentPage}
          // onClick={() => goToPage(page)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            //   backgroundColor: currentPage === page ? '#007BFF' : '#f0f0f0',
            //   color: currentPage === page ? 'white' : 'black',
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {currentPage}
        </button>
        {/* ))} */}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableWithPagination;
