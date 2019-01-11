import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const COLORS = {
  correct: '#44bba4',
  incorrect: '#e94f37',
};

export default class HistoryStackedBarChart extends React.Component {
  render() {

    const { questionHistory } = this.props;
    
    const questionHistoryLabels = questionHistory.map((x, index) => index + 1)

    const questionHistoryCorrectData = questionHistory.map(question => question.history.correct);
    
    const questionHistoryIncorrectData = questionHistory.map(question => question.history.incorrect);

    const data = {
      labels: questionHistoryLabels,
      datasets: [
        {
          label: 'Correct',
          data: questionHistoryCorrectData,
          backgroundColor: COLORS.correct,
        },
        {
          label: 'Incorrect',
          data: questionHistoryIncorrectData,
          backgroundColor: COLORS.incorrect,
        }
      ]
    };

    const options = {
      scales: {
        xAxes: [{ stacked: true, scaleLabel: { display: true, labelString: 'Total Answers Submitted Per Question' }}],
        yAxes: [{ stacked: true, scaleLabel: { display: true, labelString: 'Question #' }}]
      }
    };

    return (
      <div>
        <HorizontalBar data={data} options={options}/>
      </div>
    );
  }
};