import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './session-chart.css';

export default class SessionChart extends React.Component {
  render() {
    
    const { correct, incorrect } = this.props;
    // let correctLabel = `Correct: ${correct}`;
    // let incorrectLabel = `Incorrect: ${incorrect}`;

    const data = {
      labels: [
        'Correct',
        'Incorrect',
      ],
      datasets: [{
        data: [correct, incorrect],
        backgroundColor: [
          '#D6E9C6',
          '#EBCCD1',
        ],
        hoverBackgroundColor: [
          '#D6E9C6',
          '#EBCCD1',
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