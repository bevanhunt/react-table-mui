/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { matchSorter } from 'match-sorter';
import { FilterValue, IdType, Row } from 'react-table';

export function fuzzyTextFilter<T extends Record<string, unknown>>(
  rows: Array<Row<T>>,
  id: Array<IdType<T>>,
  filterValue: FilterValue,
): Array<Row<T>> {
  return matchSorter(rows, filterValue, {
    keys: [(row: Row<T>) => row.values[id[0]]],
  });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilter.autoRemove = (val: any) => !val;
