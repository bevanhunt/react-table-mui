import React from 'react';
import { CellProps } from 'react-table';
export declare const TooltipCellRenderer: React.FC<CellProps<any>>;
interface TooltipProps {
    text: string;
    tooltip?: string;
    align: string;
}
export declare const TooltipCell: React.FC<TooltipProps>;
export {};
