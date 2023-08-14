import { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import {
  AppTab,
  ImageMetadata,
  ImageUploadsContext,
  PredictionContext,
  TabContext,
  initialImagesMeta_test,
} from "./contexts";
import Images from "./components/Images/Images";
import AppContainer from "./components/AppContainer";
import AppDescription from "./components/AppDescription";

function App() {
  const [selectedTab, setSelectedTab] = useState<AppTab>("Images");
  const [imagesMetadata, setImagesMetadata] = useState<ImageMetadata[]>([]);
  const [currentPrediction, setCurrentPrediction] = useState<string | null>(
    null
  );

  // simulate some db delay
  useEffect(() => {
    setTimeout(() => {
      setImagesMetadata(initialImagesMeta_test);
    }, 1250);
  }, []);

  const uploadImage = (fileName: string, imageSize: number) => {
    const newImageMeta: ImageMetadata = {
      fileName,
      timeOfUpload: new Date(),
      imageSize: imageSize,
    };
    setImagesMetadata([...imagesMetadata, newImageMeta]);
  };

  const imagesAppDescription = "Upload images and view them in a table.";
  const predictionsAppDescription = "View prediction results.";
  let selectedAppDescription: string;
  switch (selectedTab) {
    case "Images":
      selectedAppDescription = imagesAppDescription;
      break;
    case "Predictions":
      selectedAppDescription = predictionsAppDescription;
      break;
    default:
      selectedAppDescription = "No app selected";
  }

  return (
    <>
      <ImageUploadsContext.Provider
        value={{ imagesMetadata, setImagesMetadata, uploadImage }}
      >
        <TabContext.Provider
          value={{
            selectedTab,
            setSelectedTab,
          }}
        >
          <PredictionContext.Provider
            value={{ currentPrediction, setCurrentPrediction }}
          >
            <AppHeader />
            <AppContainer>
              <AppDescription>{selectedAppDescription}</AppDescription>
              {selectedTab === "Images" && <Images />}
            </AppContainer>
          </PredictionContext.Provider>
        </TabContext.Provider>
      </ImageUploadsContext.Provider>
    </>
  );
}

export default App;
