import * as React from 'react';
import { observer } from 'mobx-react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { RepoTableItem } from './repo-table-item';
import TableCell from '@material-ui/core/TableCell/TableCell';

const rows = ['id', 'name', 'stargazers_count', 'watchers_count'];

@observer
export class RepoTable extends React.Component<{ repos: Repo[] }> {
  render() {
    const { repos } = this.props;

    return (
        <div className="results">
          <Table>
            <TableHead>
              <TableRow>
                {rows.map(row => <TableCell key={row}>{row}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map(repo => <RepoTableItem repo={repo} key={repo.id} />)}
            </TableBody>
          </Table>
        </div>
    )
  }
}
