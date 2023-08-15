import { FC, useState } from "react";
import PredictModal from "./PredictModal";

interface PredictButtonProps {
  fileName: string;
}

const PredictButton: FC<PredictButtonProps> = ({ fileName }) => {
  // I might have used createPortal but I don't think it's neccessary for this app
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-slate-500 rounded-lg border-black border-solid border-1 relative text-white text-center px-2"
      >
        PREDICT
      </button>
      {isModalOpen && (
        <PredictModal fileName={fileName} closeModal={closeModal} />
      )}
    </>
  );
};

export default PredictButton;
