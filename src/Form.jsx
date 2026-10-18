import { useState } from "react";
import "./Form.css";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

let handleInputChange = (event) => {
    setFormData((currData) => {
        return {
            ...currData,
            [event.target.name]: event.target.value
        };
    });
};


let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
        fullName: "",
        username: "",
        password: "",
    });
};

  return (
    <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="fullName">Full Name</label>
        <br></br>
      <input
        className="input"
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
        <br></br><br></br>
        <label htmlFor="username">Username</label>
        <br></br>
      <input
        className="input"
        placeholder="enter username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
        <br></br><br></br>
        <label htmlFor="password">Password</label>
        <br></br>
      <input
        className="input"
        placeholder="enter password"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <br></br> <br></br>
      <button className="btn">Submit</button>
    </form>
  );
}
