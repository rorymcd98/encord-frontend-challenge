import { FC, useContext } from "react";
import PredictionsTable from "./PredictionsTable";
import { PredictionContext } from "../../contexts";
import PredictionHeader from "./PredictionView/PredictionHeader";
import PredictionView from "./PredictionView/PredictionView";

const Predictions: FC = () => {
  const { currentPredictionId, predictions } = useContext(PredictionContext);
  const currentPrediction = predictions.find(
    (prediction) => prediction.id === currentPredictionId
  );
  return (
    <>
      <PredictionsTable />
      {currentPredictionId && currentPrediction && (
        <>
          <PredictionHeader prediction={currentPrediction} />
          <PredictionView prediction={currentPrediction} />
        </>
      )}
    </>
  );
};

export default Predictions;
