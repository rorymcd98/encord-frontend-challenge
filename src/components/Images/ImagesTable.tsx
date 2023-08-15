import { FC, useContext } from "react";
import { ImageUploadsContext, ImageMetadata } from "../../contexts";
import ImagesTableRow from "./ImagesTableRow";
import Table from "../table/Table";

const ImagesTable: FC = () => {
  const { images } = useContext(ImageUploadsContext);
  const tableData = images.map(({ metadata }) => metadata);
  const tableHeaders = ["File Name", "File Size", "Time of Upload"];
  const generateRowKey = (rowData: ImageMetadata) =>
    rowData.fileName + rowData.timeOfUpload.toISOString();
  return (
    <Table
      tableData={tableData}
      tableHeaders={tableHeaders}
      generateRowKey={generateRowKey}
      RowComponent={ImagesTableRow}
    />
  );
};

export default ImagesTable;
