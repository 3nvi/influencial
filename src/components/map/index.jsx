import React, { Component } from 'react';
import { Cell } from 'react-mdl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../lib/amcharts/index';
import { toggleFilter } from '../../actions/index';
import {
  ADD_LOCATION_FILTER,
  REMOVE_LOCATION_FILTER
} from '../../actions/types';


class Map extends Component {
  constructor(props) {
    super(props);

    this.onMapObjectClick = this.onMapObjectClick.bind(this);
  }
  
  componentDidMount() {
    AmCharts.makeChart('influencer-map', {

      type: 'map',
      theme: 'light',
      projection: 'miller',
      fontFamily: 'Roboto',
      fontSize: 14,
      colorSteps: 5,

      dataProvider: {
        map: 'worldLow',
        getAreasFromMap: true
      },
      areasSettings: {
        autoZoom: false,
        selectable: true,
        color: '#eeeeee',
        colorSolid: '#4457b8',
        rollOverColor: '#eeb38b',
        selectedColor: '#ee8a2d',
        balloonText: '<i>Country:</i> <strong>[[title]]</strong> <br/>' +
                     '<i>Influencers:</i> <strong>[[value]]</strong>'
      },
      balloon: {
        borderAlpha: 0,
        color: '#444'
      },
      export: {
        enabled: false
      },
      valueLegend: {
        right: 5,
        minValue: 'A few',
        maxValue: 'Many',
        fontSize: 14,
        top: 10,
        bottom: undefined
      },
      listeners: [
        {
          event: 'init',
          method: this.calculateInfluencerHeatMap
        },
        {
          event: 'clickMapObject',
          method: this.onMapObjectClick
        }
      ]
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  onMapObjectClick({ chart, mapObject }) {

    // Ignore any click not on area
    if (mapObject.objectType !== 'MapArea') {
      return;
    }

    // Toggle showAsSelected
    const area = mapObject;
    area.showAsSelected = !area.showAsSelected;
    chart.returnInitialColor(area);

    this.props.toggleFilter(
      ((area.showAsSelected) ? ADD_LOCATION_FILTER : REMOVE_LOCATION_FILTER),
      mapObject.id
    );
  }

  calculateInfluencerHeatMap(event) {
    const map = event.chart;
    if (map.dataGenerated) {
      return;
    }

    if (map.dataProvider.areas.length === 0) {
      setTimeout(this.calculateInfluencerHeatMap, 100);
      return;
    }

    // This line needs to be replaced by an async call
    for (let i = 0; i < map.dataProvider.areas.length; i += 1) {
      map.dataProvider.areas[i].value = Math.round(Math.random() * 10000);
    }

    map.dataGenerated = true;
    map.validateNow();
  }

  render() {
    return (
      <Cell
        col={12}
        className="mdl-shadow--2dp"
        style={{ padding: '15px', background: 'white' }}
      >
        <div id="influencer-map" style={{ width: '100%', height: '400px' }} />
      </Cell>
    );
  }
}


function mapStateToProps(state) {
  return {
    locations: state.filters.locations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);