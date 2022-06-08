import { ReactElement } from 'react';
import { TableInstance } from 'react-table';
declare type FilterChipBarProps<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
};
export declare function FilterChipBar<T extends Record<string, unknown>>({ instance, }: FilterChipBarProps<T>): ReactElement | null;
export {};
