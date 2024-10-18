import { Table, TableBody, TableCell, TableHead, TableRow } from "@aws-amplify/ui-react";
import React, { useMemo, useState } from "react";

interface TableProps {
  data: Array<Record<string, any>>;
  columns: Array<{
    key: string;
    label: string;
    render?: (row: Record<string, any>) => React.ReactNode;
  }>;
  filter?: boolean;
  filterBy?: string;
}

const SortableTable: React.FC<TableProps> = ({ data, columns, filter = false, filterBy }) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterValue, setFilterValue] = useState("");

  const filteredAndSortedData = useMemo(() => {
    let result = data;
    
    if (filter && filterValue) {
      result = result.filter(row => {
        if (filterBy) {
          return String(row[filterBy]).toLowerCase().includes(filterValue.toLowerCase());
        } else {
          return Object.values(row).some(value =>
            String(value).toLowerCase().includes(filterValue.toLowerCase())
          );
        }
      });
    }

    if (sortColumn) {
      result = [...result].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, sortColumn, sortDirection, filter, filterValue, filterBy]);

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.key} onClick={() => handleSort(column.key)}>
              {column.label} {sortColumn === column.key && (sortDirection === "asc" ? "▲" : "▼")}
            </TableCell>
          ))}
        </TableRow>
        {filter && (
          <TableRow>
            <TableCell colSpan={columns.length}>
              <input
                type="text"
                placeholder={`Filter by ${filterBy || "all columns"}`}
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              />
            </TableCell>
          </TableRow>
        )}
      </TableHead>
      <TableBody>
        {filteredAndSortedData.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column.render ? column.render(row) : row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SortableTable;
