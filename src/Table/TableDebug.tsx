/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import {
  IconButton, Tooltip,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import classnames from 'classnames';
import React, { Suspense, useState } from 'react';

import { Loader } from '../Loader';

const ReactJson = React.lazy(() => import('react-json-view'));

const useStyles = makeStyles(
  createStyles({
    button: {
      marginTop: -72,
      marginLeft: 0,
    },
  }),
);

export const TableDebug: React.FC<{
  enabled: boolean
  instance: any
}> = ({ enabled, instance }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return enabled ? (
    <>
      <Tooltip title="Debug">
        <span>
          <IconButton
            className={classnames({ [classes.button]: instance?.rows?.length })}
            onClick={() => setOpen((old) => !old)}
          >
            <BugReportTwoToneIcon />
          </IconButton>
        </span>
      </Tooltip>
      {open && (
        <>
          <br />
          <br />
          <Suspense fallback={<Loader />}>
            <ReactJson src={{ ...instance }} collapsed={1} indentWidth={2} sortKeys />
          </Suspense>
        </>
      )}
    </>
  ) : null;
};
