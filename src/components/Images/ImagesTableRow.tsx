import { FC } from "react";
import { ImageMetadata } from "../../contexts";
import PredictButton from "./PredictButton";

interface ImagesTableRowProps {
  imageMetadata: ImageMetadata;
}
const formatFileSize = (fileSize: number) => {
  let formattedFileSize;
  let suffix: string = "B";
  if (fileSize > 1e3) {
    formattedFileSize = fileSize % 1e3;
    suffix = "KB";
  } else if (fileSize > 1e6) {
    formattedFileSize = fileSize % 1e6;
    suffix = "MB";
  }

  return `${formattedFileSize} ${suffix}`;
};

const formatTimeOfUpload = (timeOfUpload: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "short",
    timeStyle: "short",
  };
  return timeOfUpload.toLocaleString("en-US", options);
};
const ImagesTableRow: FC<ImagesTableRowProps> = ({
  imageMetadata: { fileName, imageSize, timeOfUpload },
}) => {
  const formattedFileName =
    fileName.length > 25
      ? `${fileName.slice(0, 5)}...${fileName.slice(-17)})}`
      : fileName;
  const formattedImageSize = formatFileSize(imageSize);
  const formattedTimeOfUpload = formatTimeOfUpload(timeOfUpload);
  const predictButton = <PredictButton fileName={fileName} />;

  // I would probably turn td into a component if this were a real app
  return (
    <tr>
      <td className="border">{formattedFileName}</td>
      <td className="border">{formattedImageSize}</td>
      <td className="border">{formattedTimeOfUpload}</td>
      <td className="border flex justify-center">{predictButton}</td>
    </tr>
  );
};

export default ImagesTableRow;
