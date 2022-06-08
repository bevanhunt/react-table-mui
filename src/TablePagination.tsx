/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import { TablePagination as _MuiTablePagination, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {
  createStyles, makeStyles
} from '@mui/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import React, {
  PropsWithChildren, ReactElement, useCallback,
} from 'react';
import { TableInstance } from 'react-table';

const rowsPerPageOptions = [10, 25, 50];

// avoid all of the redraws caused by the internal withStyles
const interestingPropsEqual = (prevProps: any, nextProps: any) => prevProps.count === nextProps.count
  && prevProps.rowsPerPage === nextProps.rowsPerPage
  && prevProps.page === nextProps.page
  && prevProps.onChangePage === nextProps.onChangePage
  && prevProps.onChangeRowsPerPage === nextProps.onChangeRowsPerPage;

// a bit of a type hack to keep OverridableComponent working as desired
type T = typeof _MuiTablePagination;
const MuiTablePagination: T = React.memo(_MuiTablePagination, interestingPropsEqual) as T;

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      flexShrink: 0,
      // marginLeft: theme.spacing(2.5),
    },
  }));
  const classes = useStyles();
  const {
    count, page, rowsPerPage, onPageChange,
  } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
}

export function TablePagination<T extends Record<string, unknown>>({
  instance,
}: PropsWithChildren<{ instance: TableInstance<T> }>): ReactElement | null {
  const {
    state: { pageIndex, pageSize, rowCount = instance.rows.length },
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = instance;

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
      if (newPage === pageIndex + 1) {
        nextPage();
      } else if (newPage === pageIndex - 1) {
        previousPage();
      } else {
        gotoPage(newPage);
      }
    },
    [gotoPage, nextPage, pageIndex, previousPage],
  );

  const onChangeRowsPerPage = useCallback(
    (e) => {
      setPageSize(Number(e.target.value));
    },
    [setPageSize],
  );

  return rowCount ? (
    <MuiTablePagination
      sx={{
        '.MuiTablePagination-selectLabel': {
          paddingTop: '12px',
        },
        '.MuiTablePagination-displayedRows': {
          paddingTop: '15px',
        },
      }}
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={rowCount}
      rowsPerPage={pageSize}
      page={pageIndex}
      onPageChange={handleChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  ) : null;
}
