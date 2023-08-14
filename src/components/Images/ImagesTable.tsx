import { FC, useContext } from "react";
import { ImageUploadsContext } from "../../contexts";
import ImagesTableRow from "./ImagesTableRow";

const ImagesTable: FC = () => {
  const { imagesMetadata } = useContext(ImageUploadsContext);
  const tableRows = imagesMetadata.map((imageMeta) => (
    <ImagesTableRow
      key={imageMeta.fileName + imageMeta.timeOfUpload.toString()}
      imageMetadata={imageMeta}
    />
  ));
  const tableHeader = (
    <thead>
      <tr>
        <th className="py-2 text-left flex-1">File Name</th>
        <th className="py-2 text-left flex-3">File Size</th>
        <th className="py-2 text-left flex-3">Time of Upload</th>
      </tr>
    </thead>
  );
  return (
    <table className="table-auto w-full relative border-gray-900">
      {tableHeader}
      {tableRows}
    </table>
  );
};

export default ImagesTable;
