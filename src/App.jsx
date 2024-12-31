import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="m-6 flex flex-col items-center">
      <h1 className="text-center text-[2rem] pb-4">User Details Modal</h1>
      <button
        className="border bg-sky-500 rounded p-2 text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Open Form
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;