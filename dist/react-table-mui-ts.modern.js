import { Chip, Checkbox, TablePagination as TablePagination$1, Popover, Typography, FormControlLabel, Button, Toolbar, Tooltip, IconButton as IconButton$1, TableSortLabel, TextField } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import cx from 'classnames';
import React, { useState, useEffect, useCallback } from 'react';
import { useTable, useColumnOrder, useFilters, useGroupBy, useSortBy, useExpanded, useFlexLayout, usePagination, useResizeColumns, useRowSelect } from 'react-table';
import { makeStyles, createStyles, styled } from '@mui/styles';
import { matchSorter } from 'match-sorter';
import { createTheme } from '@mui/system';
import MuiTableTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import LastPageIcon from '@mui/icons-material/LastPage';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnsIcon from '@mui/icons-material/ViewColumn';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// copied then trimmed from https://raw.githubusercontent.com/auth0/auth0.js/master/src/helper/object.js
function camelToWords(str) {
  var newKey = '';
  var index = 0;
  var code;
  var wasPrevNumber = true;
  var wasPrevUppercase = true;

  while (index < str.length) {
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

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState = useState(value),
      debouncedValue = _useState[0],
      setDebouncedValue = _useState[1];

  useEffect(function () {
    // Set debouncedValue to value (passed in) after the specified delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Return a cleanup function that will be called every time ...
    // ... useEffect is re-called. useEffect will only be re-called ...
    // ... if value changes (see the inputs array below).
    // This is how we prevent debouncedValue from changing if value is ...
    // ... changed within the delay period. Timeout gets cleared and restarted.
    // To put it in context, if the user is typing within our app's ...
    // ... search box, we don't want the debouncedValue to update until ...
    // ... they've stopped typing for more than 500ms.

    return function () {
      clearTimeout(handler);
    };
  }, // Only re-call effect if value changes
  // You could also add the "delay" var to inputs array if you ...
  // ... need to be able to change that dynamically.
  [value, delay]);
  return debouncedValue;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  var _useState = useState(function () {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      // Get from local storage by key
      var item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  }),
      storedValue = _useState[0],
      setStoredValue = _useState[1]; // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.


  var setValue = useCallback(function (value) {
    try {
      // Save state
      setStoredValue(value); // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [key]);
  return [storedValue, setValue];
}

/* eslint-disable import/prefer-default-export */
var useStyles$5 = makeStyles(createStyles({
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

var getFilterValue = function getFilterValue(column, filterValue) {
  switch (column.filter) {
    case 'between':
      var min = filterValue[0];
      var max = filterValue[1];
      return min ? max ? min + "-" + max : ">=" + min : "<=" + max;
  }

  return filterValue;
};

function FilterChipBar(_ref) {
  var instance = _ref.instance;
  var classes = useStyles$5({});
  var allColumns = instance.allColumns,
      setFilter = instance.setFilter,
      filters = instance.state.filters;
  var handleDelete = useCallback(function (id) {
    setFilter(id, undefined);
  }, [setFilter]);
  return Object.keys(filters).length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: classes.chipZone
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.filtersActiveLabel
  }, "Active filters:"), filters && allColumns.map(function (column) {
    var filter = filters.find(function (f) {
      return f.id === column.id;
    });
    var value = filter && filter.value;
    return value && /*#__PURE__*/React.createElement(Chip, {
      className: classes.filterChip,
      key: column.id,
      label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: classes.chipLabel
      }, column.render('Header'), ":", ' '), getFilterValue(column, value)),
      onDelete: function onDelete() {
        return handleDelete(column.id);
      },
      variant: "outlined"
    });
  })) : null;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function fuzzyTextFilter(rows, id, filterValue) {
  return matchSorter(rows, filterValue, {
    keys: [function (row) {
      return row.values[id[0]];
    }]
  });
} // Let the table remove the filter if the string is empty

fuzzyTextFilter.autoRemove = function (val) {
  return !val;
};

var regex = /([=<>!]*)\s*((?:[0-9].?[0-9]*)+)/;

function parseValue(filterValue) {
  // eslint-disable-next-line eqeqeq
  var defaultComparator = function defaultComparator(val) {
    return val == filterValue;
  };

  var tokens = regex.exec(filterValue);

  if (!tokens) {
    return defaultComparator;
  }

  switch (tokens[1]) {
    case '>':
      return function (val) {
        return parseFloat(val) > parseFloat(tokens[2]);
      };

    case '<':
      return function (val) {
        return parseFloat(val) < parseFloat(tokens[2]);
      };

    case '<=':
      return function (val) {
        return parseFloat(val) <= parseFloat(tokens[2]);
      };

    case '>=':
      return function (val) {
        return parseFloat(val) >= parseFloat(tokens[2]);
      };

    case '=':
      return function (val) {
        return parseFloat(val) === parseFloat(tokens[2]);
      };

    case '!':
      return function (val) {
        return parseFloat(val) !== parseFloat(tokens[2]);
      };
  }

  return defaultComparator;
}

function numericTextFilter(rows, id, filterValue) {
  var comparator = parseValue(filterValue);
  return rows.filter(function (row) {
    return comparator(row.values[id[0]]);
  });
} // Let the table remove the filter if the string is empty

numericTextFilter.autoRemove = function (val) {
  return !val;
};

var _excluded$1 = ["children", "className"],
    _excluded2$1 = ["children", "className"],
    _excluded3$1 = ["children", "className"],
    _excluded4$1 = ["children", "className"],
    _excluded5$1 = ["children", "className"],
    _excluded6$1 = ["children", "className"],
    _excluded7$1 = ["children", "className"],
    _excluded8 = ["children", "className"];
var useStyles$4 = makeStyles(function (theme) {
  return createStyles({
    tableTable: {
      borderSpacing: 0,
      border: '1px solid rgba(224, 224, 224, 1)',
      width: '100%'
    },
    tableHead: {},
    tableHeadRow: {
      // backgroundColor: theme.palette.background.paper,
      // color: theme.palette.text.primary,
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
      // color: theme.palette.text.primary,
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
      // color: theme.palette.text.primary,
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
      // borderLeft: `1px solid ${theme.palette.primary.light}`,
      // borderRight: `1px solid ${theme.palette.primary.light}`,
      height: '50%',
      top: '25%',
      transition: 'all linear 100ms',
      right: -2,
      width: 3,
      '&.handleActive': {
        opacity: 1,
        border: 'none',
        // backgroundColor: theme.palette.primary.light,
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
  });
});

var areEqual = function areEqual(prevProps, nextProps) {
  return prevProps.checked === nextProps.checked && prevProps.indeterminate === nextProps.indeterminate;
};

createTheme();
var TableTable = function TableTable(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableTable, _extends({
    className: cx(className, classes.tableTable)
  }, rest), children);
};
var TableBody = function TableBody(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableBody, _extends({
    className: cx(className, classes.tableBody)
  }, rest), children);
};
var TableHead = function TableHead(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded3$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableHead, _extends({
    className: cx(className, classes.tableHead)
  }, rest), children);
};
var TableHeadRow = function TableHeadRow(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded4$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableRow, _extends({
    className: cx(className, classes.tableHeadRow)
  }, rest), children);
};
var TableHeadCell = function TableHeadCell(_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded5$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableCell, _extends({
    className: cx(className, classes.tableHeadCell)
  }, rest), children);
};
var TableRow = function TableRow(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      rest = _objectWithoutPropertiesLoose(_ref6, _excluded6$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableRow, _extends({
    className: cx(className, classes.tableRow)
  }, rest), children);
};
var TableCell = function TableCell(_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      rest = _objectWithoutPropertiesLoose(_ref7, _excluded7$1);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(MuiTableCell, _extends({
    className: cx(className, classes.tableCell)
  }, rest), children);
};
var TableLabel = function TableLabel(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      rest = _objectWithoutPropertiesLoose(_ref8, _excluded8);

  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(className, classes.tableLabel)
  }, rest), children);
};
var HeaderCheckbox = React.memo(styled(Checkbox)({
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
var RowCheckbox = React.memo(styled(Checkbox)({
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

function ResizeHandle(_ref) {
  var _cx;

  var column = _ref.column;
  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement("div", _extends({}, column.getResizerProps(), {
    style: {
      cursor: 'col-resize'
    } // override the useResizeColumns default
    ,
    className: cx((_cx = {}, _cx[classes.resizeHandle] = true, _cx.handleActive = column.isResizing, _cx))
  }));
}

/* eslint-disable @typescript-eslint/no-shadow */
var rowsPerPageOptions = [10, 25, 50]; // avoid all of the redraws caused by the internal withStyles

var interestingPropsEqual = function interestingPropsEqual(prevProps, nextProps) {
  return prevProps.count === nextProps.count && prevProps.rowsPerPage === nextProps.rowsPerPage && prevProps.page === nextProps.page && prevProps.onChangePage === nextProps.onChangePage && prevProps.onChangeRowsPerPage === nextProps.onChangeRowsPerPage;
};

var MuiTablePagination = React.memo(TablePagination$1, interestingPropsEqual);

function TablePaginationActions(props) {
  var useStyles = makeStyles(function (theme) {
    return createStyles({
      root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5)
      }
    });
  });
  var classes = useStyles();
  var count = props.count,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      onPageChange = props.onPageChange;

  var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
    onPageChange(event, 0);
  };

  var handleBackButtonClick = function handleBackButtonClick(event) {
    onPageChange(event, page - 1);
  };

  var handleNextButtonClick = function handleNextButtonClick(event) {
    onPageChange(event, page + 1);
  };

  var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": "first page"
  }, /*#__PURE__*/React.createElement(FirstPageIcon, null)), /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleBackButtonClick,
    disabled: page === 0,
    "aria-label": "previous page"
  }, /*#__PURE__*/React.createElement(KeyboardArrowLeft, null)), /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "next page"
  }, /*#__PURE__*/React.createElement(KeyboardArrowRight, null)), /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "last page"
  }, /*#__PURE__*/React.createElement(LastPageIcon, null)));
}

function TablePagination(_ref) {
  var instance = _ref.instance;
  var _instance$state = instance.state,
      pageIndex = _instance$state.pageIndex,
      pageSize = _instance$state.pageSize,
      _instance$state$rowCo = _instance$state.rowCount,
      rowCount = _instance$state$rowCo === void 0 ? instance.rows.length : _instance$state$rowCo,
      gotoPage = instance.gotoPage,
      nextPage = instance.nextPage,
      previousPage = instance.previousPage,
      setPageSize = instance.setPageSize;
  var handleChangePage = useCallback(function (event, newPage) {
    if (newPage === pageIndex + 1) {
      nextPage();
    } else if (newPage === pageIndex - 1) {
      previousPage();
    } else {
      gotoPage(newPage);
    }
  }, [gotoPage, nextPage, pageIndex, previousPage]);
  var onChangeRowsPerPage = useCallback(function (e) {
    setPageSize(Number(e.target.value));
  }, [setPageSize]);
  return rowCount ? /*#__PURE__*/React.createElement(MuiTablePagination, {
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

/* eslint-disable import/prefer-default-export */
var useStyles$3 = makeStyles(createStyles({
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
var id = 'popover-column-hide';
function ColumnHidePage(_ref) {
  var instance = _ref.instance,
      anchorEl = _ref.anchorEl,
      onClose = _ref.onClose,
      show = _ref.show;
  var classes = useStyles$3({});
  var allColumns = instance.allColumns,
      toggleHideColumn = instance.toggleHideColumn;
  var hideableColumns = allColumns.filter(function (column) {
    return !(column.id === '_selector');
  });
  var checkedCount = hideableColumns.reduce(function (acc, val) {
    return acc + (val.isVisible ? 0 : 1);
  }, 0);
  var onlyOneOptionLeft = checkedCount + 1 >= hideableColumns.length;
  return hideableColumns.length > 1 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Popover, {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.columnsPopOver
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.popoverTitle
  }, "Visible Columns"), /*#__PURE__*/React.createElement("div", {
    className: classes.grid
  }, hideableColumns.map(function (column) {
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      key: column.id,
      control: /*#__PURE__*/React.createElement(Checkbox, {
        value: "" + column.id,
        disabled: column.isVisible && onlyOneOptionLeft
      }),
      label: column.render('Header'),
      checked: column.isVisible,
      onChange: function onChange() {
        return toggleHideColumn(column.id, column.isVisible);
      }
    });
  }))))) : null;
}

/* eslint-disable react/require-default-props */
var useStyles$2 = makeStyles(createStyles({
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
function FilterPage(_ref) {
  var instance = _ref.instance,
      anchorEl = _ref.anchorEl,
      onClose = _ref.onClose,
      show = _ref.show;
  var classes = useStyles$2({});
  var allColumns = instance.allColumns,
      setAllFilters = instance.setAllFilters;
  var onSubmit = useCallback(function (e) {
    e.preventDefault();
    onClose();
  }, [onClose]);
  var resetFilters = useCallback(function () {
    setAllFilters([]);
  }, [setAllFilters]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Popover, {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.columnsPopOver
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.popoverTitle
  }, "Filters"), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(Button, {
    className: classes.filtersResetButton,
    color: "primary",
    onClick: resetFilters
  }, "Reset"), /*#__PURE__*/React.createElement("div", {
    className: classes.grid
  }, allColumns.filter(function (it) {
    return it.canFilter;
  }).map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.id,
      className: classes.cell
    }, column.render('Filter'));
  })), /*#__PURE__*/React.createElement(Button, {
    className: classes.hidden,
    type: "submit"
  }, "\xA0")))));
}

/* eslint-disable react/no-unused-prop-types */
var useStyles$1 = makeStyles(function () {
  return createStyles({
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
  });
});
function InstanceSmallIconActionButton(_ref3) {
  var _classnames;

  var instance = _ref3.instance,
      icon = _ref3.icon,
      onClick = _ref3.onClick,
      label = _ref3.label,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? function () {
    return true;
  } : _ref3$enabled,
      variant = _ref3.variant;
  var classes = useStyles$1({});
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: label,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconButton$1, {
    className: cx((_classnames = {}, _classnames[classes.rightIcons] = variant === 'right', _classnames[classes.leftIcons] = variant === 'left', _classnames)),
    onClick: onClick(instance),
    disabled: !enabled(instance)
  }, icon)));
}
function SmallIconActionButton(_ref4) {
  var _classnames2;

  var icon = _ref4.icon,
      onClick = _ref4.onClick,
      label = _ref4.label,
      _ref4$enabled = _ref4.enabled,
      enabled = _ref4$enabled === void 0 ? true : _ref4$enabled,
      variant = _ref4.variant;
  var classes = useStyles$1({});
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: label,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconButton$1, {
    className: cx((_classnames2 = {}, _classnames2[classes.rightIcons] = variant === 'right', _classnames2[classes.leftIcons] = variant === 'left', _classnames2)),
    onClick: onClick,
    disabled: !enabled
  }, icon)));
}
function TableToolbar(_ref5) {
  var instance = _ref5.instance,
      onAdd = _ref5.onAdd,
      onDelete = _ref5.onDelete,
      onEdit = _ref5.onEdit;
  var columns = instance.columns;
  var classes = useStyles$1();

  var _useState = useState(undefined),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var _useState2 = useState(false),
      columnsOpen = _useState2[0],
      setColumnsOpen = _useState2[1];

  var _useState3 = useState(false),
      filterOpen = _useState3[0],
      setFilterOpen = _useState3[1];

  var hideableColumns = columns.filter(function (column) {
    return !(column.id === '_selector');
  });
  var handleColumnsClick = useCallback(function (event) {
    setAnchorEl(event.currentTarget);
    setColumnsOpen(true);
  }, [setAnchorEl, setColumnsOpen]);
  var handleFilterClick = useCallback(function (event) {
    setAnchorEl(event.currentTarget);
    setFilterOpen(true);
  }, [setAnchorEl, setFilterOpen]);
  var handleClose = useCallback(function () {
    setColumnsOpen(false);
    setFilterOpen(false);
    setAnchorEl(undefined);
  }, []); // toolbar with add, edit, delete, filter/search column select.

  return /*#__PURE__*/React.createElement(Toolbar, {
    className: classes.toolbar
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.leftButtons
  }, onAdd && /*#__PURE__*/React.createElement(InstanceSmallIconActionButton, {
    instance: instance,
    icon: /*#__PURE__*/React.createElement(AddIcon, null),
    onClick: onAdd,
    label: "Add",
    enabled: function enabled(_ref6) {
      var state = _ref6.state;
      return !state.selectedRowIds || Object.keys(state.selectedRowIds).length === 0;
    },
    variant: "left"
  }), onEdit && /*#__PURE__*/React.createElement(InstanceSmallIconActionButton, {
    instance: instance,
    icon: /*#__PURE__*/React.createElement(CreateIcon, null),
    onClick: onEdit,
    label: "Edit",
    enabled: function enabled(_ref7) {
      var state = _ref7.state;
      return state.selectedRowIds && Object.keys(state.selectedRowIds).length === 1;
    },
    variant: "left"
  }), onDelete && /*#__PURE__*/React.createElement(InstanceSmallIconActionButton, {
    instance: instance,
    icon: /*#__PURE__*/React.createElement(DeleteIcon, null),
    onClick: onDelete,
    label: "Delete",
    enabled: function enabled(_ref8) {
      var state = _ref8.state;
      return state.selectedRowIds && Object.keys(state.selectedRowIds).length > 0;
    },
    variant: "left"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.rightButtons
  }, /*#__PURE__*/React.createElement(ColumnHidePage, {
    instance: instance,
    onClose: handleClose,
    show: columnsOpen,
    anchorEl: anchorEl
  }), /*#__PURE__*/React.createElement(FilterPage, {
    instance: instance,
    onClose: handleClose,
    show: filterOpen,
    anchorEl: anchorEl
  }), hideableColumns.length > 1 && /*#__PURE__*/React.createElement(SmallIconActionButton, {
    icon: /*#__PURE__*/React.createElement(ViewColumnsIcon, null),
    onClick: handleColumnsClick,
    label: "Show / hide columns",
    variant: "right"
  }), /*#__PURE__*/React.createElement(SmallIconActionButton, {
    icon: /*#__PURE__*/React.createElement(FilterListIcon, null),
    onClick: handleFilterClick,
    label: "Filter by columns",
    variant: "right"
  })));
}

/* eslint-disable @typescript-eslint/no-use-before-define */
var useStyles = makeStyles({
  truncated: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
});
var TooltipCellRenderer = function TooltipCellRenderer(_ref) {
  var value = _ref.cell.value,
      _ref$column$align = _ref.column.align,
      align = _ref$column$align === void 0 ? 'left' : _ref$column$align;
  return /*#__PURE__*/React.createElement(TooltipCell, {
    text: value,
    align: align
  });
};
var TooltipCell = function TooltipCell(_ref2) {
  var text = _ref2.text,
      _ref2$tooltip = _ref2.tooltip,
      tooltip = _ref2$tooltip === void 0 ? text : _ref2$tooltip,
      align = _ref2.align;
  var classes = useStyles({});
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: tooltip,
    className: classes.truncated,
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("span", null, text));
};

var _excluded = ["role"],
    _excluded2 = ["key", "title", "role"],
    _excluded3 = ["key", "role"],
    _excluded4 = ["title"],
    _excluded5 = ["title"],
    _excluded6 = ["key", "role"],
    _excluded7 = ["key", "role"];

var DefaultHeader = function DefaultHeader(_ref) {
  var column = _ref.column;
  return /*#__PURE__*/React.createElement(React.Fragment, null, column.id.startsWith('_') ? null : camelToWords(column.id));
}; // yes this is recursive, but the depth never exceeds three so it seems safe enough


var findFirstColumn = function findFirstColumn(columns) {
  return columns[0].columns ? findFirstColumn(columns[0].columns) : columns[0];
};

function DefaultColumnFilter(_ref2) {
  var columns = _ref2.columns,
      column = _ref2.column;
  var id = column.id,
      filterValue = column.filterValue,
      setFilter = column.setFilter,
      render = column.render;

  var _React$useState = React.useState(filterValue || ''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  }; // ensure that reset loads the new value


  useEffect(function () {
    setValue(filterValue || '');
  }, [filterValue]);
  var isFirstColumn = findFirstColumn(columns) === column;
  return /*#__PURE__*/React.createElement(TextField, {
    name: id,
    label: render('Header'),
    InputLabelProps: {
      htmlFor: id
    },
    value: value,
    autoFocus: isFirstColumn,
    variant: "standard",
    onChange: handleChange,
    onBlur: function onBlur(e) {
      setFilter(e.target.value || undefined);
    }
  });
}

var getStyles = function getStyles(props, disableResizing, align) {

  if (align === void 0) {
    align = 'left';
  }

  return [props, {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex'
    }
  }];
};

var selectionHook = function selectionHook(hooks) {
  hooks.allColumns.push(function (columns) {
    return [// Let's make a column for selection
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
      Header: function Header(_ref3) {
        var getToggleAllRowsSelectedProps = _ref3.getToggleAllRowsSelectedProps;
        return /*#__PURE__*/React.createElement(HeaderCheckbox, getToggleAllRowsSelectedProps());
      },
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: function Cell(_ref4) {
        var row = _ref4.row;
        return /*#__PURE__*/React.createElement(RowCheckbox, row.getToggleRowSelectedProps());
      }
    }].concat(columns);
  });
  hooks.useInstanceBeforeDimensions.push(function (_ref5) {
    var headerGroups = _ref5.headerGroups;
    // fix the parent group of the selection button to not be resizable
    var selectionGroupHeader = headerGroups[0].headers[0];
    selectionGroupHeader.canResize = false;
  });
};

var headerProps = function headerProps(props, _ref6) {
  var column = _ref6.column;
  return getStyles(props, column && column.disableResizing, column && column.align);
};

var cellProps = function cellProps(props, _ref7) {
  var cell = _ref7.cell;
  return getStyles(props, cell.column && cell.column.disableResizing, cell.column && cell.column.align);
};

var defaultColumn = {
  Filter: DefaultColumnFilter,
  Cell: TooltipCellRenderer,
  Header: DefaultHeader,
  // When using the useFlexLayout:
  minWidth: 30,
  width: 150,
  maxWidth: 200 // maxWidth is only used as a limit for resizing

};
var hooks = [useColumnOrder, useFilters, useGroupBy, useSortBy, useExpanded, useFlexLayout, usePagination, useResizeColumns, useRowSelect, selectionHook];
var filterTypes = {
  fuzzyText: fuzzyTextFilter,
  numeric: numericTextFilter
};
function Table(props) {
  var name = props.name,
      columns = props.columns,
      onAdd = props.onAdd,
      onDelete = props.onDelete,
      onEdit = props.onEdit,
      onClick = props.onClick;
  var classes = useStyles$4();

  var _useLocalStorage = useLocalStorage("tableState:" + name, {}),
      setInitialState = _useLocalStorage[1];

  var instance = useTable.apply(void 0, [_extends({}, props, {
    columns: columns,
    filterTypes: filterTypes,
    defaultColumn: defaultColumn,
    initialState: {
      hiddenColumns: columns.filter(function (col) {
        return col.show === false;
      }).map(function (col) {
        return col.id || col.accessor;
      })
    }
  })].concat(hooks));
  var getTableProps = instance.getTableProps,
      headerGroups = instance.headerGroups,
      getTableBodyProps = instance.getTableBodyProps,
      page = instance.page,
      prepareRow = instance.prepareRow,
      state = instance.state;
  var debouncedState = useDebounce(state, 500);
  useEffect(function () {
    var sortBy = debouncedState.sortBy,
        filters = debouncedState.filters,
        pageSize = debouncedState.pageSize,
        columnResizing = debouncedState.columnResizing,
        hiddenColumns = debouncedState.hiddenColumns;
    var val = {
      sortBy: sortBy,
      filters: filters,
      pageSize: pageSize,
      columnResizing: columnResizing,
      hiddenColumns: hiddenColumns
    };
    setInitialState(val);
  }, [setInitialState, debouncedState]);

  var cellClickHandler = function cellClickHandler(cell) {
    return function () {
      onClick && !cell.column.isGrouped && !cell.row.isGrouped && cell.column.id !== '_selector' && onClick(cell.row);
    };
  };

  var _getTableProps = getTableProps(),
      tableProps = _objectWithoutPropertiesLoose(_getTableProps, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableToolbar, {
    instance: instance,
    onAdd: onAdd,
    onDelete: onDelete,
    onEdit: onEdit
  }), /*#__PURE__*/React.createElement(FilterChipBar, {
    instance: instance
  }), /*#__PURE__*/React.createElement(TableTable, tableProps, /*#__PURE__*/React.createElement(TableHead, null, headerGroups.map(function (headerGroup) {
    var _headerGroup$getHeade = headerGroup.getHeaderGroupProps(),
        headerGroupKey = _headerGroup$getHeade.key,
        getHeaderGroupProps = _objectWithoutPropertiesLoose(_headerGroup$getHeade, _excluded2);

    return /*#__PURE__*/React.createElement(TableHeadRow, _extends({
      key: headerGroupKey
    }, getHeaderGroupProps), headerGroup.headers.map(function (column) {
      var style = {
        textAlign: column.align ? column.align : 'left '
      };

      var _column$getHeaderProp = column.getHeaderProps(headerProps),
          headerKey = _column$getHeaderProp.key,
          getHeaderProps = _objectWithoutPropertiesLoose(_column$getHeaderProp, _excluded3);

      var _column$getGroupByTog = column.getGroupByToggleProps(),
          _column$getGroupByTog2 = _column$getGroupByTog.title,
          groupTitle = _column$getGroupByTog2 === void 0 ? '' : _column$getGroupByTog2,
          columnGroupByProps = _objectWithoutPropertiesLoose(_column$getGroupByTog, _excluded4);

      var _column$getSortByTogg = column.getSortByToggleProps(),
          _column$getSortByTogg2 = _column$getSortByTogg.title,
          sortTitle = _column$getSortByTogg2 === void 0 ? '' : _column$getSortByTogg2,
          columnSortByProps = _objectWithoutPropertiesLoose(_column$getSortByTogg, _excluded5);

      return /*#__PURE__*/React.createElement(TableHeadCell, _extends({
        key: headerKey
      }, getHeaderProps), column.canGroupBy && /*#__PURE__*/React.createElement(Tooltip, {
        title: groupTitle
      }, /*#__PURE__*/React.createElement(TableSortLabel, _extends({
        active: true,
        direction: column.isGrouped ? 'desc' : 'asc',
        IconComponent: KeyboardArrowRight
      }, columnGroupByProps, {
        className: classes.headerIcon
      }))), column.canSort ? /*#__PURE__*/React.createElement(Tooltip, {
        title: sortTitle
      }, /*#__PURE__*/React.createElement(TableSortLabel, _extends({
        active: column.isSorted,
        direction: column.isSortedDesc ? 'desc' : 'asc'
      }, columnSortByProps, {
        className: classes.tableSortLabel,
        style: style
      }), column.render('Header'))) : /*#__PURE__*/React.createElement(TableLabel, {
        style: style
      }, column.render('Header')), column.canResize && /*#__PURE__*/React.createElement(ResizeHandle, {
        column: column
      }));
    }));
  })), /*#__PURE__*/React.createElement(TableBody, getTableBodyProps(), page.map(function (row) {
    prepareRow(row);

    var _row$getRowProps = row.getRowProps(),
        rowKey = _row$getRowProps.key,
        getRowProps = _objectWithoutPropertiesLoose(_row$getRowProps, _excluded6);

    return /*#__PURE__*/React.createElement(TableRow, _extends({
      key: rowKey
    }, getRowProps, {
      className: cx({
        rowSelected: row.isSelected,
        clickable: onClick
      })
    }), row.cells.map(function (cell) {
      var _cell$getCellProps = cell.getCellProps(cellProps),
          cellKey = _cell$getCellProps.key,
          getCellProps = _objectWithoutPropertiesLoose(_cell$getCellProps, _excluded7);

      return /*#__PURE__*/React.createElement(TableCell, _extends({
        key: cellKey
      }, getCellProps, {
        onClick: cellClickHandler(cell)
      }), cell.isGrouped ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableSortLabel, _extends({
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
  }))), /*#__PURE__*/React.createElement(TablePagination, {
    instance: instance
  }));
}

export { Table };
//# sourceMappingURL=react-table-mui-ts.modern.js.map
