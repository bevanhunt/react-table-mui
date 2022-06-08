/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import cx from 'classnames';
import React, { ReactElement } from 'react';
import { ColumnInstance } from 'react-table';

import { useStyles } from './TableStyles';

export function ResizeHandle<T extends Record<string, unknown>>({
  column,
}: {
  column: ColumnInstance<T>
}): ReactElement {
  const classes = useStyles();
  return (
    <div
      {...column.getResizerProps()}
      style={{ cursor: 'col-resize' }} // override the useResizeColumns default
      className={cx({
        [classes.resizeHandle]: true,
        handleActive: column.isResizing,
      })}
    />
  );
}
