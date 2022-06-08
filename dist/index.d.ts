declare module 'react-table-mui-ts/index' {
  export * from 'react-table-mui-ts/src/Table';

}
declare module 'react-table-mui-ts/src/ColumnHidePage' {
  import { ReactElement } from 'react';
  import { TableInstance } from 'react-table';
  type ColumnHidePageProps<T extends Record<string, unknown>> = {
      instance: TableInstance<T>;
      anchorEl?: Element;
      onClose: () => void;
      show: boolean;
  };
  export function ColumnHidePage<T extends Record<string, unknown>>({ instance, anchorEl, onClose, show, }: ColumnHidePageProps<T>): ReactElement | null;
  export {};

}
declare module 'react-table-mui-ts/src/FilterChipBar' {
  import { ReactElement } from 'react';
  import { TableInstance } from 'react-table';
  type FilterChipBarProps<T extends Record<string, unknown>> = {
      instance: TableInstance<T>;
  };
  export function FilterChipBar<T extends Record<string, unknown>>({ instance, }: FilterChipBarProps<T>): ReactElement | null;
  export {};

}
declare module 'react-table-mui-ts/src/FilterPage' {
  import { ReactElement } from 'react';
  import { TableInstance } from 'react-table';
  type FilterPageProps<T extends Record<string, unknown>> = {
      instance: TableInstance<T>;
      anchorEl?: Element;
      onClose: () => void;
      show: boolean;
  };
  export function FilterPage<T extends Record<string, unknown>>({ instance, anchorEl, onClose, show, }: FilterPageProps<T>): ReactElement;
  export {};

}
declare module 'react-table-mui-ts/src/ResizeHandle' {
  import { ReactElement } from 'react';
  import { ColumnInstance } from 'react-table';
  export function ResizeHandle<T extends Record<string, unknown>>({ column, }: {
      column: ColumnInstance<T>;
  }): ReactElement;

}
declare module 'react-table-mui-ts/src/Table' {
  import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
  import { Row, TableInstance, TableOptions } from 'react-table';
  export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
      name: string;
      onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
      onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
      onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
      onClick?: (row: Row<T>) => void;
  }
  export function Table<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement;

}
declare module 'react-table-mui-ts/src/TablePagination' {
  import { PropsWithChildren, ReactElement } from 'react';
  import { TableInstance } from 'react-table';
  export function TablePagination<T extends Record<string, unknown>>({ instance, }: PropsWithChildren<{
      instance: TableInstance<T>;
  }>): ReactElement | null;

}
declare module 'react-table-mui-ts/src/TableStyles' {
  import { TableTypeMap } from '@mui/material/Table/Table';
  import { TableBodyTypeMap } from '@mui/material/TableBody/TableBody';
  import { TableCellProps } from '@mui/material/TableCell/TableCell';
  import { TableHeadTypeMap } from '@mui/material/TableHead/TableHead';
  import { TableRowTypeMap } from '@mui/material/TableRow/TableRow';
  import React, { CSSProperties } from 'react';
  export const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"tableTable" | "tableHead" | "tableHeadRow" | "tableHeadCell" | "tableBody" | "tableRow" | "tableLabel" | "tableCell" | "resizeHandle" | "tableSortLabel" | "headerIcon" | "iconDirectionAsc" | "iconDirectionDesc" | "cellIcon">;
  type CN = {
      className?: string;
      style?: CSSProperties;
      children?: React.ReactNode;
  };
  export const TableTable: React.FC<Partial<TableTypeMap> & CN>;
  export const TableBody: React.FC<Partial<TableBodyTypeMap> & CN>;
  export const TableHead: React.FC<Partial<TableHeadTypeMap> & CN>;
  export const TableHeadRow: React.FC<Partial<TableRowTypeMap> & CN>;
  export const TableHeadCell: React.FC<Partial<TableCellProps> & CN>;
  export const TableRow: React.FC<Partial<TableRowTypeMap> & CN>;
  export const TableCell: React.FC<Partial<TableCellProps> & CN>;
  export const TableLabel: React.FC<CN>;
  export const HeaderCheckbox: React.MemoExoticComponent<import("@mui/styles").StyledComponent<Omit<import("@mui/material").CheckboxProps, "className" | "classes"> & import("@mui/styles").StyledComponentProps<"root"> & Omit<Pick<import("@mui/material").CheckboxProps, "color" | "translate" | "hidden" | "size" | "style" | "icon" | "disabled" | "id" | "form" | "slot" | "title" | "key" | "className" | "role" | "aria-label" | "value" | "classes" | "sx" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "name" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "readOnly" | "required" | "action" | "checked" | "checkedIcon" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge" | "inputProps" | "inputRef" | "indeterminate" | "indeterminateIcon">, "className" | "theme"> & {
      className?: string;
      theme?: import("@mui/system").DefaultTheme;
  }>>;
  export const RowCheckbox: React.MemoExoticComponent<import("@mui/styles").StyledComponent<Omit<import("@mui/material").CheckboxProps, "className" | "classes"> & import("@mui/styles").StyledComponentProps<"root"> & Omit<Pick<import("@mui/material").CheckboxProps, "color" | "translate" | "hidden" | "size" | "style" | "icon" | "disabled" | "id" | "form" | "slot" | "title" | "key" | "className" | "role" | "aria-label" | "value" | "classes" | "sx" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "name" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "readOnly" | "required" | "action" | "checked" | "checkedIcon" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge" | "inputProps" | "inputRef" | "indeterminate" | "indeterminateIcon">, "className" | "theme"> & {
      className?: string;
      theme?: import("@mui/system").DefaultTheme;
  }>>;
  export {};

}
declare module 'react-table-mui-ts/src/TableToolbar' {
  import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
  import { TableInstance } from 'react-table';
  export const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"toolbar" | "leftButtons" | "rightButtons" | "leftIcons" | "rightIcons">;
  type InstanceActionButton<T extends Record<string, unknown>> = {
      instance: TableInstance<T>;
      icon?: JSX.Element;
      onClick: any;
      enabled?: (instance: TableInstance<T>) => boolean;
      label: string;
      variant?: 'right' | 'left';
  };
  type ActionButton = {
      icon?: JSX.Element;
      onClick: MouseEventHandler;
      enabled?: boolean;
      label: string;
      variant?: 'right' | 'left';
  };
  export function InstanceLabeledActionButton<T extends Record<string, unknown>>({ instance, icon, onClick, label, enabled, }: InstanceActionButton<T>): ReactElement;
  export function LabeledActionButton({ icon, onClick, label, enabled, }: ActionButton): ReactElement;
  export function InstanceSmallIconActionButton<T extends Record<string, unknown>>({ instance, icon, onClick, label, enabled, variant, }: InstanceActionButton<T>): ReactElement;
  export function SmallIconActionButton({ icon, onClick, label, enabled, variant, }: ActionButton): ReactElement;
  type TableToolbarProps<T extends Record<string, unknown>> = {
      instance: TableInstance<T>;
      onAdd?: any;
      onDelete?: any;
      onEdit?: any;
  };
  export function TableToolbar<T extends Record<string, unknown>>({ instance, onAdd, onDelete, onEdit, }: PropsWithChildren<TableToolbarProps<T>>): ReactElement | null;
  export {};

}
declare module 'react-table-mui-ts/src/TooltipCell' {
  import React from 'react';
  import { CellProps } from 'react-table';
  export const TooltipCellRenderer: React.FC<CellProps<any>>;
  interface TooltipProps {
      text: string;
      tooltip?: string;
      align: string;
  }
  export const TooltipCell: React.FC<TooltipProps>;
  export {};

}
declare module 'react-table-mui-ts/src/filters/fuzzyFilter' {
  import { FilterValue, IdType, Row } from 'react-table';
  export function fuzzyTextFilter<T extends Record<string, unknown>>(rows: Array<Row<T>>, id: Array<IdType<T>>, filterValue: FilterValue): Array<Row<T>>;
  export namespace fuzzyTextFilter {
      var autoRemove: (val: any) => boolean;
  }

}
declare module 'react-table-mui-ts/src/filters/index' {
  export * from 'react-table-mui-ts/src/filters/fuzzyFilter';
  export * from 'react-table-mui-ts/src/filters/numericFilter';

}
declare module 'react-table-mui-ts/src/filters/numericFilter' {
  import { FilterValue, IdType, Row } from 'react-table';
  export function numericTextFilter<T extends Record<string, unknown>>(rows: Array<Row<T>>, id: Array<IdType<T>>, filterValue: FilterValue): Array<Row<T>>;
  export namespace numericTextFilter {
      var autoRemove: (val: any) => boolean;
  }

}
declare module 'react-table-mui-ts/src/tableHookUtils' {
  export function sum(arr: any[]): number;
  export function getFirstDefined(...args: any[]): any;

}
declare module 'react-table-mui-ts/utils/index' {
  export * from 'react-table-mui-ts/utils/object';
  export * from 'react-table-mui-ts/utils/useDebounce';
  export * from 'react-table-mui-ts/utils/useLocalStorage';

}
declare module 'react-table-mui-ts/utils/object' {
  export function toSnakeCase(object: any, exceptions?: string[]): any;
  export function toCamelCase(object: any, exceptions?: string[]): any;
  export function camelToWords(str: string): string;

}
declare module 'react-table-mui-ts/utils/useDebounce' {
  export function useDebounce(value: any, delay: number): any;

}
declare module 'react-table-mui-ts/utils/useLocalStorage' {
  export function useLocalStorage(key: string, initialValue: any): any[];

}
declare module 'react-table-mui-ts' {
  import main = require('react-table-mui-ts/index');
  export = main;
}