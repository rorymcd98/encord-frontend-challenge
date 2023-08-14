import { createContext, Dispatch } from "react";

// Three contexts - selectedTab, imageUpload, selectedPrediction

// Gives us better type checking if we want to add additional tabs
export const appTabs = ["Images", "Predictions"] as const;
export type AppTab = (typeof appTabs)[number];

type TabContextType = {
  selectedTab: AppTab;
  setSelectedTab: Dispatch<AppTab>;
};

const initialTab: AppTab = "Images";
export const TabContext = createContext<TabContextType>({
  selectedTab: initialTab,
  setSelectedTab: () => {},
});

export type ImageMetadata = {
  fileName: string;
  imageSize: number;
  timeOfUpload: Date;
};

type ImageUploadsContexType = {
  imagesMetadata: ImageMetadata[];
  setImagesMetadata: Dispatch<ImageMetadata[]>;
  uploadImage: (fileName: string, imageSize: number) => void;
};

export const initialImagesMeta_test: ImageMetadata[] = [
  {
    fileName: "/dir1/cat_pics.jpg",
    imageSize: 361230,
    timeOfUpload: new Date("2022-07-15T09:30:00"),
  },
  {
    fileName: "/dir2/dog_pics.jpg",
    imageSize: 512345,
    timeOfUpload: new Date("2022-07-16T14:45:00"),
  },
];

export const ImageUploadsContext = createContext<ImageUploadsContexType>({
  imagesMetadata: [],
  setImagesMetadata: () => {},
  uploadImage: () => {},
});

type PredictionContextType = {
  currentPrediction: string | null;
  setCurrentPrediction: Dispatch<string | null>;
};

const initialPrediction = null;
export const PredictionContext = createContext<PredictionContextType>({
  currentPrediction: initialPrediction,
  setCurrentPrediction: () => {},
});
