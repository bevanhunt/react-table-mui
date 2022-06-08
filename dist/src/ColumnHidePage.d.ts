import { ReactElement } from 'react';
import { TableInstance } from 'react-table';
declare type ColumnHidePageProps<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
    anchorEl?: Element;
    onClose: () => void;
    show: boolean;
};
export declare function ColumnHidePage<T extends Record<string, unknown>>({ instance, anchorEl, onClose, show, }: ColumnHidePageProps<T>): ReactElement | null;
export {};
