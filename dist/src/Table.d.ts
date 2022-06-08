import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import { Row, TableInstance, TableOptions } from 'react-table';
export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
    name: string;
    onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
    onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
    onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
    onClick?: (row: Row<T>) => void;
}
export declare function Table<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement;
