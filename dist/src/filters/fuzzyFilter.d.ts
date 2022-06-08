import { FilterValue, IdType, Row } from 'react-table';
export declare function fuzzyTextFilter<T extends Record<string, unknown>>(rows: Array<Row<T>>, id: Array<IdType<T>>, filterValue: FilterValue): Array<Row<T>>;
export declare namespace fuzzyTextFilter {
    var autoRemove: (val: any) => boolean;
}
