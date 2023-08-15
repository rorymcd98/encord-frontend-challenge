import { useState, ReactNode } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import {
  AppTab,
  ImageMetadata,
  ImageUpload,
  ImageUploadsContext,
  Prediction,
  PredictionContext,
  TabContext,
  initialImages_test,
} from "./contexts";
import Images from "./components/Images/Images";
import AppContainer from "./components/AppContainer";
import AppDescription from "./components/AppDescription";
import { v4 as uuidv4 } from "uuid";
import Predictions from "./components/Predictions/Predictions";
import { callPredictApi } from "./lib/callApi";

function App() {
  const [selectedTab, setSelectedTab] = useState<AppTab>("Images");
  const [images, setImages] = useState<ImageUpload[]>(initialImages_test);
  const [currentPredictionId, setCurrentPredictionId] = useState<string | null>(
    null
  );
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  // In this app I don't use useCallback - there is no clear need for it in terms of optimisation or caching.
  const pushPrediction = async (
    uncalledPrediction: Omit<Prediction, "id" | "predictionResponse">
  ) => {
    const prediction = {
      ...uncalledPrediction,
      predictionResponse: await callPredictApi(),
      id: uuidv4(),
    };
    setPredictions([...predictions, prediction]);
  };

  const handleUploadImage = (imageFile: File) => {
    const newImageMeta: ImageMetadata = {
      fileName: imageFile.name,
      timeOfUpload: new Date(),
      imageSize: imageFile.size,
    };
    const newImage: ImageUpload = {
      image: imageFile,
      metadata: newImageMeta,
    };
    setImages([...images, newImage]);
  };

  const imagesAppDescription = "Upload images and view them in a table.";
  const predictionsAppDescription = "View prediction results.";
  let selectedAppDescription: string;
  let selectedAppComponent: ReactNode;
  switch (selectedTab) {
    case "Images":
      selectedAppDescription = imagesAppDescription;
      selectedAppComponent = <Images />;
      break;
    case "Predictions":
      selectedAppDescription = predictionsAppDescription;
      selectedAppComponent = <Predictions />;
      break;
    default:
      selectedAppDescription = "No app selected";
  }

  return (
    <>
      <ImageUploadsContext.Provider
        value={{
          images,
          setImages,
          handleUploadImage,
        }}
      >
        <TabContext.Provider
          value={{
            selectedTab,
            setSelectedTab,
          }}
        >
          <PredictionContext.Provider
            value={{
              currentPredictionId,
              setCurrentPredictionId,
              predictions,
              pushPrediction,
            }}
          >
            <AppHeader />
            <AppContainer>
              <AppDescription>{selectedAppDescription}</AppDescription>
              {selectedAppComponent}
            </AppContainer>
          </PredictionContext.Provider>
        </TabContext.Provider>
      </ImageUploadsContext.Provider>
    </>
  );
}

export default App;
