import { FC } from "react";
import ImagesTable from "./ImagesTable";
import UploadImageButton from "./UploadImageButton";

const Images: FC = () => {
  return (
    <>
      <UploadImageButton />
      <ImagesTable />
    </>
  );
};

export default Images;
