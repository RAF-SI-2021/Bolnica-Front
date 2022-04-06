import React, { useState } from "react";
import "./styles.css";

const Table = (props) => {
  const { headers, tableContent, handleClick } = props;

  const listHeaders = headers.map((header) => <th scope="col">{header}</th>);

  const listTable = tableContent.map((content, i) => (
    <tr key={i}>
      {Object.values(content).map((item) => (
        <td>{item}</td>
      ))}
      <td>
        <button className="buttonIcon" onClick={() => handleClick(i)}>
          <i className="fa fa-trash fa-sm myIcon" aria-hidden="false"></i>
        </button>
      </td>
    </tr>
  ));

  const numberOfItems = listTable.length;
  const numberPerPage = 5;
  const pageLimit = 3;
  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const trimStart = (currentPage - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div class="form-group pull-right">
        <input
          type="text"
          class="search form-control"
          placeholder="What you looking for?"
        ></input>
      </div>
      <div>
        <h1 className="myTitle">Zaposleni</h1>
      </div>
      <table className=" myTable table table-hover table-bordered">
        <thead className="header">
          <tr>
            {listHeaders}
            <th></th>
          </tr>
        </thead>
        <tbody>{listTable.slice(trimStart, trimEnd)}</tbody>
      </table>
      <div>
        <nav className="myPagination" aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                onClick={goToPreviousPage}
                className={`prev myPagButton ${
                  currentPage === 1 ? "disabled" : null
                }`}
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </button>
            </li>
            <li className="page-item">
              {getPaginationGroup().map((item, index) => (
                <button
                  key={index}
                  onClick={changePage}
                  className={`paginationItem myPagButton ${
                    currentPage === item ? "active" : null
                  }`}
                >
                  <span>{item}</span>
                </button>
              ))}
            </li>
            <li className="page-item">
              <button
                onClick={goToNextPage}
                className={`next myPagButton ${
                  currentPage === numberOfPages ? "disabled" : null
                }`}
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Table;
