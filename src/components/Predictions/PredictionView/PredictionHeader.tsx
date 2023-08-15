import { FC } from "react";
import { formatTimestamp } from "../../Images/ImagesTableRow";
import { Prediction } from "../../../contexts";

interface PredictionHeaderProps {
  prediction: Prediction;
}

const PredictionHeader: FC<PredictionHeaderProps> = ({
  prediction: { title, description, timeOfPrediction },
}) => {
  const formattedTimeOfPrediction = formatTimestamp(timeOfPrediction);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">
        {title} - {formattedTimeOfPrediction}
      </h2>
      <h3 className="text-xl">{description}</h3>
    </div>
  );
};

export default PredictionHeader;
