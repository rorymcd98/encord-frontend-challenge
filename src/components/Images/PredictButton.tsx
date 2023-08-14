import { FC, useContext } from "react";
import { PredictionContext, TabContext } from "../../contexts";

interface PredictButtonProps {
  fileName: string;
}

const PredictButton: FC<PredictButtonProps> = ({ fileName }) => {
  const { setCurrentPrediction } = useContext(PredictionContext);
  const { setSelectedTab } = useContext(TabContext);
  return (
    <button
      onClick={() => {
        setCurrentPrediction(fileName);
        setSelectedTab("Predictions");
      }}
      className="bg-slate-500 rounded-lg border-black border-solid border-1 relative text-white text-center px-2"
    >
      PREDICT
    </button>
  );
};

export default PredictButton;
