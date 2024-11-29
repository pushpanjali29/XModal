import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal} className="open-form-btn">
        Open Form
      </button>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
