import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

interface AppointmentForm {
  name: string;
  phone: string;
  email: string;
  address: string;
}

function Contact() {
  const [formData, setFormData] = useState<AppointmentForm>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // unique appointment id
    const appointmentId = Date.now();

    const appointmentData = {
      ...formData,
      appointmentId,
    };

    // store appointment separately
    localStorage.setItem(
      `appointment_${appointmentId}`,
      JSON.stringify(appointmentData)
    );

    // navigate to confirmation page with id
    navigate("/confirmation", {
      state: { appointmentId },
    });
  };

  return (
    <div>
      <h2>Enter Your Details</h2>

      <form onSubmit={handleSubmit}>
        <p>NAME:</p>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <p>PHONE:</p>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <p>EMAIL:</p>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail id"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <p>ADDRESS:</p>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit" className="slot">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Contact;



