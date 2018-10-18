import * as React from 'react';
import { computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import Typography from '@material-ui/core/Typography/Typography';
import { GlobalStore } from '../../stores';
import { RepoTable } from './repo-table';
import './repos.css';

@inject('appStore', 'routing')
@observer
export class ReposPage extends React.Component<{ appStore?: GlobalStore, routing?: RouterStore }> {
  @computed get currentUserId() {
    const { location } = this.props.routing!;
    const pathChunks = location.pathname.split('/');

    return pathChunks[pathChunks.length - 1];
  }

  @computed get currentRepo() {
    const { repos } = this.props.appStore!;

    return repos.repos[this.currentUserId];
  }
  componentDidMount() {
    const { fetchReposByUserId } = this.props.appStore!.repos;


    if (!this.currentRepo) {
      fetchReposByUserId(this.currentUserId);
    }
  }
  render() {
    if (!this.currentRepo) {
      return <div>Loading...</div>;
    }

    if (this.currentRepo.length === 0) {
      return (
        <div className="repos">
          <Typography variant="h5" component="h3">
            There is no repos for {this.currentUserId}
          </Typography>
        </div>
      )
    }

    return (
        <div className="repos">
          <Typography variant="h5" component="h3">
            Repos of {this.currentUserId}:
          </Typography>
          <RepoTable repos={this.currentRepo} />
        </div>
    )
  }
}
