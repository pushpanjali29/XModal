
import { Button, Modal } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const check = email.split("");
      if (!check.includes("@")) {
        alert("Invalid email");
        return;
      }
    }
    if (mobileNo) {
      if (mobileNo.length < 11) {
        alert("Invalid phone number");
        return;
      }
    }
    if (dob) {
      const dobDate = new Date(dob);
      if (dobDate > new Date()) {
        alert("Invalid date of birth");
        return;
      }
    }
    handleModal();
  };

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <Button onClick={handleModal} variant="contained">
        Open Form
      </Button>
      {isOpen && (
        <div className="modal" onClick={handleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit} className="forms">
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={mobileNo}
                required
                onChange={(e) => setMobileNo(e.target.value)}
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <Button
                className="submit-button"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
