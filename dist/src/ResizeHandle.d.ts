import { ReactElement } from 'react';
import { ColumnInstance } from 'react-table';
export declare function ResizeHandle<T extends Record<string, unknown>>({ column, }: {
    column: ColumnInstance<T>;
}): ReactElement;
