import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9092" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    req.headers.common["Content-Type"] = "application/json;charset=UTF-8";
    req["headers"]["common"]["Accept"] = "application/json";
    // req["headers"]["common"]["Content-Type"] = "text/html";
  }

  return req;
});

// DEMO ROUTES

export const fetchDemos = () => API.get(`/demos`);
export const fetchDemo = (id) => API.get(`/demos/${id}`);
export const createDemo = (data) => API.post("/demos", data);
export const updateDemo = (id, data) => API.put(`/demos/${id}`, data);
export const deleteDemo = (id) => API.delete(`/demos/${id}`);

// GENERAL

export const login = (formData) =>
  API.post("/bolnica-user/api/login", formData);
export const resetPassword = (email) =>
  API.post("/bolnica-user/api/forgot-password", email);

// APPOINTMENTS

export const fetchAppointments = (data) =>
  API.post(`/bolnica-management/api/list-appointments-by-lbz`, data);
export const createAppointment = (data) =>
  API.post("/bolnica-management/api/set-appointment", data);
export const deleteAppointment = (id) => API.delete(`/demos/${id}`);
export const updateAppointment = (data) =>
  API.put(`/bolnica-management/api/update-appointment-status`, data);

// PATIENT STATES

export const fetchPatientStates = (data) =>
  API.post(`/bolnica-management/api/searchPatientStateHistory`, data);
export const createPatientState = (data) =>
  API.put("/bolnica-management/api/setPatientsState", data);
export const deletePatientState = (id) => API.delete(`/demos/${id}`);
export const updatePatientState = (data) =>
  API.put(`/bolnica-management/api/update-State-status`, data);

// REFERRALS

export const fetchReferrals = (data) =>
  API.post(`/bolnica-laboratory/api/uput-history?page=1&size=5`, data);
export const fetchUnprocessedReferrals = (data) =>
  API.get(`/bolnica-laboratory/api/unprocessed-uputi?lbp=${data}`, data);
export const createReferral = (data) =>
  API.post("/bolnica-laboratory/api/create-uput", data);
export const deleteReferral = (id) =>
  API.delete(`/bolnica-laboratory/api/delete-uput?uputId=${id}`);
export const updateReferral = (data) =>
  API.put(`/bolnica-management/api/update-referrals-status`, data);
export const searchReferrals = (lbp, type, status) =>
  API.post("/bolnica-management/api/", lbp, type, status);

//ANALYSIS RESULTS

export const fetchAnalysisResults = (id) =>
  API.get(`/bolnica-laboratory/api/fetch-analysis-results?id=${id}`);
export const saveAnalysisResultApi = (data) =>
  API.put(`/bolnica-laboratory/api/save-analysis-result`, data);

// LAB REPORTS

export const fetchLabReports = (data) =>
  API.post(
    `/bolnica-laboratory/api/laboratory-work-order-history?page=1&size=5`,
    data
  );
export const fetchLabReport = (data) =>
  API.post(`/bolnica-management/api/get-lab-report`, data);
export const createLabReport = (data) =>
  API.post(
    `/bolnica-laboratory/api/create-laboratory-work-order?uputId=${data}`
  );
export const verifyReportApi = (id) =>
  API.put(`/bolnica-laboratory/api/verify-work-order?id=${id}`);
export const deleteLabReport = (id) => API.delete(`/demos/${id}`);
export const updateLabReport = (data) =>
  API.put(`/bolnica-management/api/update-lab-report-status`, data);
export const searchLabReports = (data) =>
  API.post(
    `/bolnica-laboratory/api/fetch-laboratory-work-orders?page=1&size=5`,
    data
  );

// EXAMINATIONS

export const fetchExaminations = (lbp) =>
  API.post(`/bolnica-management/api/fetch-examinations/${lbp}?page=1&size=5`, {
    from: null,
    to: null,
    on: null,
  });

// RECORDS

export const createRecord = (formData) =>
  API.post(`/bolnica-management/api/create-examination-report`, formData);
export const fetchRecord = (lbp) =>
  API.get(`/bolnica-management/api/fetch-zdravstveni-karton/${lbp}`);
export const addVaccine = (formData) =>
  API.post(`/bolnica-management/api/add-vaccine`, formData);
export const addAlergen = (formData) =>
  API.post(`/bolnica-management/api/add-allergen`, formData);
export const updateRecord = (formData) =>
  API.put(`/bolnica-management/api/update-medical-record`, formData);

// EMPLOYEES
export const fetchEmployees = () =>
  API.post(`/bolnica-user/api/list-employees?page=1&size=5`, {});
export const fetchEmployeesDep = (id) =>
  API.post(`/bolnica-user/api/list-employees?page=1&size=5`, {
    department: id,
  });
export const fetchEmployee = (lbz) =>
  API.get(`/bolnica-user/api/get-employee/${lbz}`);
export const createEmployee = (formData) =>
  API.post(`/bolnica-user/api/create-employee`, formData);
export const updateEmployee = (formData) =>
  API.put(`/bolnica-user/api/update-employee`, formData);
export const deleteEmployee = (lbz) =>
  API.delete(`/bolnica-user/api/remove-employee?lbz=${lbz}`);
export const searchEmployees = (searchValues) =>
  API.post("/bolnica-user/api/list-employees?page=1&size=5", searchValues);

// DEPARTMENTS

export const fetchDepartments = () => API.get(`/bolnica-user/api/departments`);

// HOSPITALS

export const fetchHospitals = () => API.get(`/bolnica-user/api/hospitals`);

// PATIENTS

export const fetchPatients = () =>
  API.post(`/bolnica-management/api/filter-patients`, {});
export const fetchPatientsVisits = (lbp) =>
  API.get(`/bolnica-management/api/patient-visits/${lbp}`);
export const createPatientVisit = (formData) =>
  API.post(`/bolnica-management/api/patient-visit/save`, formData);
export const fetchPatient = (lbp) =>
  API.get(`/bolnica-management/api/fetch-patient/${lbp}`);
export const createPatient = (formData) =>
  API.post(`/bolnica-management/api/create-patient`, formData);
export const updatePatient = (formData, lbp) =>
  API.put(`/bolnica-management/api/update-patient/${lbp}`, formData);
export const deletePatient = (lbp) =>
  API.delete(`/bolnica-management/api/remove-patient/${lbp}`);
export const searchPatients = (searchValues) =>
  API.post("/bolnica-management/api/filter-patients", searchValues);

// DISEASES
export const fetchDiseases = (lbp, data) =>
  API.post(
    `/bolnica-management/api/fetch-istorija-bolesti/${lbp}?page=1&size=5`,
    data
  );

//LAB
export const fetchNumberOfLabAppointments = (dateNum) =>
  API.get(`/bolnica-management/api/fetch-number-of-appointments/${dateNum}`);

//LAB VISITS
export const searchLabVisits = (data) =>
  API.post("/bolnica-laboratory/api/get-lab-examinations", data);
export const getVisitCount = (data) =>
  API.post("/bolnica-laboratory/api/get-lab-examination-count", data);
export const updateLabVisits = (data) =>
  API.put("/bolnica-laboratory/api/set-lab-examination-status", data);
export const createVisit = (formData) =>
  API.post("/bolnica-laboratory/api/schedule-lab-examination", formData);

//ADMISSIONS
export const searchAdmissions = (data) =>
  API.post("/bolnica-management/api/get-lab-examinations", data);
export const getAdmissions = (data) =>
  API.post(`/bolnica-management/api/get-zakazani-termini-prijema`, data);
export const updateAdmission = (data) =>
  API.put(
    "/bolnica-management/api/update-zakazani-termin-prijema-status",
    data
  );
export const createAdmission = (formData) =>
  API.post("/bolnica-management/api/create-zakazani-termin-prijema", formData);

//PATIENTS ADMISSIONS
export const searchPatientsAdmissions = (data) =>
  API.post("/bolnica-management/api/searchHospitalizedPatients", data);
export const updatePatientAdmission = (id, status) =>
  API.put("/patientsAdmissions", id, status);
export const createPatientAdmission = (data) =>
  API.post("/bolnica-management/api/hospitalizePatient", data);

//DISCHARGE LISTS
export const getDischargeLists = (data) =>
  API.post("/bolnica-management/api/search-otpusna-lista", data);
export const updateDischargeList = (id, status) =>
  API.put("/patientsAdmissions", id, status);
export const createDischargeList = (data) =>
  API.post("/bolnica-management/api/add-otpusna-lista", data);

//MEDICAL REPORTS
export const getMedicalReports = (data) =>
  API.post("/bolnica-management/api/search-lekarski-izvestaj", data);
export const updateMedicalReport = (id, status) =>
  API.put("/patientsAdmissions", id, status);
export const createMedicalReport = (data) =>
  API.post("/bolnica-management/api/add-lekarski-izvestaj", data);

//HOSPITAL ROOMS
export const searchHospitalRooms = (pbo) => API.post("/hospitalRooms", pbo);

//PATIENT HISTORY
export const fetchPatientsHistory = (dateFrom, dateTo, lbp) =>
  API.get(
    `/nurse/infirmary/patients-department/history/${(dateFrom, dateTo, lbp)}`
  );

export const createPatientHistory = (lbp, formData) =>
  API.post(`/nurse/infirmary/patients-department/history`, lbp, formData);

export const fetchPatientsVisitsHistory = (lbp) =>
  API.get(`/nurse/infirmary/patients-department/history/${lbp}`);

export const createPatientVisits = (lbp, formData) =>
  API.post(`/nurse/infirmary/patients-department/history`, lbp, formData);

// PDF
export const printReport = (id) =>
  API.post(
    `/bolnica-management/api/labreportprint?laboratorijskiIzvestajId=${id}`
  );
