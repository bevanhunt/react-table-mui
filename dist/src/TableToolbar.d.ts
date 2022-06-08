import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import { TableInstance } from 'react-table';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"toolbar" | "leftButtons" | "rightButtons" | "leftIcons" | "rightIcons">;
declare type InstanceActionButton<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
    icon?: JSX.Element;
    onClick: any;
    enabled?: (instance: TableInstance<T>) => boolean;
    label: string;
    variant?: 'right' | 'left';
};
declare type ActionButton = {
    icon?: JSX.Element;
    onClick: MouseEventHandler;
    enabled?: boolean;
    label: string;
    variant?: 'right' | 'left';
};
export declare function InstanceLabeledActionButton<T extends Record<string, unknown>>({ instance, icon, onClick, label, enabled, }: InstanceActionButton<T>): ReactElement;
export declare function LabeledActionButton({ icon, onClick, label, enabled, }: ActionButton): ReactElement;
export declare function InstanceSmallIconActionButton<T extends Record<string, unknown>>({ instance, icon, onClick, label, enabled, variant, }: InstanceActionButton<T>): ReactElement;
export declare function SmallIconActionButton({ icon, onClick, label, enabled, variant, }: ActionButton): ReactElement;
declare type TableToolbarProps<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
    onAdd?: any;
    onDelete?: any;
    onEdit?: any;
};
export declare function TableToolbar<T extends Record<string, unknown>>({ instance, onAdd, onDelete, onEdit, }: PropsWithChildren<TableToolbarProps<T>>): ReactElement | null;
export {};
