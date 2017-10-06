import React from 'react';
import {Line} from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap';
/*
import {Line} from 'react-chartjs-2';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        tooltips: {
            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');
                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = "<table></table>"
                    document.body.appendChild(tooltipEl);
                }
                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }
                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }
                function getBody(bodyItem) {
                    return bodyItem.lines;
                }
                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);
                    var innerHtml = '<thead>';
                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';
                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';
                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }
                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();
                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._fontFamily;
                tooltipEl.style.fontSize = tooltipModel.fontSize;
                tooltipEl.style.fontStyle = tooltipModel._fontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            }
        }
    }
});
*/

const AnalysisChart = (props) =>{
  let {question_num, correct_num} = props.data.score;
  let labels=[];
  // creating X-axis
  let scores=[];

  for(let i=0;i<question_num.length;i++){
    labels.push('week '+(i+1));
    scores.push(parseFloat(correct_num[i]/question_num[i]*100).toFixed(0));
  }

  let data = {
    labels: labels,
    datasets :[{
      label: 'Your Scores',
      data: scores,
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#6be1cc',
      borderColor: '#6be1cc',
    }],
  };

  let options ={
    legend: {
      display: true
    },
    scales:{
      yAxes: [{
        ticks: {
          min: 0,
          beginAtZero: true,
          max :100,
          stepSize: 10
        }
      }]
    },
    //https://stackoverflow.com/questions/34720530/chart-js-v2-add-prefix-or-suffix-to-tooltip-label
    tooltips:{
      custom: function(tooltip) {
        if (!tooltip) return;
        // disable displaying the color box;
        tooltip.displayColors = false;
      },
      callbacks: {
        title: function (tooltipItem, data){ return data.labels[tooltipItem[0].index];},
        label: function (tooltipItem, data){
          var firstLabel = '  문제 수: '+ question_num[tooltipItem.index];
          var secondLabel = '  정답 수: '+ correct_num[tooltipItem.index];
          var tooltip = new Array(firstLabel, secondLabel);
          return tooltip;
        }
      }
    },
    maintainAspectRatio: false,
  };

  return(
      <Row className="analysisChart">
        <Col xs={12}>
          <Row className="text-left">
            <Col xs={12}>
              <span>{props.data.quiz_type}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="chart_wrapper">
                <Line data={data} options={options} height={300}/>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
  );
};

export default AnalysisChart;
