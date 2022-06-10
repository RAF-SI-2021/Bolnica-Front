import React, { useState } from "react";
import "./styles.css";
import { ImBin, ImPencil, ImFileText2, ImCheckmark } from "react-icons/im";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Table = (props) => {
  const {
    headers,
    tableContent,
    handleClick,
    tableType,
    handleEdit,
    handleRowClick,
    handleButtonCanceled,
    handleButtonFinished,
    handlecreateLabReport,
    handleCancelVisit,
    handleCreateLabReportTab1,
  } = props;

  const listHeaders = headers.map((header) => {
    if (header.key === "lbp" || header.key === "lbz") return <></>;
    return (
      <th scope="col" key={header.key}>
        {header.value}
      </th>
    );
  });
  if (tableType === "employees" || tableType === "detailedResultPreview") {
    listHeaders.push(<th scope="col"></th>);
    listHeaders.push(<th scope="col"></th>);
  }

  const handleButton = (key, entry) => {
    const value = entry.filter((element) => element[0] === key);
    handleClick(value[0][1]);
  };

  const handleEditButton = (key, entry) => {
    const value = entry.filter((element) => element[0] === key);
    handleEdit(value[0][1]);
  };

  const handleSearchVisits = (key, entry) => {
    const value = entry.filter((element) => element[0] === key);
    handleEdit(value[0][1]);
  };

  const info = tableContent.map((content) => {
    const entry = Object.entries(content).filter((item, index) => {
      for (let i = 0; i < headers.length; i++) {
        if (headers[i].key === item[0]) return item[1];
      }
      return false;
    });
    return entry;
  });

  const listTable = info.map((entry) => (
    <tr key={entry} onClick={() => handleRowClick(entry)}>
      {entry.map((element) => {
        if (element[0] === "lbp" || element[0] === "lbz") return <></>;
        if (element[0] === "datumPregleda") {
          return (
            <td key={element} style={{ padding: "25px 0px" }}>
              {new Date(element[1]).toLocaleDateString()}
            </td>
          );
        }

        if (element[0] === "statusPregleda") {
          let reserved = false;
          let canceled = false;
          let finished = false;
          if (entry[5][1] === "Zakazano") {
            reserved = true;
          } else if (entry[5][1] === "Otkazano") {
            canceled = true;
          } else if (entry[5][1] === "Zavrseno") {
            finished = true;
          }
          return (
            <td style={{ width: "5%" }}>
              <div className="d-flex">
                <button
                  className={` ${canceled ? "searchCanceled" : "searchButton"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonCanceled("lbz", entry);
                  }}
                >
                  Otkazano
                </button>

                <button
                  className={` ${finished ? "searchFinished" : "searchButton"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonFinished("lbz", entry);
                  }}
                >
                  Završeno
                </button>
              </div>
            </td>
          );
        }

        if (element[0] === "status") {
          if (element[1] === "neobradjeno") {
            return (
              <td style={{ width: "5%" }}>
                <button
                  className="buttonIconBlue"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlecreateLabReport("lbz", entry);
                  }}
                >
                  <ImFileText2 />
                </button>
              </td>
            );
          } else {
            return <></>;
          }
        }
        if (element[0] === "kreiraj") {
          if (entry[3][1] < new Date().getTime() - 2592000000) {
            return (
              <td style={{ width: "5%" }}>
                <button
                  className="buttonIconBlue"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlecreateLabReport("lbz", entry);
                  }}
                >
                  <ImFileText2 />
                </button>
              </td>
            );
          } else {
            return <></>;
          }
        }

        if (element[0] === "statusPregledaZakazaniPacijenti") {
          let zakazano = false;
          if (entry[5][1] === "YY") {
            zakazano = true;
          }
          return (
            <td style={{ width: "5%" }}>
              {/*               <div className="d-flex flex-row justify-content-center buttons">
               */}{" "}
              <div className="d-flex">
                <button
                  className={`buttonZakazano ${
                    zakazano ? "" : "inactiveButton"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Zakazano
                </button>
                <button
                  className={`buttonOtkazano ${
                    !zakazano
                      ? "buttonOtkazano disbledButton"
                      : "inactiveButton"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCancelVisit("lbz", entry);
                  }}
                >
                  Otkazano
                </button>
                <button
                  className={`buttonKreirajNalog ${
                    zakazano ? "" : "inactiveButton disbledButton"
                  }`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCreateLabReportTab1("lbz", entry);
                  }}
                >
                  Kreiraj radni nalog
                </button>
              </div>
            </td>
          );
        }
        return (
          <td key={element} style={{ padding: "25px 0px" }}>
            {element[1]}
          </td>
        );
      })}
      {tableType === "patients" ? (
        <>
          <td style={{ width: "5%" }}>
            <button
              className="buttonIconBlue"
              onClick={(e) => {
                e.stopPropagation();
                handleEditButton("lbp", entry);
              }}
            >
              <ImPencil />
            </button>
          </td>
          <td style={{ width: "5%" }}>
            <button
              className="buttonIcon"
              onClick={(e) => {
                e.stopPropagation();
                handleButton("lbp", entry);
              }}
            >
              <ImBin />
            </button>
          </td>
        </>
      ) : tableType === "employees" ? (
        <>
          <td style={{ width: "5%" }}>
            <button
              className="buttonIconBlue"
              onClick={() => handleEditButton("lbz", entry)}
            >
              <ImPencil />
            </button>
          </td>
          <td style={{ width: "5%" }}>
            <button
              className="buttonIcon"
              onClick={(e) => {
                e.stopPropagation();
                handleButton("lbz", entry);
              }}
            >
              <ImBin />
            </button>
          </td>
        </>
      ) : tableType === "detailedResultPreview" ? (
        <>
          <td style={{ width: "5%" }}>
            <button className="buttonIconBlue">
              <ImPencil />
            </button>
          </td>
          <td style={{ width: "5%" }}>
            <button
              className="buttonIconGreen"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ImCheckmark />
            </button>
          </td>
        </>
      ) : (
        <></>
      )}
    </tr>
  ));
  const numberOfItems = listTable.length;
  const numberPerPage = 6;
  const pageLimit = 1;
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
              {(tableType === "patients" || tableType === "employees") && (
                <>
                  <th></th>
                  <th></th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="familyFix">
            {listTable.slice(trimStart, trimEnd)}
          </tbody>
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
