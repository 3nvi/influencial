import React from 'react';
import { Cell } from 'react-mdl';
import TopicFilters from '../../containers/filters/topic_filters';
import GenderFilters from '../../containers/filters/gender_filters';
import PeriodFilters from '../../containers/filters/periods_filters';
import ServiceFilters from '../../containers/filters/services_filters';
import AlgorithmFilter from '../../containers/filters/algorithm_filters';

function FilterListItem({ title, children }) {
  return (
    <Cell
      shadow={0}
      col={12}
      className="mdl-typography--text-center mdl-color--white clearfix"
      style={{ marginBottom: '30px' }}
    >
      <h4>{title}</h4>
      {children}
    </Cell>
  );
}

FilterListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

function FiltersList() {
  return (
    <div className="mdl-color-text--grey-600">
      <FilterListItem title="Advanced Settings">
        <Cell col={12} className="center-block" style={{ marginBottom: 20 }}>
          <AlgorithmFilter />
        </Cell>
      </FilterListItem>
      <FilterListItem title="Advanced filters">
        <Cell col={12} className="center-block" style={{ marginBottom: 20 }}>
          <PeriodFilters />
          <TopicFilters />
          <GenderFilters />
          <ServiceFilters />
        </Cell>
      </FilterListItem>
    </div>
  );
}

export default FiltersList;
