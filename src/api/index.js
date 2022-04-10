import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9092/api" });

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
export const createAppointmentNurse = (data) =>
  API.post("/nurse/create_appointment", data);
export const deleteAppointmentNurse = (id) => API.delete(`/demos/${id}`);

// SCHEDULED APPOINTMENTS ROUTES

export const updateAppointment = (id, data) =>
  API.put(`/appointment/${id}`, data);

export const fetchEmployees = () => API.get(`/employees`);
export const searchEmployees = (searchValues) =>
  API.post("/employees", searchValues);

// EXAMINATIONS
export const createExamination = (formData) => API.post("/demos", formData);

// RECORDS

export const fetchRecord = (id) => API.get(`/records/${id}`);
export const createRecord = (formData) => API.post(`/records`, formData);
export const fetchPatients = () => API.get(`/patients`);
export const searchPatients = (searchValues) =>
  API.post("/patients", searchValues);
