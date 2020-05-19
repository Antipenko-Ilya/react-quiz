import React, {Component} from 'react';
import Layout from './Hoc/Layout/Layout';
import Quiz from './Containers/Quiz/Quiz';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Quiz />
        </Layout>
      </div>
    );
  }
}

export default App;
