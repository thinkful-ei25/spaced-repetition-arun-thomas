import React from 'react';
const Chart = require('chart.js');

export default class HistoryStackedBarChart extends React.Component {

  render() {

    const { questionHistory } = this.props;

    const questionHistoryLabels = [];
    let questionCount = 0;
    for (let i = 0; i < questionHistory.length; i++) {
      questionCount += 1;
      questionHistoryLabels.push(questionCount)
    }
    
    const questionHistoryCorrectData = [];
    questionHistory.map(question => {
      questionHistoryCorrectData.push(question.history.correct);
    })

    const questionHistoryIncorrectData = [];
    questionHistory.map(question => {
      questionHistoryIncorrectData.push(question.history.incorrect);
    })

    window.onload = function() {
      var ctx = document.getElementById('chart');
      var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: questionHistoryLabels,
          datasets: [
            {
              label: 'Correct',
              data: questionHistoryCorrectData,
              backgroundColor: '#D6E9C6',
            },
            {
              label: 'Incorrect',
              data: questionHistoryIncorrectData,
              backgroundColor: '#EBCCD1',
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{ stacked: true, scaleLabel: { display: true, labelString: 'Total Answers Submitted Per Question' }}],
            yAxes: [{ stacked: true, scaleLabel: { display: true, labelString: 'Question #' }}]
          }
        }
      });
    }

    return (
      <canvas id="chart"></canvas>
    );
  }
};