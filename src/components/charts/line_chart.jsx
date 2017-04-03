import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'react-mdl';
import _ from 'lodash';

import '../../lib/amcharts/index';
import { SERVER_URL } from '../../util';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.initializeChart = this.initializeChart.bind(this);
    this.updateInitState = this.updateInitState.bind(this);
    this.state = { chartInitialized: false };
  }

  componentWillMount() {
    axios.get(`${SERVER_URL}${this.props.endpoint}`)
      .then((response) => {
        const data = response.data[Object.keys(response.data)[0]];
        const chartDictData = {};
        const chartData = [];

        if (!data.length) {
          return this.updateInitState();
        }

        // group by date
        data.forEach((item) => {
          _.forOwn(item.counts, (value, key) => {
            chartDictData[key] = chartDictData[key] || {};
            chartDictData[key][item[this.props.extractionVariable]] = value;
          });
        });

        // reduce to array
        _.forOwn(chartDictData, (value, date) => {
          chartData.push(_.extend({}, { date }, value));
        });

        // sort by date
        const sortedChartData = _.sortBy(chartData, ['date']);

        // reduce titles to array
        const titles = _.reduce(data, (lista, i) => {
          lista.push(i[this.props.extractionVariable]); return lista;
        }, []);

        this.initializeChart(sortedChartData, titles);
      })
      .catch(err => console.log(err));
  }

  shouldComponentUpdate() {
    return !this.state.chartInitialized;
  }

  updateInitState() {
    this.setState({ chartInitialized: true });
  }

  initializeChart(chartData, graphNames) {
    this.chart = AmCharts.makeChart(this.props.container, {
      type: 'serial',
      theme: 'light',
      marginLeft: 40,
      mouseWheelZoomEnabled: false,
      legend: {
        useGraphSettings: true
      },
      dataDateFormat: 'YYYY-MM-DD',
      valueAxes: [{
        id: 'v1',
        axisAlpha: 0,
        position: 'left',
        ignoreAxisWidth: true
      }],
      graphs: graphNames.map((graphName) => {
        const graphSlug = graphName.replace(' ', '_');
        return {
          id: graphSlug,
          balloon: {
            drop: true,
            adjustBorderColor: false,
            color: '#ffffff'
          },
          bullet: 'round',
          bulletBorderAlpha: 1,
          bulletColor: '#FFFFFF',
          bulletSize: 5,
          lineThickness: 2,
          title: graphName,
          useLineColorForBulletBorder: true,
          valueField: graphName,
          balloonText: '<span>[[value]]</span>'
        };
      }),
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 1,
        cursorColor: '#258cbb',
        valueLineAlpha: 0.2
      },
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        dashLength: 1,
        minorGridEnabled: true
      },
      dataProvider: chartData,
      listeners: [{
        event: 'buildStarted',
        method: this.updateInitState
      }]
    });
  }

  render() {
    return (
      <div>
        <h4 className="text-center">{this.props.title}</h4>
        {
          this.state.chartInitialized ? (
            <div
              id={this.props.container}
              style={{ width: '100%', minHeight: '400px', maxHeight: '2500px' }}
            >
              <h1 className="text-center chart--empty">
                Sorry, no relevant data found for this Influencer
              </h1>
            </div>
          ) : (
            <Spinner />
            )
        }
      </div>
    );
  }
}

LineChart.propTypes = {
  container: React.PropTypes.string.isRequired,
  endpoint: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  extractionVariable: React.PropTypes.string.isRequired
};

LineChart.defaultProps = {
  title: 'Influencer Chart'
};


export default LineChart;
