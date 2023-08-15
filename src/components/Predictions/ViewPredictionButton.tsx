import { FC, useContext } from "react";
import { PredictionContext } from "../../contexts";

interface ViewPredictionButtonProps {
  predictionId: string;
}

const ViewPredictionButton: FC<ViewPredictionButtonProps> = ({
  predictionId,
}) => {
  const { setCurrentPredictionId } = useContext(PredictionContext);
  const viewPrediction = () => setCurrentPredictionId(predictionId);
  return (
    <button
      onClick={viewPrediction}
      className="bg-slate-500 rounded-lg border-black border-solid border-1 relative text-white text-center px-2"
    >
      VIEW
    </button>
  );
};

export default ViewPredictionButton;
