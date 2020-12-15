import React from 'react';
import Dropdown from 'react-dropdown';
import FilterWrapper from './FilterData';

const options = [
	'one', 'two', 'three'
];

export default function FilterData() {
    return(
    <FilterWrapper>
        <h2>Filter</h2>
        <h3>Genre</h3>
        <Dropdown options={options} onChange={options._onSelect} value={options[0]} />
        <h3>Rating</h3>
        </FilterWrapper>
        );
}
