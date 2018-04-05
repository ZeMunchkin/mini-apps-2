import React from 'react';
import { render } from 'react-dom';

import BeginCheckout from './start';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Complete from './complete';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curTransaction: null,
      start: false,
      f1: false,
      f2: false,
      f3: false,
    };
    this.setState = this.setState.bind(this);
  }


  renderFunc() {
    if (this.state.f3) {
      return (<Complete />);
    }
    if (this.state.f2) {
      return (<Form3 set={this.setState} transId={this.state.curTransaction} />);
    }
    if (this.state.f1) {
      return (<Form2 set={this.setState} transId={this.state.curTransaction} />);
    }
    if (this.state.start) {
      return (<Form1 set={this.setState} transId={this.state.curTransaction} />);
    }
    return (<BeginCheckout set={this.setState} />);
  }

  render() {
    return (
      <div id="checkout">
        { this.renderFunc() }
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
