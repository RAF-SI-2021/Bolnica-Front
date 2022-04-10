import axios from "axios";

const API = axios.create({ baseURL: "backend_api_path" });

API.interceptors.request.use((req) => {
	if (localStorage.getItem("loggedUser")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("loggedUser")).token
		}`;
	}

	return req;
});

// DEMO ROUTES

export const fetchDemos = () => API.get(`/demos`);
export const fetchDemo = (id) => API.get(`/demos/${id}`);
export const createDemo = (data) => API.post("/demos", data);
export const updateDemo = (id, data) => API.put(`/demos/${id}`, data);
export const deleteDemo = (id) => API.delete(`/demos/${id}`);

// NURSE ROUTES

export const fetchDoctors = () => API.get(`/doctors`);
export const fetchAppointments = (id) => API.get(`/appointments/${id}`);
export const createAppointmentNurse = (data) => API.post("/nurse/create_appointment", data);
export const deleteAppointmentNurse = (id) => API.delete(`/demos/${id}`);
