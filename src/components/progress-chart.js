import classNames from 'classnames';
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const COLORS = {
  correct: '#44bba4',
  incorrect: '#e94f37',
};

export default function ProgressChart({ correct, incorrect, className }) {
  const data = {
    datasets: [
      {
        label: 'Correct',
        data: [correct],
        backgroundColor: COLORS.correct,
        hoverBackgroundColor: COLORS.correct,
      },
      {
        label: 'Incorrect',
        data: [incorrect],
        backgroundColor: COLORS.incorrect,
        hoverBackgroundColor: COLORS.incorrect,
      },
    ],
  };

  const options = {
    legend: { display: false },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          stacked: true,
          ticks: { display: false, beginAtZero: true, stepSize: 1 },
          scaleLabel: { display: false},
        },
      ],
      yAxes: [{ stacked: true, scaleLabel: { display: false } }],
    },
  };

  return (
    <div className={classNames('ProgressChart', className)}>
      <HorizontalBar data={data} options={options} height={50}/>
    </div>
  );
}
