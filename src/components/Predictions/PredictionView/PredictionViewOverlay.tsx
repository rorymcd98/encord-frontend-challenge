import { FC } from "react";
import { PredictionData } from "../../../contexts";
import { ImageDimensions } from "./PredictionView";

interface PredictionViewOverlayProps {
  predictionData: PredictionData[];
  imageDimensions: ImageDimensions | null;
}

const PredictionBBox: FC<{
  predictionData: PredictionData;
  imageDimensions: ImageDimensions;
  color: string;
  annotationText: string;
}> = ({ predictionData, imageDimensions, color, annotationText }) => {
  const { x1, y1, x2, y2 } = predictionData.bbox;
  const { width, height } = imageDimensions;
  const x1Percent = (x1 * 100) / width;
  const y1Percent = (y1 * 100) / height;
  const x2Percent = 100 - (x2 * 100) / width;
  const y2Percent = 100 - (y2 * 100) / height;

  return (
    <div
      className={`absolute border-2`}
      style={{
        borderColor: color,
        color: color,
        backgroundColor: "rgba(0,0,0,0.1)",
        left: `${x1Percent}%`,
        top: `${y1Percent}%`,
        right: `${x2Percent}%`,
        bottom: `${y2Percent}%`,
      }}
    >
      <div
        style={{ position: "absolute", bottom: 0, right: 0, padding: "3px" }}
      >
        {annotationText}
      </div>
    </div>
  );
};

const PredictionViewOverlay: FC<PredictionViewOverlayProps> = ({
  predictionData,
  imageDimensions,
}) => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "indigo",
  ];
  if (imageDimensions === null)
    return <div>Could not render image dimensions, reload or XYZ</div>;

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0">
      {predictionData.map((prediction, index) => {
        const annotationText = `${prediction.label} (${prediction.score})`;
        return (
          <PredictionBBox
            key={index}
            predictionData={prediction}
            color={colors[index % colors.length]}
            imageDimensions={imageDimensions}
            annotationText={annotationText}
          />
        );
      })}
    </div>
  );
};

export default PredictionViewOverlay;
