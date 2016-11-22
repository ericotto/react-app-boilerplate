import React from 'react';

import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
}

export default Home;
