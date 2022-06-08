import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import { TableOptions, TableInstance, Row } from 'react-table';

interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
    name: string;
    onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
    onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
    onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
    onClick?: (row: Row<T>) => void;
}
declare function Table<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement;

export { Table, TableProperties };
