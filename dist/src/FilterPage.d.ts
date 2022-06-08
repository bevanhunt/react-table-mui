import { ReactElement } from 'react';
import { TableInstance } from 'react-table';
declare type FilterPageProps<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
    anchorEl?: Element;
    onClose: () => void;
    show: boolean;
};
export declare function FilterPage<T extends Record<string, unknown>>({ instance, anchorEl, onClose, show, }: FilterPageProps<T>): ReactElement;
export {};
