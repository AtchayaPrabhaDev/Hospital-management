import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
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
    localStorage.setItem("userInfo", JSON.stringify(formData));
    navigate("/doctors");
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
          Continue to Doctors
        </button>
      </form>
    </div>
  );
}

export default Contact;


