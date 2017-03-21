import React from 'react';
import { Layout, Navigation, Header } from 'react-mdl';
import { Link } from 'react-router';
import SnackbarNotification from '../containers/util/snackbar';

function Base(props) {
  return (
    <Layout className="container" style={{ position: 'relative' }}>
      <Header title="InfluenCial" style={{ color: 'white' }}>
        <Navigation>
          <Link to="/">Home</Link>
        </Navigation>
      </Header>
      {props.children}
      <SnackbarNotification />
    </Layout>
  );
}

Base.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Base;
