import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import ajax from './ajaxHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 'BTC',
      data: [],
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    ajax.get((data) => {
      this.setState({ data });
    });
  }

  render() {
    const chartData = {
      labels: this.state.data.map(datapoint => moment(datapoint.time_close).format('MMM D, YY')),
      datasets: [{
        label: this.state.coin,
        data: this.state.data.map(datapoint => datapoint.price_close),
      }],
    };

    return (
      <div>
        <Line id="myChart" data={chartData} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app')); //eslint-disable-line
