import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Sorter = ({ onChange }) => {
    return (
        <div>
            <label htmlFor="standard">Exclude Standard</label>
            <input
                id="standard"
                type="checkbox"
                onChange={e => onChange('standard', e.target.checked)}
            />
            <label htmlFor="current">Only Current Cube</label>
            <input
                id="current"
                type="checkbox"
                onChange={e => onChange('current', e.target.checked)}
            />
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="radio"
                name="sort"
                onChange={e => onChange(e.target.name, e.target.id)}
            />
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="radio"
                name="sort"
                onChange={e => onChange(e.target.name, e.target.id)}
            />
            <label htmlFor="types">Types</label>
            <input
                id="types"
                type="radio"
                name="sort"
                onChange={e => onChange(e.target.name, e.target.id)}
            />
            <label htmlFor="age">Age(?)</label>
            <input
                id="age"
                type="radio"
                name="sort"
                onChange={e => onChange(e.target.name, e.target.id)}
            />
        </div>
    );
};

const mapStateToProps = state => state.sorter;
const mapDispatchToProps = dispatch => ({
    onChange: (sort, value) => dispatch({
        type: 'SET_SORTER',
        data: {
            [sort]: value,
        },
    }),
});

const ConnectedSorter = connect(mapStateToProps, mapDispatchToProps)(Sorter);

export default ConnectedSorter;
