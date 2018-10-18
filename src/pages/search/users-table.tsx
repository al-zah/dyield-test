import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';

import { GlobalStore } from '../../stores';
import'./search.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { UsersTableItem } from './users-table-item';
import { UsersTableHeadItem } from './users-table-head-item';

const rows = ['avatar', 'id', 'login', 'public_repos'];

@inject('appStore')
@observer
export class UsersTable extends React.Component<{ appStore?: GlobalStore }> {
  render() {
    const { users } = this.props.appStore!.search;

    return (
        <div className="results">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  {rows.map(row => <UsersTableHeadItem rowId={row} key={row} />)}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => <UsersTableItem user={user} key={user.id} />)}
              </TableBody>
            </Table>
          </Paper>
        </div>
    )
  }
}
