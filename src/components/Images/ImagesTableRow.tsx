import { FC } from "react";
import { ImageMetadata } from "../../contexts";
import PredictButton from "./PredictButton";

interface ImagesTableRowProps {
  rowData: ImageMetadata;
}
const formatFileSize = (fileSize: number) => {
  // Ignore 1024 vs 1000
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

export const formatTimestamp = (timeOfUpload: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "short",
    timeStyle: "short",
  };
  return timeOfUpload.toLocaleString("en-US", options);
};
const ImagesTableRow: FC<ImagesTableRowProps> = ({
  rowData: { fileName, imageSize, timeOfUpload },
}) => {
  const formattedFileName =
    fileName.length > 25
      ? `${fileName.slice(0, 5)}...${fileName.slice(-17)})}`
      : fileName;
  const formattedImageSize = formatFileSize(imageSize);
  const formattedTimeOfUpload = formatTimestamp(timeOfUpload);
  const predictButton = <PredictButton fileName={fileName} />;

  // I would probably turn td into a component if this were a real app
  return (
    <tr>
      <td>{formattedFileName}</td>
      <td>{formattedImageSize}</td>
      <td>{formattedTimeOfUpload}</td>
      <td className=" flex justify-center border-none">{predictButton}</td>
    </tr>
  );
};

export default ImagesTableRow;
