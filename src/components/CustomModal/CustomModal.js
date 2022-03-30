import React from "react";
import "./styles.css";

const Modal = (props) => {
  const { title, info, isSuccess } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog component">
          <div className="modal-content">
            <div className="container-fluid">
              <div className="row">
                <div
                  className={`col-sm-3 ${
                    isSuccess ? "leftSuccess" : "leftNotSuccess"
                  }`}
                >
                  <img
                    className={` ${
                      isSuccess
                        ? "success fas fa-check-circle"
                        : "notSuccess fa-solid fa-circle-xmark"
                    }`}
                    alt=""
                  />
                </div>
                <div className="col-sm-6">
                  <div className="modal-body">
                    <h5 className={` ${isSuccess ? "titleSuccess" : "title"}`}>
                      {title}
                    </h5>
                    <p className="info">{info}</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="vertical">
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
    </div>
  );
};
export default Modal;
