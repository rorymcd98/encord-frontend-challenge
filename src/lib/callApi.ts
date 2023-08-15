import axios from "axios";
import { PredictionResponse, expectsPredictionResponse } from "../contexts";
const predictEndpoint = "http://localhost:3000/predict";
export const callPredictApi = async (): Promise<PredictionResponse | Error> => {
  try {
    const response = await axios.get(predictEndpoint);
    const predictionResponse = response.data;
    if (expectsPredictionResponse(predictionResponse)) {
      return predictionResponse;
    } else {
      return Error("Prediction response is not valid");
    }
  } catch (error) {
    return error as Error;
  }
};
