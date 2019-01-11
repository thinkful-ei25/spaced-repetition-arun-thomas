import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './session-chart.css';

export default class SessionChart extends React.Component {
  render() {
    
    const { correct, incorrect } = this.props;

    const data = {
      labels: [
        'Correct',
        'Incorrect',
      ],
      datasets: [{
        data: [correct, incorrect],
        backgroundColor: [
          '#6FEE95',
          '#FF6278',
        ],
        hoverBackgroundColor: [
          '#6FEE95',
          '#FF6278',
        ]
      }]
    };

    return(
      <div className="session-chart">
        <Doughnut data={data} />
      </div>
    );
  }
}