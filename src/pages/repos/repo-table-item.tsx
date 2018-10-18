import * as React from 'react';
import { observer } from 'mobx-react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

@observer
export class RepoTableItem extends React.Component<{ repo: Repo }> {
  render() {
    const { id, name, stargazers_count, watchers_count } = this.props.repo;

    return (
        <TableRow key={id}>
          <TableCell>{id}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{stargazers_count}</TableCell>
          <TableCell>{watchers_count}</TableCell>
        </TableRow>
    )
  }
}
