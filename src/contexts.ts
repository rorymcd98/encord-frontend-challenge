import { createContext, Dispatch } from "react";

// Three contexts - which tab we're on, images we've uploaded, and predictions we've made
// Upon reflection it would have been easier to make a Zustand store

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

export type ImageUpload = {
  image: File;
  metadata: ImageMetadata;
};

type ImageUploadsContexType = {
  images: ImageUpload[];
  setImages: Dispatch<ImageUpload[]>;
  handleUploadImage: (imageFile: File) => void;
};

export const initialImages_test: ImageUpload[] = [
  {
    image: new File([new Blob()], "cat_pic.jpg", { type: "image/jpeg" }),
    metadata: {
      fileName: "/dir1/cat_pic.jpg",
      imageSize: 361230,
      timeOfUpload: new Date("2022-07-15T09:30:00"),
    },
  },
  {
    image: new File([new Blob()], "dog_pic.jpg", { type: "image/jpeg" }),
    metadata: {
      fileName: "/dir2/dog_pic.jpg",
      imageSize: 512345,
      timeOfUpload: new Date("2022-07-16T14:45:00"),
    },
  },
];

export const ImageUploadsContext = createContext<ImageUploadsContexType>({
  images: [],
  setImages: () => {},
  handleUploadImage: () => {},
});

type BBox = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type PredictionData = {
  bbox: BBox;
  label: string;
  score: number;
};

export type PredictionResponse = {
  description: string;
  predictions: PredictionData[];
};

export const expectsPredictionResponse = (
  response: unknown
): response is PredictionResponse => {
  if (typeof response !== "object" || response === null) {
    return false;
  }
  const { description, predictions } = response as PredictionResponse;
  if (typeof description !== "string" || !Array.isArray(predictions)) {
    return false;
  }
  return true;
  // good enough validation
};

export type Prediction = {
  id: string;
  fileName: string;
  title: string;
  description?: string;
  timeOfPrediction: Date;
  predictionResponse: PredictionResponse | Error;
};

type PredictionContextType = {
  currentPredictionId: string | null;
  setCurrentPredictionId: Dispatch<string | null>;
  predictions: Prediction[];
  pushPrediction: (
    uncalledPrediction: Omit<Prediction, "id" | "predictionResponse">
  ) => void;
};

const initialPrediction = null;
export const PredictionContext = createContext<PredictionContextType>({
  currentPredictionId: initialPrediction,
  setCurrentPredictionId: () => {},
  predictions: [],
  pushPrediction: () => {},
});
