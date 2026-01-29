import { useLocation } from "react-router-dom";

interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  address: string;
  appointmentId: number;
}

function Confirmation() {
  const location = useLocation();
  const appointmentId = location.state?.appointmentId;

  const storedData = appointmentId
    ? localStorage.getItem(`appointment_${appointmentId}`)
    : null;

  const userInfo: AppointmentData | null = storedData
    ? JSON.parse(storedData)
    : null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Appointment Confirmed</h2>

      {userInfo && (
        <div>
          <h3>Your Details</h3>
          <p>
            <b>Name:</b> {userInfo.name}
          </p>
          <p>
            <b>Phone:</b> {userInfo.phone}
          </p>
          <p>
            <b>Email:</b> {userInfo.email}
          </p>
          <p>
            <b>Address:</b> {userInfo.address}
          </p>
        </div>
      )}
    </div>
  );
}

export default Confirmation;
