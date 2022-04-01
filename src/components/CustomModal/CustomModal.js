import React from "react";
import "./styles.css";

const Modal = (props) => {
  const { title, info, isSuccess, id } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary launchButton"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog component fixPadding">
          <div className="modal-content fixBorder fixPadding component">
            <div className="container-fluid fixPadding component">
              <div className="row component">
                <div
                  className={`col-sm-3 ${
                    isSuccess ? "leftSuccess" : "leftNotSuccess"
                  }`}
                >
                  <img
                    className={`success ${
                      isSuccess
                        ? "fas fa-check-circle"
                        : "fa-solid fa-circle-xmark"
                    }`}
                    alt=""
                  />
                </div>
                <div className="col-sm-6">
                  <div className="modal-body">
                    {/* <h5 className={` ${isSuccess ? "titleSuccess" : "title"}`}> */}
                    <h5 className="title">{title}</h5>
                    <p className="info">{info}</p>
                  </div>
                </div>
                <div className="col-sm-3 vertical">
                  <button
                    type="button"
                    className="btn close"
                    data-bs-dismiss="modal"
                  >
                    Zatvori
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
