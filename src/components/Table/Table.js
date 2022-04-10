import React, { useState } from "react";
import "./styles.css";
import { ImBin } from "react-icons/im";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Table = (props) => {
  const { headers, tableContent, handleClick } = props;

  const listHeaders = headers.map((header) => <th scope="col">{header}</th>);

  const listTable = tableContent.map((content, i) => (
    <tr key={i}>
      {Object.values(content).map((item) => (
        <td>{item}</td>
      ))}
      <td style={{ width: "15%" }}>
        <button className="buttonIcon" onClick={() => handleClick(i)}>
          <ImBin />
        </button>
      </td>
    </tr>
  ));
  const numberOfItems = listTable.length;
  const numberPerPage = 8;
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
      <div className="responsivnes">
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
                  <GrFormPrevious />
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
                  <GrFormNext />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Table;
