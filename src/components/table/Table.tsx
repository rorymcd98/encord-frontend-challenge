import { FC } from "react";
type TableProps<T> = {
  tableData: T[];
  tableHeaders: string[];
  generateRowKey: (rowData: T) => string;
  RowComponent: FC<{ rowData: T }>;
};

const Table = <T,>({
  tableData,
  tableHeaders,
  generateRowKey,
  RowComponent,
}: TableProps<T>) => {
  return (
    <table className="table-auto border-collapse w-full relative border-gray-900">
      <thead>
        <tr className="bg-slate-600">
          {tableHeaders.map((header) => (
            <th key={header} className="px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData: T) => {
          return (
            <RowComponent key={generateRowKey(rowData)} rowData={rowData} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
