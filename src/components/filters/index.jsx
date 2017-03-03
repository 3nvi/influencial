import React from 'react';
import { Cell } from 'react-mdl';
import TopicFilters from '../../containers/filters/topic_filters';
import GenderFilters from '../../containers/filters/gender_filters';
import PeriodFilters from '../../containers/filters/periods_filters';
import ServiceFilters from '../../containers/filters/services_filters';
import AlgorithmFilter from '../../containers/filters/algorithm_filters';
import CollapsibleFilterItem from './collapsible_container';
import FilterBlock from './filter_block';

function FiltersList() {
  return (
    <div className="mdl-color-text--grey-600">
      <FilterBlock title="Advanced Settings" toggle>
        <div className="center-block" style={{ marginBottom: 20 }}>
          <AlgorithmFilter />
        </div>
      </FilterBlock>
      <FilterBlock title="Filters">
        <div className="center-block" style={{ marginBottom: 20 }}>
          <CollapsibleFilterItem title="Period">
            <PeriodFilters />
          </CollapsibleFilterItem>
          <CollapsibleFilterItem title="Topics">
            <TopicFilters />
          </CollapsibleFilterItem>
          <CollapsibleFilterItem title="Gender">
            <GenderFilters />
          </CollapsibleFilterItem>
          <CollapsibleFilterItem title="Social Media">
            <ServiceFilters />
          </CollapsibleFilterItem>
        </div>
      </FilterBlock>
    </div>
  );
}

export default FiltersList;
