import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Avatar from '@material-ui/core/Avatar';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

@observer
export class UsersTableItem extends React.Component<{ user: User }> {
  render() {
    const { id, login, avatar_url, public_repos } = this.props.user;

    return (
      <TableRow key={id}>
        <TableCell>
          <Link to={`/user/${login}`}>
            <Avatar alt={login} src={avatar_url} />
          </Link>
        </TableCell>
        <TableCell>{id}</TableCell>
        <TableCell>{login}</TableCell>
        <TableCell>{public_repos}</TableCell>
      </TableRow>
    )
  }
}
