import React from 'react';
import '../stylesheets/bootstrap.css';
import { connect } from 'react-redux';
import { random, genFields } from '../utils'
import {changeSort} from "../actions";
import TrashCanContainer from "./TrashCans";




function Teams(props) {
    return (
        <div className="ColumnContainer">
            {(props.sortedStats.length > 0) ? genFields(props.sortedStats, props.currentList).stats.map(i => {
            let counter = 1
            return (
            <div key={random()} className="Column">
                <button onClick={() => {changeSort(i)}} className={"contentButton " + (props.sortName === i ? "active": "")}>
                    {i}
                </button>
                {
                    genFields(props.sortedStats, props.currentList).info.map(y => {
                        counter++
                        return (
                            <div key={random()} className="Field" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                                {(i === "officialLogoImageSrc") ? <img alt="" className="Image" src={y[i]}/> : y[i]}
                            </div>
                        )
                    })
                }
                </div>
                )
            }) : (<div className="EmptyList">You current filter/search has no results.</div>)}
            {(props.sortedStats.length > 0) ? <TrashCanContainer sortedStats={props.sortedStats}></TrashCanContainer> : null}
        </div>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const TeamsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);

export default TeamsContainer;
