import React, { Component } from 'react';
import './App.css';
import { StockList } from "./containers/StockList"

class App extends Component {
  render() {
    return (
      <div >
        <section >
          <StockList />
        </section>
      </div>
    );
  }
}

export default App;
