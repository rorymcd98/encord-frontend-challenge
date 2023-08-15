import { FC, useContext } from "react";
import { ImageUploadsContext } from "../../contexts";

const UploadImageButton: FC = () => {
  const { handleUploadImage } = useContext(ImageUploadsContext);

  // naming could be better - not important for now
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleUploadImage(file);
    }
  };

  return <input type="file" onChange={handleFileUpload} />;
};

export default UploadImageButton;
