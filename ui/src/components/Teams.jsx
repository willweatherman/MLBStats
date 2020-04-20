import React from 'react';
import '../stylesheets/bootstrap.css';
import { connect } from 'react-redux';
import {changeSort} from "../actions";
import {removeTeam} from "../utils";


function Teams(props) {
    let counter = 0;
    return (
        <ul className="list-group ColumnContainer">
            {(props.sortedStats.length > 0) ? (<li className="list-group-item" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                <button onClick={() => {changeSort("city")}} className={"list-group-item-item contentButton " + (props.sortName === "city" ? "active": "")}>
                    city
                </button>
                <button onClick={() => {changeSort("name")}} className={"list-group-item-item contentButton " + (props.sortName === "name" ? "active": "")}>
                    name
                </button>
                <button onClick={() => {changeSort("abbreviation")}} className={"list-group-item-item contentButton " + (props.sortName === "abbreviation" ? "active": "")}>
                    abbreviation
                </button>
                <button onClick={() => {changeSort("officialLogoImageSrc")}} className={"list-group-item-item contentButton " + (props.sortName === "officialLogoImageSrc" ? "active": "")}>
                    officialLogoImageSrc
                </button>
                <button onClick={() => {changeSort((props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[0][0] : null)}} className={"list-group-item-item contentButton " + (props.sortName === ((props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[0][0] : null) ? "active": "")}>
                    {(props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[0][0] : null}
                </button>
                <button onClick={() => {changeSort((props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[1][0] : null)}} className={"list-group-item-item contentButton " + (props.sortName === ((props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[1][0] : null) ? "active": "")}>
                    {(props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[1][0] : null}
                </button>
                <button onClick={() => {changeSort((props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[2][0] : null)}} className={"list-group-item-item contentButton " + (props.sortName === ((props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[2][0] : null) ? "active": "")}>
                    {(props.sortedStats.length > 0) ? Object.entries(props.sortedStats[0].stats[props.currentList.toLowerCase()])[2][0] : null}
                </button>
                <button className="list-group-item-item contentButton">Delete Team</button>
            </li>) : (<div className="EmptyList">You current filter/search has no results.</div>)}
            {props.sortedStats.map(team => {
                counter++
                return (
                    <li key={team.team.name} className="list-group-item" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                        <div className="list-group-item-item">
                            {team.team.city}
                        </div>
                        <div className="list-group-item-item">
                            {team.team.name}
                        </div>
                        <div className="list-group-item-item">
                            {team.team.abbreviation}
                        </div>
                        <div className="list-group-item-item">
                            <img alt="" className="Image" src={team.team.officialLogoImageSrc}/>
                        </div>
                        <div className="list-group-item-item">
                            {(props.sortedStats.length > 0) ? Object.entries(team.stats[props.currentList.toLowerCase()])[0][1] : null}
                        </div>
                        <div className="list-group-item-item">
                            {(props.sortedStats.length > 0) ? Object.entries(team.stats[props.currentList.toLowerCase()])[1][1] : null}
                        </div>
                        <div className="list-group-item-item">
                            {(props.sortedStats.length > 0) ? Object.entries(team.stats[props.currentList.toLowerCase()])[2][1] : null}
                        </div>
                        <div className="list-group-item-item" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                            <i onClick={(e) => {removeTeam(e, team)}} className="Clickable fa fa-trash fa-2x"></i>
                        </div>
                    </li>
                )
            })}
        </ul>
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
