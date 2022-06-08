import { PropsWithChildren, ReactElement } from 'react';
import { TableInstance } from 'react-table';
export declare function TablePagination<T extends Record<string, unknown>>({ instance, }: PropsWithChildren<{
    instance: TableInstance<T>;
}>): ReactElement | null;
