import axios from "axios";

const appointmentBookingApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_APPOINTMENTS_API_URL || "http://localhost:3001",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default appointmentBookingApi;
