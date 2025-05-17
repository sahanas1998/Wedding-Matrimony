import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/charts" });

export const getCharts = () => API.get("/");
export const getChart = (id) => API.get(`/${id}`);
export const createChart = (pet) => API.post("/", pet);
export const updateChart = (id, pet) => API.put(`/${id}`, pet);
export const deleteChart = (id) => API.delete(`/${id}`);
