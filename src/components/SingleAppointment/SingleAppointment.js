import "./styles.css";
import { format } from "date-fns";
import { updateAppointment } from "../../redux/actions/appointment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const SingleAppointment = ({ props }) => {
	const { id, firstname, lastname, dob, gender, appointmentStatus, time } =
		props;

	let age = format(new Date(), "yyyy") - format(dob, "yyyy");
	let appointTime = format(new Date(time), "HH:mm");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function updateAppointmentStatus(id, data) {
		dispatch(updateAppointment(id, data));
		navigate(`examination/${id}`);
	}
	return (
		<div
			key={`prop-${id}`}
			className={` ${
				appointmentStatus === "Trenutno" ? "isCurrently" : null
			}`}
			onClick={() => updateAppointmentStatus(id, "Trenutno")}
		>
			<div className="d-flex flex-row align-items-center ">
				<div className="appTime">
					<span>{appointTime}</span>
				</div>
				<div className="customContainer">
					<div className="d-flex flex-row justify-content-around appointment">
						<span className="text-dark text1">
							{firstname} {lastname}
						</span>
						<span className="text2">
							{age} {gender}
						</span>
						<div
							className={`badge flex-row text-white appointmentStatus ${
								appointmentStatus === "Zakazano" ||
								appointmentStatus === "Ceka"
									? "isAppointed"
									: appointmentStatus === "Otkazano"
									? "isCanceled"
									: appointmentStatus === "Zavrseno"
									? "isFinished"
									: null
							}`}
						>
							{appointmentStatus}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleAppointment;
