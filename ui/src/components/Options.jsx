import React from 'react';
import '../stylesheets/bootstrap.css';
import { connect } from 'react-redux';
import { random } from '../utils'
import { filterSection } from "../actions";


function options(mlbstats, currentList, filterSection) {
    let arrayOfHtml = []
    Object.entries(mlbstats[0].stats[currentList.toLowerCase()]).map(keyValue => {
        if (keyValue[0] === filterSection) return arrayOfHtml.unshift(<option key={random()} value={keyValue[0]}>{keyValue[0]}</option>)
        return arrayOfHtml.push(<option key={random()} value={keyValue[0]}>{keyValue[0]}</option>)
    })
    return arrayOfHtml
}



// App.js
function Options(props) {
    return (
        <select onChange={(e) => {filterSection(e.target.value)}} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            {(props.mlbStats.length > 0) ? options(props.mlbStats, props.currentList, props.filterSection) : null}
        </select>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const OptionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Options);

export default OptionsContainer;
