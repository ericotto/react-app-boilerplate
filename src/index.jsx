import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from './components/SampleComponent.jsx';

class App extends React.Component {
  render() {
    return ( 
      <div>
        <h1>Hello, React</h1>
        <SampleComponent />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
