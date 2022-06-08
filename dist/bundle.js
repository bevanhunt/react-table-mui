import { Chip, Checkbox, Tooltip, IconButton, TablePagination as TablePagination$1, Popover, Typography, FormControlLabel, Button, Toolbar, TableSortLabel, TextField } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import cx from 'classnames';
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useTable, useColumnOrder, useFilters, useGroupBy, useSortBy, useExpanded, useFlexLayout, usePagination, useResizeColumns, useRowSelect } from 'react-table';
import { makeStyles, createStyles, styled } from '@mui/styles';
import { matchSorter } from 'match-sorter';
import MuiTableTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton$1 from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import LastPageIcon from '@mui/icons-material/LastPage';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnsIcon from '@mui/icons-material/ViewColumn';

// copied then trimmed from https://raw.githubusercontent.com/auth0/auth0.js/master/src/helper/object.js
function camelToWords(str) {
    let newKey = '';
    let index = 0;
    let code;
    let wasPrevNumber = true;
    let wasPrevUppercase = true;
    while(index < str.length){
        code = str.charCodeAt(index);
        if (index === 0) {
            newKey += str[index].toUpperCase();
        } else if (!wasPrevUppercase && code >= 65 && code <= 90 || !wasPrevNumber && code >= 48 && code <= 57) {
            newKey += ' ';
            newKey += str[index].toUpperCase();
        } else {
            newKey += str[index].toLowerCase();
        }
        wasPrevNumber = code >= 48 && code <= 57;
        wasPrevUppercase = code >= 65 && code <= 90;
        index++;
    }
    return newKey;
}

/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable import/prefer-default-export */ // credit to https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
// Our hook
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        // Set debouncedValue to value (passed in) after the specified delay
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        // Return a cleanup function that will be called every time ...
        // ... useEffect is re-called. useEffect will only be re-called ...
        // ... if value changes (see the inputs array below).
        // This is how we prevent debouncedValue from changing if value is ...
        // ... changed within the delay period. Timeout gets cleared and restarted.
        // To put it in context, if the user is typing within our app's ...
        // ... search box, we don't want the debouncedValue to update until ...
        // ... they've stopped typing for more than 500ms.
        return ()=>{
            clearTimeout(handler);
        };
    }, // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [
        value,
        delay
    ]);
    return debouncedValue;
}

/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable import/prefer-default-export */ // credits to https://usehooks.com/useLocalStorage/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(()=>{
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = useCallback((value)=>{
        try {
            // Save state
            setStoredValue(value);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    }, [
        key
    ]);
    return [
        storedValue,
        setValue
    ];
}

const useStyles$9 = makeStyles(createStyles({
    filtersActiveLabel: {
        color: '#998',
        fontSize: '14px',
        paddingRight: 10
    },
    chipZone: {
        padding: '18px 0 5px 10px',
        width: '100%'
    },
    chipLabel: {
        fontWeight: 500,
        marginRight: 5
    },
    filterChip: {
        marginRight: 4,
        color: '#222'
    }
}));
const getFilterValue = (column, filterValue)=>{
    switch(column.filter){
        case 'between':
            const min = filterValue[0];
            const max = filterValue[1];
            return min ? max ? `${min}-${max}` : `>=${min}` : `<=${max}`;
    }
    return filterValue;
};
function FilterChipBar({ instance  }) {
    const classes = useStyles$9({});
    const { allColumns , setFilter , state: { filters  } ,  } = instance;
    const handleDelete = useCallback((id)=>{
        setFilter(id, undefined);
    }, [
        setFilter
    ]);
    return Object.keys(filters).length > 0 ? /*#__PURE__*/ React.createElement("div", {
        className: classes.chipZone
    }, /*#__PURE__*/ React.createElement("span", {
        className: classes.filtersActiveLabel
    }, "Active filters:"), filters && allColumns.map((column)=>{
        const filter = filters.find((f)=>f.id === column.id);
        const value = filter && filter.value;
        return value && /*#__PURE__*/ React.createElement(Chip, {
            className: classes.filterChip,
            key: column.id,
            label: /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("span", {
                className: classes.chipLabel
            }, column.render('Header'), ":", ' '), getFilterValue(column, value)),
            onDelete: ()=>handleDelete(column.id),
            variant: "outlined"
        });
    })) : null;
}

function fuzzyTextFilter(rows, id, filterValue) {
    return matchSorter(rows, filterValue, {
        keys: [
            (row)=>row.values[id[0]]
        ]
    });
}
// Let the table remove the filter if the string is empty
fuzzyTextFilter.autoRemove = (val)=>!val;

const regex = /([=<>!]*)\s*((?:[0-9].?[0-9]*)+)/;
function parseValue(filterValue) {
    // eslint-disable-next-line eqeqeq
    const defaultComparator = (val)=>val == filterValue;
    const tokens = regex.exec(filterValue);
    if (!tokens) {
        return defaultComparator;
    }
    switch(tokens[1]){
        case '>':
            return (val)=>parseFloat(val) > parseFloat(tokens[2]);
        case '<':
            return (val)=>parseFloat(val) < parseFloat(tokens[2]);
        case '<=':
            return (val)=>parseFloat(val) <= parseFloat(tokens[2]);
        case '>=':
            return (val)=>parseFloat(val) >= parseFloat(tokens[2]);
        case '=':
            return (val)=>parseFloat(val) === parseFloat(tokens[2]);
        case '!':
            return (val)=>parseFloat(val) !== parseFloat(tokens[2]);
    }
    return defaultComparator;
}
function numericTextFilter(rows, id, filterValue) {
    const comparator = parseValue(filterValue);
    return rows.filter((row)=>comparator(row.values[id[0]]));
}
// Let the table remove the filter if the string is empty
numericTextFilter.autoRemove = (val)=>!val;

function _extends$2() {
    _extends$2 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$2.apply(this, arguments);
}
const useStyles$8 = makeStyles((theme)=>createStyles({
        tableTable: {
            borderSpacing: 0,
            border: '1px solid rgba(224, 224, 224, 1)',
            width: '100%'
        },
        tableHead: {},
        tableHeadRow: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
            '&:hover $resizeHandle': {
                opacity: 1
            }
        },
        tableHeadCell: {
            padding: '16px 1px 16px 16px',
            fontSize: '0.875rem',
            textAlign: 'left',
            verticalAlign: 'inherit',
            color: theme.palette.text.primary,
            fontWeight: 500,
            lineHeight: '1.5rem',
            borderRight: '1px solid rgba(224, 224, 224, 1)',
            '&:last-child': {
                borderRight: 'none'
            }
        },
        tableBody: {},
        tableRow: {
            color: 'inherit',
            outline: 0,
            verticalAlign: 'middle',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.07)'
            },
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
            '&:last-child': {
                borderBottom: 'none'
            },
            '&.rowSelected': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.07)'
                }
            },
            '&.clickable': {
                cursor: 'pointer'
            }
        },
        tableLabel: {},
        tableCell: {
            padding: '8px 16px',
            fontSize: '0.875rem',
            textAlign: 'left',
            fontWeight: 300,
            lineHeight: 1.3,
            verticalAlign: 'inherit',
            color: theme.palette.text.primary,
            borderRight: '1px solid rgba(224, 224, 224, 1)',
            '&:last-child': {
                borderRight: 'none'
            }
        },
        resizeHandle: {
            position: 'absolute',
            cursor: 'col-resize',
            zIndex: 100,
            opacity: 0,
            borderLeft: `1px solid ${theme.palette.primary.light}`,
            borderRight: `1px solid ${theme.palette.primary.light}`,
            height: '50%',
            top: '25%',
            transition: 'all linear 100ms',
            right: -2,
            width: 3,
            '&.handleActive': {
                opacity: 1,
                border: 'none',
                backgroundColor: theme.palette.primary.light,
                height: 'calc(100% - 4px)',
                top: '2px',
                right: -1,
                width: 1
            }
        },
        tableSortLabel: {
            '& svg': {
                width: 16,
                height: 16,
                marginTop: 0,
                marginLeft: 2
            }
        },
        headerIcon: {
            '& svg': {
                width: 16,
                height: 16,
                marginTop: 4,
                marginRight: 0
            }
        },
        iconDirectionAsc: {
            transform: 'rotate(90deg)'
        },
        iconDirectionDesc: {
            transform: 'rotate(180deg)'
        },
        cellIcon: {
            '& svg': {
                width: 16,
                height: 16,
                marginTop: 3
            }
        }
    }));
const areEqual = (prevProps, nextProps)=>prevProps.checked === nextProps.checked && prevProps.indeterminate === nextProps.indeterminate;
const TableTable = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableTable, _extends$2({
        className: cx(className, classes.tableTable)
    }, rest), children);
};
const TableBody = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableBody, _extends$2({
        className: cx(className, classes.tableBody)
    }, rest), children);
};
const TableHead = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableHead, _extends$2({
        className: cx(className, classes.tableHead)
    }, rest), children);
};
const TableHeadRow = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableRow, _extends$2({
        className: cx(className, classes.tableHeadRow)
    }, rest), children);
};
const TableHeadCell = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableCell, _extends$2({
        className: cx(className, classes.tableHeadCell)
    }, rest), children);
};
const TableRow = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableRow, _extends$2({
        className: cx(className, classes.tableRow)
    }, rest), children);
};
const TableCell = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement(MuiTableCell, _extends$2({
        className: cx(className, classes.tableCell)
    }, rest), children);
};
const TableLabel = ({ children , className , ...rest })=>{
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement("div", _extends$2({
        className: cx(className, classes.tableLabel)
    }, rest), children);
};
const HeaderCheckbox = /*#__PURE__*/ React.memo(styled(Checkbox)({
    fontSize: '1rem',
    margin: '-8px 0 -8px -15px',
    padding: '8px 9px',
    '& svg': {
        width: '24px',
        height: '24px'
    },
    '&:hover': {
        backgroundColor: 'transparent'
    }
}), areEqual);
const RowCheckbox = /*#__PURE__*/ React.memo(styled(Checkbox)({
    fontSize: '14px',
    margin: '-9px 0 -8px -15px',
    padding: '5px 9px',
    '&:hover': {
        backgroundColor: 'transparent'
    },
    '& svg': {
        width: 24,
        height: 24
    }
}), areEqual);

function _extends$1() {
    _extends$1 = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends$1.apply(this, arguments);
}
function ResizeHandle({ column  }) {
    const classes = useStyles$8();
    return /*#__PURE__*/ React.createElement("div", _extends$1({}, column.getResizerProps(), {
        style: {
            cursor: 'col-resize'
        },
        className: cx({
            [classes.resizeHandle]: true,
            handleActive: column.isResizing
        })
    }));
}

const useStyles$7 = makeStyles((theme)=>createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: '1 0 auto'
        },
        progress: {
            margin: theme.spacing(2)
        }
    }));
const Loader = ({ error , retry , timedOut , pastDelay ,  })=>{
    const classes = useStyles$7();
    return /*#__PURE__*/ React.createElement("div", {
        className: classes.root
    }, error && /*#__PURE__*/ React.createElement("div", null, "Error!", ' ', /*#__PURE__*/ React.createElement("button", {
        onClick: retry
    }, "Retry")), timedOut && /*#__PURE__*/ React.createElement("div", null, "Taking a long time...", ' ', /*#__PURE__*/ React.createElement("button", {
        onClick: retry
    }, "Retry")), pastDelay && /*#__PURE__*/ React.createElement("div", null, "Loading..."), /*#__PURE__*/ React.createElement(CircularProgress, {
        className: classes.progress
    }));
};

const ReactJson = /*#__PURE__*/ React.lazy(()=>import('react-json-view'));
const useStyles$6 = makeStyles(createStyles({
    button: {
        marginTop: -72,
        marginLeft: 0
    }
}));
const TableDebug = ({ enabled , instance  })=>{
    const [open, setOpen] = useState(false);
    const classes = useStyles$6();
    return enabled ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Tooltip, {
        title: "Debug"
    }, /*#__PURE__*/ React.createElement("span", null, /*#__PURE__*/ React.createElement(IconButton, {
        className: cx({
            [classes.button]: instance?.rows?.length
        }),
        onClick: ()=>setOpen((old)=>!old)
    }, /*#__PURE__*/ React.createElement(BugReportTwoToneIcon, null)))), open && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(Loader, null)
    }, /*#__PURE__*/ React.createElement(ReactJson, {
        src: {
            ...instance
        },
        collapsed: 1,
        indentWidth: 2,
        sortKeys: true
    })))) : null;
};

const rowsPerPageOptions = [
    10,
    25,
    50
];
// avoid all of the redraws caused by the internal withStyles
const interestingPropsEqual = (prevProps, nextProps)=>prevProps.count === nextProps.count && prevProps.rowsPerPage === nextProps.rowsPerPage && prevProps.page === nextProps.page && prevProps.onChangePage === nextProps.onChangePage && prevProps.onChangeRowsPerPage === nextProps.onChangeRowsPerPage;
const MuiTablePagination = /*#__PURE__*/ React.memo(TablePagination$1, interestingPropsEqual);
const useStyles$5 = makeStyles((theme)=>createStyles({
        root: {
            flexShrink: 0,
            marginLeft: theme.spacing(2.5)
        }
    }));
function TablePaginationActions(props) {
    const classes = useStyles$5();
    const { count , page , rowsPerPage , onPageChange ,  } = props;
    const handleFirstPageButtonClick = (event)=>{
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event)=>{
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event)=>{
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event)=>{
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: classes.root
    }, /*#__PURE__*/ React.createElement(IconButton$1, {
        onClick: handleFirstPageButtonClick,
        disabled: page === 0,
        "aria-label": "first page"
    }, /*#__PURE__*/ React.createElement(FirstPageIcon, null)), /*#__PURE__*/ React.createElement(IconButton$1, {
        onClick: handleBackButtonClick,
        disabled: page === 0,
        "aria-label": "previous page"
    }, /*#__PURE__*/ React.createElement(KeyboardArrowLeft, null)), /*#__PURE__*/ React.createElement(IconButton$1, {
        onClick: handleNextButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        "aria-label": "next page"
    }, /*#__PURE__*/ React.createElement(KeyboardArrowRight, null)), /*#__PURE__*/ React.createElement(IconButton$1, {
        onClick: handleLastPageButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        "aria-label": "last page"
    }, /*#__PURE__*/ React.createElement(LastPageIcon, null)));
}
function TablePagination({ instance  }) {
    const { state: { pageIndex , pageSize , rowCount =instance.rows.length  } , gotoPage , nextPage , previousPage , setPageSize ,  } = instance;
    const handleChangePage = useCallback((event, newPage)=>{
        if (newPage === pageIndex + 1) {
            nextPage();
        } else if (newPage === pageIndex - 1) {
            previousPage();
        } else {
            gotoPage(newPage);
        }
    }, [
        gotoPage,
        nextPage,
        pageIndex,
        previousPage
    ]);
    const onChangeRowsPerPage = useCallback((e)=>{
        setPageSize(Number(e.target.value));
    }, [
        setPageSize
    ]);
    return rowCount ? /*#__PURE__*/ React.createElement(MuiTablePagination, {
        sx: {
            '.MuiTablePagination-selectLabel': {
                paddingTop: '12px'
            },
            '.MuiTablePagination-displayedRows': {
                paddingTop: '15px'
            }
        },
        rowsPerPageOptions: rowsPerPageOptions,
        component: "div",
        count: rowCount,
        rowsPerPage: pageSize,
        page: pageIndex,
        onPageChange: handleChangePage,
        onRowsPerPageChange: onChangeRowsPerPage,
        ActionsComponent: TablePaginationActions
    }) : null;
}

const useStyles$4 = makeStyles(createStyles({
    columnsPopOver: {
        padding: 24
    },
    popoverTitle: {
        fontWeight: 500,
        padding: '0 24px 24px 0',
        textTransform: 'uppercase'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 198px)',
        '@media (max-width: 600px)': {
            gridTemplateColumns: 'repeat(1, 160px)'
        },
        gridColumnGap: 6,
        gridRowGap: 6
    }
}));
const id = 'popover-column-hide';
function ColumnHidePage({ instance , anchorEl , onClose , show  }) {
    const classes = useStyles$4({});
    const { allColumns , toggleHideColumn  } = instance;
    const hideableColumns = allColumns.filter((column)=>!(column.id === '_selector'));
    const checkedCount = hideableColumns.reduce((acc, val)=>acc + (val.isVisible ? 0 : 1), 0);
    const onlyOneOptionLeft = checkedCount + 1 >= hideableColumns.length;
    return hideableColumns.length > 1 ? /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(Popover, {
        anchorEl: anchorEl,
        className: classes.columnsPopOver,
        id: id,
        onClose: onClose,
        open: show,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    }, /*#__PURE__*/ React.createElement("div", {
        className: classes.columnsPopOver
    }, /*#__PURE__*/ React.createElement(Typography, {
        className: classes.popoverTitle
    }, "Visible Columns"), /*#__PURE__*/ React.createElement("div", {
        className: classes.grid
    }, hideableColumns.map((column)=>/*#__PURE__*/ React.createElement(FormControlLabel, {
            key: column.id,
            control: /*#__PURE__*/ React.createElement(Checkbox, {
                value: `${column.id}`,
                disabled: column.isVisible && onlyOneOptionLeft
            }),
            label: column.render('Header'),
            checked: column.isVisible,
            onChange: ()=>toggleHideColumn(column.id, column.isVisible)
        })))))) : null;
}

const useStyles$3 = makeStyles(createStyles({
    columnsPopOver: {
        padding: 24
    },
    filtersResetButton: {
        position: 'absolute',
        top: 18,
        right: 21
    },
    popoverTitle: {
        fontWeight: 500,
        padding: '0 24px 24px 0',
        textTransform: 'uppercase'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 218px)',
        '@media (max-width: 600px)': {
            gridTemplateColumns: 'repeat(1, 180px)'
        },
        gridColumnGap: 24,
        gridRowGap: 24
    },
    cell: {
        width: '100%',
        display: 'inline-flex',
        flexDirection: 'column'
    },
    hidden: {
        display: 'none'
    }
}));
function FilterPage({ instance , anchorEl , onClose , show  }) {
    const classes = useStyles$3({});
    const { allColumns , setAllFilters  } = instance;
    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        onClose();
    }, [
        onClose
    ]);
    const resetFilters = useCallback(()=>{
        setAllFilters([]);
    }, [
        setAllFilters
    ]);
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(Popover, {
        anchorEl: anchorEl,
        id: "popover-filters",
        onClose: onClose,
        open: show,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    }, /*#__PURE__*/ React.createElement("div", {
        className: classes.columnsPopOver
    }, /*#__PURE__*/ React.createElement(Typography, {
        className: classes.popoverTitle
    }, "Filters"), /*#__PURE__*/ React.createElement("form", {
        onSubmit: onSubmit
    }, /*#__PURE__*/ React.createElement(Button, {
        className: classes.filtersResetButton,
        color: "primary",
        onClick: resetFilters
    }, "Reset"), /*#__PURE__*/ React.createElement("div", {
        className: classes.grid
    }, allColumns.filter((it)=>it.canFilter).map((column)=>/*#__PURE__*/ React.createElement("div", {
            key: column.id,
            className: classes.cell
        }, column.render('Filter')))), /*#__PURE__*/ React.createElement(Button, {
        className: classes.hidden,
        type: "submit"
    }, "\xa0")))));
}

const useStyles$2 = makeStyles(()=>createStyles({
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        leftButtons: {},
        rightButtons: {},
        leftIcons: {
            '&:first-of-type': {
                marginLeft: -12
            }
        },
        rightIcons: {
            padding: 12,
            marginTop: '-6px',
            width: 48,
            height: 48,
            '&:last-of-type': {
                marginRight: -12
            }
        }
    }));
function InstanceSmallIconActionButton({ instance , icon , onClick , label , enabled =()=>true , variant  }) {
    const classes = useStyles$2({});
    return /*#__PURE__*/ React.createElement(Tooltip, {
        title: label,
        "aria-label": label
    }, /*#__PURE__*/ React.createElement("span", null, /*#__PURE__*/ React.createElement(IconButton, {
        className: cx({
            [classes.rightIcons]: variant === 'right',
            [classes.leftIcons]: variant === 'left'
        }),
        onClick: onClick(instance),
        disabled: !enabled(instance)
    }, icon)));
}
function SmallIconActionButton({ icon , onClick , label , enabled =true , variant  }) {
    const classes = useStyles$2({});
    return /*#__PURE__*/ React.createElement(Tooltip, {
        title: label,
        "aria-label": label
    }, /*#__PURE__*/ React.createElement("span", null, /*#__PURE__*/ React.createElement(IconButton, {
        className: cx({
            [classes.rightIcons]: variant === 'right',
            [classes.leftIcons]: variant === 'left'
        }),
        onClick: onClick,
        disabled: !enabled
    }, icon)));
}
function TableToolbar({ instance , onAdd , onDelete , onEdit  }) {
    const { columns  } = instance;
    const classes = useStyles$2();
    const [anchorEl, setAnchorEl] = useState(undefined);
    const [columnsOpen, setColumnsOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const hideableColumns = columns.filter((column)=>!(column.id === '_selector'));
    const handleColumnsClick = useCallback((event)=>{
        setAnchorEl(event.currentTarget);
        setColumnsOpen(true);
    }, [
        setAnchorEl,
        setColumnsOpen
    ]);
    const handleFilterClick = useCallback((event)=>{
        setAnchorEl(event.currentTarget);
        setFilterOpen(true);
    }, [
        setAnchorEl,
        setFilterOpen
    ]);
    const handleClose = useCallback(()=>{
        setColumnsOpen(false);
        setFilterOpen(false);
        setAnchorEl(undefined);
    }, []);
    // toolbar with add, edit, delete, filter/search column select.
    return /*#__PURE__*/ React.createElement(Toolbar, {
        className: classes.toolbar
    }, /*#__PURE__*/ React.createElement("div", {
        className: classes.leftButtons
    }, onAdd && /*#__PURE__*/ React.createElement(InstanceSmallIconActionButton, {
        instance: instance,
        icon: /*#__PURE__*/ React.createElement(AddIcon, null),
        onClick: onAdd,
        label: "Add",
        enabled: ({ state  })=>!state.selectedRowIds || Object.keys(state.selectedRowIds).length === 0,
        variant: "left"
    }), onEdit && /*#__PURE__*/ React.createElement(InstanceSmallIconActionButton, {
        instance: instance,
        icon: /*#__PURE__*/ React.createElement(CreateIcon, null),
        onClick: onEdit,
        label: "Edit",
        enabled: ({ state  })=>state.selectedRowIds && Object.keys(state.selectedRowIds).length === 1,
        variant: "left"
    }), onDelete && /*#__PURE__*/ React.createElement(InstanceSmallIconActionButton, {
        instance: instance,
        icon: /*#__PURE__*/ React.createElement(DeleteIcon, null),
        onClick: onDelete,
        label: "Delete",
        enabled: ({ state  })=>state.selectedRowIds && Object.keys(state.selectedRowIds).length > 0,
        variant: "left"
    })), /*#__PURE__*/ React.createElement("div", {
        className: classes.rightButtons
    }, /*#__PURE__*/ React.createElement(ColumnHidePage, {
        instance: instance,
        onClose: handleClose,
        show: columnsOpen,
        anchorEl: anchorEl
    }), /*#__PURE__*/ React.createElement(FilterPage, {
        instance: instance,
        onClose: handleClose,
        show: filterOpen,
        anchorEl: anchorEl
    }), hideableColumns.length > 1 && /*#__PURE__*/ React.createElement(SmallIconActionButton, {
        icon: /*#__PURE__*/ React.createElement(ViewColumnsIcon, null),
        onClick: handleColumnsClick,
        label: "Show / hide columns",
        variant: "right"
    }), /*#__PURE__*/ React.createElement(SmallIconActionButton, {
        icon: /*#__PURE__*/ React.createElement(FilterListIcon, null),
        onClick: handleFilterClick,
        label: "Filter by columns",
        variant: "right"
    })));
}

const useStyles$1 = makeStyles({
    truncated: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }
});
const TooltipCellRenderer = ({ cell: { value  } , column: { align ='left'  }  })=>/*#__PURE__*/ React.createElement(TooltipCell, {
        text: value,
        align: align
    });
const TooltipCell = ({ text , tooltip =text , align  })=>{
    const classes = useStyles$1({});
    return /*#__PURE__*/ React.createElement(Tooltip, {
        title: tooltip,
        className: classes.truncated,
        style: {
            textAlign: align
        }
    }, /*#__PURE__*/ React.createElement("span", null, text));
};

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const DefaultHeader = ({ column  })=>/*#__PURE__*/ React.createElement(React.Fragment, null, column.id.startsWith('_') ? null : camelToWords(column.id));
// yes this is recursive, but the depth never exceeds three so it seems safe enough
const findFirstColumn = (columns)=>columns[0].columns ? findFirstColumn(columns[0].columns) : columns[0];
function DefaultColumnFilter({ columns , column  }) {
    const { id , filterValue , setFilter , render ,  } = column;
    const [value, setValue] = React.useState(filterValue || '');
    const handleChange = (event)=>{
        setValue(event.target.value);
    };
    // ensure that reset loads the new value
    useEffect(()=>{
        setValue(filterValue || '');
    }, [
        filterValue
    ]);
    const isFirstColumn = findFirstColumn(columns) === column;
    return /*#__PURE__*/ React.createElement(TextField, {
        name: id,
        label: render('Header'),
        InputLabelProps: {
            htmlFor: id
        },
        value: value,
        autoFocus: isFirstColumn,
        variant: "standard",
        onChange: handleChange,
        onBlur: (e)=>{
            setFilter(e.target.value || undefined);
        }
    });
}
const getStyles = (props, disableResizing = false, align = 'left')=>[
        props,
        {
            style: {
                justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                display: 'flex'
            }
        }, 
    ];
const selectionHook = (hooks1)=>{
    hooks1.allColumns.push((columns)=>[
            // Let's make a column for selection
            {
                id: '_selector',
                disableResizing: true,
                disableGroupBy: true,
                minWidth: 45,
                width: 45,
                maxWidth: 45,
                Aggregated: undefined,
                // The header can use the table's getToggleAllRowsSelectedProps method
                // to render a checkbox
                Header: ({ getToggleAllRowsSelectedProps  })=>/*#__PURE__*/ React.createElement(HeaderCheckbox, _extends({}, getToggleAllRowsSelectedProps())),
                // The cell can use the individual row's getToggleRowSelectedProps method
                // to the render a checkbox
                Cell: ({ row  })=>/*#__PURE__*/ React.createElement(RowCheckbox, _extends({}, row.getToggleRowSelectedProps()))
            },
            ...columns, 
        ]);
    hooks1.useInstanceBeforeDimensions.push(({ headerGroups  })=>{
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0];
        selectionGroupHeader.canResize = false;
    });
};
const headerProps = (props, { column  })=>getStyles(props, column && column.disableResizing, column && column.align);
const cellProps = (props, { cell  })=>getStyles(props, cell.column && cell.column.disableResizing, cell.column && cell.column.align);
const defaultColumn = {
    Filter: DefaultColumnFilter,
    Cell: TooltipCellRenderer,
    Header: DefaultHeader,
    // When using the useFlexLayout:
    minWidth: 30,
    width: 150,
    maxWidth: 200
};
const hooks = [
    useColumnOrder,
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useFlexLayout,
    usePagination,
    useResizeColumns,
    useRowSelect,
    selectionHook, 
];
const filterTypes = {
    fuzzyText: fuzzyTextFilter,
    numeric: numericTextFilter
};
function Table(props) {
    const { name , columns , onAdd , onDelete , onEdit , onClick ,  } = props;
    const classes = useStyles$8();
    const [initialState, setInitialState] = useLocalStorage(`tableState:${name}`, {});
    const instance = useTable({
        ...props,
        columns,
        filterTypes,
        defaultColumn,
        initialState: {
            hiddenColumns: columns.filter((col)=>col.show === false).map((col)=>col.id || col.accessor)
        }
    }, ...hooks);
    const { getTableProps , headerGroups , getTableBodyProps , page , prepareRow , state ,  } = instance;
    const debouncedState = useDebounce(state, 500);
    useEffect(()=>{
        const { sortBy , filters , pageSize , columnResizing , hiddenColumns ,  } = debouncedState;
        const val = {
            sortBy,
            filters,
            pageSize,
            columnResizing,
            hiddenColumns
        };
        setInitialState(val);
    }, [
        setInitialState,
        debouncedState
    ]);
    const cellClickHandler = (cell)=>()=>{
            onClick && !cell.column.isGrouped && !cell.row.isGrouped && cell.column.id !== '_selector' && onClick(cell.row);
        };
    const { role: tableRole , ...tableProps } = getTableProps();
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(TableToolbar, _extends({
        instance: instance
    }, {
        onAdd,
        onDelete,
        onEdit
    })), /*#__PURE__*/ React.createElement(FilterChipBar, {
        instance: instance
    }), /*#__PURE__*/ React.createElement(TableTable, _extends({}, tableProps), /*#__PURE__*/ React.createElement(TableHead, null, headerGroups.map((headerGroup)=>{
        const { key: headerGroupKey , title: headerGroupTitle , role: headerGroupRole , ...getHeaderGroupProps } = headerGroup.getHeaderGroupProps();
        return /*#__PURE__*/ React.createElement(TableHeadRow, _extends({
            key: headerGroupKey
        }, getHeaderGroupProps), headerGroup.headers.map((column)=>{
            const style = {
                textAlign: column.align ? column.align : 'left '
            };
            const { key: headerKey , role: headerRole , ...getHeaderProps } = column.getHeaderProps(headerProps);
            const { title: groupTitle = '' , ...columnGroupByProps } = column.getGroupByToggleProps();
            const { title: sortTitle = '' , ...columnSortByProps } = column.getSortByToggleProps();
            return /*#__PURE__*/ React.createElement(TableHeadCell, _extends({
                key: headerKey
            }, getHeaderProps), column.canGroupBy && /*#__PURE__*/ React.createElement(Tooltip, {
                title: groupTitle
            }, /*#__PURE__*/ React.createElement(TableSortLabel, _extends({
                active: true,
                direction: column.isGrouped ? 'desc' : 'asc',
                IconComponent: KeyboardArrowRight
            }, columnGroupByProps, {
                className: classes.headerIcon
            }))), column.canSort ? /*#__PURE__*/ React.createElement(Tooltip, {
                title: sortTitle
            }, /*#__PURE__*/ React.createElement(TableSortLabel, _extends({
                active: column.isSorted,
                direction: column.isSortedDesc ? 'desc' : 'asc'
            }, columnSortByProps, {
                className: classes.tableSortLabel,
                style: style
            }), column.render('Header'))) : /*#__PURE__*/ React.createElement(TableLabel, {
                style: style
            }, column.render('Header')), column.canResize && /*#__PURE__*/ React.createElement(ResizeHandle, {
                column: column
            }));
        }));
    })), /*#__PURE__*/ React.createElement(TableBody, _extends({}, getTableBodyProps()), page.map((row)=>{
        prepareRow(row);
        const { key: rowKey , role: rowRole , ...getRowProps } = row.getRowProps();
        return /*#__PURE__*/ React.createElement(TableRow, _extends({
            key: rowKey
        }, getRowProps, {
            className: cx({
                rowSelected: row.isSelected,
                clickable: onClick
            })
        }), row.cells.map((cell)=>{
            const { key: cellKey , role: cellRole , ...getCellProps } = cell.getCellProps(cellProps);
            return /*#__PURE__*/ React.createElement(TableCell, _extends({
                key: cellKey
            }, getCellProps, {
                onClick: cellClickHandler(cell)
            }), cell.isGrouped ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(TableSortLabel, _extends({
                classes: {
                    iconDirectionAsc: classes.iconDirectionAsc,
                    iconDirectionDesc: classes.iconDirectionDesc
                },
                active: true,
                direction: row.isExpanded ? 'desc' : 'asc',
                IconComponent: KeyboardArrowUp
            }, row.getToggleRowExpandedProps(), {
                className: classes.cellIcon
            })), ' ', cell.render('Cell', {
                editable: false
            }), ' ', "(", row.subRows.length, ")") : cell.isAggregated ? cell.render('Aggregated') : cell.isPlaceholder ? null : cell.render('Cell'));
        }));
    }))), /*#__PURE__*/ React.createElement(TablePagination, {
        instance: instance
    }), /*#__PURE__*/ React.createElement(TableDebug, {
        enabled: false,
        instance: instance
    }));
}

const useStyles = makeStyles((theme)=>createStyles({
        main: {
            background: '#FFFFFF',
            position: 'relative',
            zIndex: 3,
            margin: '10px 20px 0px',
            borderRadius: '6px',
            boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
            padding: theme.spacing(3)
        }
    }));
const Page = ({ children , className  })=>{
    const classes = useStyles();
    return /*#__PURE__*/ React.createElement("div", {
        className: cx(classes.main, className)
    }, children);
};

export { Loader, Page, Table };
