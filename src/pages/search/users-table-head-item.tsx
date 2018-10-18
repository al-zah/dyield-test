import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { GlobalStore } from '../../stores';
import'./search.css';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

@inject('appStore')
@observer
export class UsersTableHeadItem extends React.Component<{ rowId: string; appStore?: GlobalStore }> {
  sortHandler = () => {
    const { orderBy, direction, setDirection, setOrderBy } = this.props.appStore!.search;
    const { rowId } = this.props;

    if (rowId === orderBy) {
      return setDirection(direction === 'asc' ? 'desc' : 'asc');
    }

    return setOrderBy(rowId as any);
  };

  render() {
    const { rowId } = this.props;
    const { orderBy, direction } = this.props.appStore!.search;

    return (
        <TableCell
            key={rowId}
            sortDirection={orderBy === rowId ? direction : false}
        >
          <TableSortLabel
              active={orderBy === rowId}
              direction={direction}
              onClick={this.sortHandler}
          >
            {rowId}
          </TableSortLabel>
        </TableCell>
    )
  }
}
