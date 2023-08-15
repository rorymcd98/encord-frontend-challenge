import { FC } from "react";
import { Prediction } from "../../contexts";
import { formatTimestamp } from "../Images/ImagesTableRow";
import ViewPredictionButton from "./ViewPredictionButton";

interface PredictionsTableRowProps {
  rowData: Prediction;
}

const PredictionsTableRow: FC<PredictionsTableRowProps> = ({
  rowData: { id, title, description, timeOfPrediction },
}) => {
  const formattedTimeOfPrediction = formatTimestamp(timeOfPrediction);
  const viewPredictionButton = <ViewPredictionButton predictionId={id} />;
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{formattedTimeOfPrediction}</td>
      <td className=" flex justify-center border-none">
        {viewPredictionButton}
      </td>
    </tr>
  );
};

export default PredictionsTableRow;
