function Confirmation() {
  const storedUser = localStorage.getItem("userInfo");
  const userInfo = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Appointment Confirmed</h2>
      {userInfo && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Your Details</h3>
          <p><b>Name:</b> {userInfo.name}</p>
          <p><b>Phone:</b> {userInfo.phone}</p>
          <p><b>Email:</b> {userInfo.email}</p>
          <p><b>Address:</b> {userInfo.address}</p>
        </div>
      )}
    </div>
  );
}

export default Confirmation;