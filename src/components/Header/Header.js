import React from "react";
import "./styles.css";
import { FaCalendar } from "react-icons/fa";

const Header = (props) => {
	const { avatarUrl, welcomeMsg, userName, userTitle, day, date } = props;

	return (
		<div className="containerCustom">
			<div className="user-container">
				{/* <div className="avatar-container">
					<img
						className="user-avatar"
						src={avatarUrl}
						alt={userName}
					/>
				</div> */}
				<div className="name-container">
					<p className="welcome-msg">{welcomeMsg}</p>
					<p className="user-name">{userName}</p>
					<p className="user-title">{userTitle}</p>
				</div>
			</div>
			<div className="date-container">
				<span className="calendar-icon">
					<FaCalendar />
				</span>
				<span className="date-span">{date}</span>
			</div>
			<div className="button-container">
				<button className="logout-btn">Logout</button>
			</div>
		</div>
	);
};

export default Header;
