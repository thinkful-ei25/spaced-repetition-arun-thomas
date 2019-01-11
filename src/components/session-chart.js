import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './session-chart.css';

const COLORS = {
  correct: '#44bba4',
  incorrect: '#e94f37',
};

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
          COLORS.correct,
          COLORS.incorrect,
        ],
        hoverBackgroundColor: [
          COLORS.correct,
          COLORS.incorrect,
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