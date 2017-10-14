import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    const { history, git, repos } = this.props;

    if (!git.exists) {
      history.push('/no-git');
    } else if (repos.repos.length === 0) {
      history.push('/no-repos');
    }
  }

  render() {
    return (
      <div className='home'>
        Hello World
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    git: state.git,
    repos: state.repos
  }
};

const ReduxHome = connect(mapStateToProps)(Home);

export default ReduxHome;
