import {
  FC,
  useContext,
  useRef,
  useState,
  useMemo,
  SyntheticEvent,
} from "react";
import { ImageUploadsContext, Prediction } from "../../../contexts";
import PredictionViewOverlay from "./PredictionViewOverlay";

interface PredictionViewProps {
  prediction: Prediction;
}

export type ImageDimensions = { width: number; height: number };

const PredictionView: FC<PredictionViewProps> = ({ prediction }) => {
  const { images } = useContext(ImageUploadsContext);
  const [imageDimensions, setImageDimensions] =
    useState<ImageDimensions | null>(null);
  const predictionImage = images.find(
    (image) => image.metadata.fileName === prediction.fileName
  );

  const viewUrl = useMemo(() => {
    if (!predictionImage) {
      return null;
    }
    const objectUrl = URL.createObjectURL(predictionImage.image);

    return objectUrl;
  }, [predictionImage]);

  if (!predictionImage) {
    return <div>Image not found</div>;
  }

  // TODO - If the image is not-null but still 'bad' (e.g. some other file), we skip this incorrectly
  if (viewUrl === null) {
    return <div>Loading prediction image</div>;
  }

  const predictionResponse = prediction.predictionResponse;
  if (!predictionResponse || predictionResponse instanceof Error) {
    return (
      <>
        <p>Error loading prediction, try XYZ</p>
        <p className="text-gray-500 italic">
          Error message: {predictionResponse?.message}
        </p>
      </>
    );
  }

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    setImageDimensions({
      height: target.naturalHeight,
      width: target.naturalWidth,
    });
  };

  return (
    predictionImage && (
      <>
        <div className="relative overflow-hidden">
          <img src={viewUrl} alt="Prediction" onLoad={handleImageLoad} />
          <PredictionViewOverlay
            predictionData={predictionResponse.predictions}
            imageDimensions={imageDimensions}
          />
        </div>
      </>
    )
  );
};

export default PredictionView;
