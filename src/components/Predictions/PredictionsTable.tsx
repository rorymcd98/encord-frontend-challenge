import { FC, useContext } from "react";
import { Prediction, PredictionContext } from "../../contexts";
import PredictionsTableRow from "./PredictionsTableRow";
import Table from "../table/Table";

const PredictionsTable: FC = () => {
  const { predictions } = useContext(PredictionContext);
  const tableHeaders = ["Title", "Description", "Timestamp"];
  const generateRowKey = (rowData: Prediction) => rowData.id;
  return (
    <Table
      tableData={predictions}
      tableHeaders={tableHeaders}
      generateRowKey={generateRowKey}
      RowComponent={PredictionsTableRow}
    />
  );
};

export default PredictionsTable;
