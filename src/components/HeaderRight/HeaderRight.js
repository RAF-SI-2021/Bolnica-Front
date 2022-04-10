import React from "react";

const HeaderRight = (props) => {
  const { userName, userTitle } = props;

  return (
    <div className="user-container">
      <div className="name-container">
        <p className="user-name">{userName}</p>
        <p className="user-title">{userTitle}</p>
      </div>
      <div className="button-container">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default HeaderRight;
