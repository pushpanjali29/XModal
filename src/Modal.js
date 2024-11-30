import { useState } from "react";

const Modal = ({ onClose }) => {
  const className = `block w-full rounded-md border-0 py-1.5 px-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6`;

  const initialFormData = {
    userName: "",
    email: "",
    number: "",
    dob: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!formData.userName.trim()) {
      setError("Username is required.");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Invalid Email");

      return;
    }
    if (formData.number.length !== 10) {
      alert("Invalid phone number");
      return;
    }

    const selectedDate = new Date(e.target.value);
    const today = new Date();

    if (selectedDate > today) {
      alert("Invalid Date of Birth: Date cannot be in the future.");
    }

    setError("");
    setFormData(initialFormData);
    alert("Form submitted successfully!");
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleModalClose}
      className="modal modal-overlay absolute flex top-0 left-0 w-[100%] h-[100%] justify-center items-center bg-grayLight"
    >
      <div className="relative bg-white modal-content p-[2rem] w-[500px] rounded">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 bg-[gray] w-[40px] h-[30px] p-1 rounded cursor-pointer z-100"
        >
          X
        </button>
        <form className="flex flex-col items-center">
          <h1 className="text-[2rem] text-center pb-4">Fill Details</h1>
          <h2 className="text-center">Username:</h2>
          <input
            type="text"
            name="userName"
            id="username"
            className={className}
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <h2 className="text-center">Email Address:</h2>
          <input
            type="email"
            name="email"
            id="email"
            className={className}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <h2 className="text-center">Phone Number:</h2>
          <input
            type="number"
            name="number"
            id="phone"
            className={className}
            value={formData.number}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 10) {
                setFormData({ ...formData, [e.target.name]: value });
              }
            }}
          />

          <h2 className="text-center">Date of Birth:</h2>
          <input
            type="date"
            name="dob"
            id="dob"
            className={className}
            value={formData.dob}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="submit-button border bg-sky-500 rounded p-2 text-white w-[100px] mt-4"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;