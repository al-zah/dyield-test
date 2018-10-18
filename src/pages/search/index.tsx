import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import { GlobalStore } from '../../stores';
import'./search.css';
import { UsersTable } from './users-table';

@inject('appStore')
@observer
export class SearchPage extends React.Component<{ appStore?: GlobalStore }> {
  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.appStore!.search.setQuery(event.target.value);
  };

  render() {
    const { fetchUsers, users, query } = this.props.appStore!.search;

    return (
        <div className="search">
          <div className="search-box">
            <Paper elevation={1}>
              <div className="search-controls">
                <FormControl>
                  <InputLabel htmlFor="user-filter">Type user filter here</InputLabel>
                  <Input
                      id="user-filter"
                      value={query}
                      onChange={this.handleFilterChange}
                      startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                  />
                </FormControl>
                <Button onClick={fetchUsers}>Search</Button>
              </div>
            </Paper>
          </div>

          {users.length > 0 && <UsersTable />}
        </div>
    )
  }
}
