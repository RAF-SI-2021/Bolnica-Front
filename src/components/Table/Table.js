import React from "react";
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

  return (
    <div>
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
        <tbody>{listTable}</tbody>
      </table>
      <div>
        <nav className="myPagination" aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Table;
