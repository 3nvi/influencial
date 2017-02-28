import React from 'react';
import { Cell } from 'react-mdl';

import PeriodFilter from './period_filter';
import AdvancedFilters from './advanced_filters';

function FilterListItem({ title, children }) {
  return (
    <Cell
      shadow={0}
      col={12}
      className="mdl-typography--text-center mdl-color--white clearfix"
      style={{ marginBottom: '30px' }}
    >
      <h4>
        {title}
      </h4>
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
    <Cell col={12} className="mdl-color-text--grey-600">
      <FilterListItem title="Result calculation period">
        <Cell col={8} tablet={12} phone={12} className="center-block" style={{ marginBottom: 20 }}>
          <PeriodFilter />
        </Cell>
      </FilterListItem>
      <FilterListItem title="Advanced filters">
        <Cell col={12} className="center-block" style={{ marginBottom: 20 }}>
          <AdvancedFilters />
        </Cell>
      </FilterListItem>
    </Cell>
  );
}

export default FiltersList;
