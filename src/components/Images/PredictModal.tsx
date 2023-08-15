import { FC, useState, useContext } from "react";
import { PredictionContext } from "../../contexts";

interface PredictModalProps {
  fileName: string;
  closeModal: () => void;
}

interface SubmitButtonProps extends PredictModalProps {
  titleValue: string;
  descriptionValue?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  fileName,
  closeModal,
  titleValue,
  descriptionValue,
}) => {
  const { pushPrediction } = useContext(PredictionContext);
  const [titleError, setTitleError] = useState<string | null>(null);

  const handlePredictSubmit = () => {
    if (titleValue.trim() === "") {
      setTitleError("Title is required");
      return;
    }
    pushPrediction({
      fileName: fileName,
      title: titleValue,
      description: descriptionValue,
      timeOfPrediction: new Date(),
    });
    closeModal();
  };

  return (
    <>
      {titleError && <p className="text-red-500 mx-2">{titleError}</p>}
      <button
        onClick={handlePredictSubmit}
        className="bg-slate-500 rounded-lg border-black border-solid border-1 relative text-white text-center px-2"
      >
        Submit
      </button>
    </>
  );
};

const CloseButton: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <strong
      onClick={closeModal}
      className="text-xl align-center cursor-pointer alert-del text-gray-500"
    >
      &times;
    </strong>
  );
};

const PredictModal: FC<PredictModalProps> = ({ fileName, closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitButton = (
    <SubmitButton
      fileName={fileName}
      closeModal={closeModal}
      titleValue={title}
      descriptionValue={description}
    />
  );
  const closeButton = <CloseButton closeModal={closeModal} />;
  return (
    <>
      <div
        onClick={(e) => {
          // prevent click from propagating past the modal
          e.stopPropagation();
        }}
        className="bg-black opacity-50 fixed inset-0 z-40"
      ></div>
      <div className="p-3 bg-slate-300 rounded-l border-gray-500 absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2">
        <div className="absolute top-2 right-2">{closeButton}</div>
        <h2 className="font-bold text-gray-600 ">
          {" "}
          Set prediction parameters{" "}
        </h2>
        <h5 className="italic text-gray-500 md-1">
          {`Set the prediction parameters for: ${fileName}`}
        </h5>
        <div className="flex-col space-y-1 pt-1">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full"
            />
          </div>
          <div>
            <textarea
              placeholder="Description..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">{submitButton}</div>
      </div>
    </>
  );
};

export default PredictModal;
