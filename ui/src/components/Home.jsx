import React from 'react';
import '../stylesheets/home.css';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { changeList, searchSection, searchBar, filterBar, changeOperator} from '../actions'
import TeamsContainer from "./Teams";
import { filterStats, sortStats } from '../utils'
import OptionsContainer from "./Options";
import {getTeamByDivision} from "../api";



function Home(props) {
        let history = useHistory();
        const filteredStats = filterStats(props.mlbStats, props.filterSection, props.filterBar, props.searchSection, props.searchBar, props.currentList, props.operator)
        const sortedStats = sortStats(filteredStats, props.sortName, props.currentList)
        return (
            <div className="home">
                <div className="header"></div>
                <button onClick={() => {history.push('/CreateTeam')}} className="formButton">Create Team</button>
                <div className="customContainer">
                    <div className="contentHeader">
                        <button onClick={() => {changeList("Standings", props.mlbStats)}} className={"contentButton " + (props.currentList === "Standings" ? "active": "")}>Over View</button>
                        <button onClick={() => {changeList("Batting", props.mlbStats)}} className={"contentButton " + (props.currentList === "Batting" ? "active": "")}>Batting</button>
                        <button onClick={() => {changeList("Pitching", props.mlbStats)}} className={"contentButton " + (props.currentList === "Pitching" ? "active": "")}>Pitching</button>
                        <button onClick={() => {changeList("Fielding", props.mlbStats)}} className={"contentButton " + (props.currentList === "Fielding" ? "active": "")}>Fielding</button>
                    </div>
                    <div className="contentFilter">
                        <form className="Filter">
                            <div className="mx-auto form-row align-items-center">
                                <div className="col-lg-12 my-4">
                                    <div className="input-group mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <select onChange={(e) => {searchSection(e.target.value)}} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option value="city" defaultValue>City</option>
                                                    <option value="name">Name</option>
                                                    <option value="abbreviation">Abbreviation</option>
                                                </select>
                                            </div>
                                        </div>
                                        <input onInput={(e) => {searchBar(e)}}  type="text" className="form-control" id="inlineFormInputGroupUsername"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form className="Filter">
                            <div className="mx-auto form-row align-items-center">
                                <div className="col-lg-12 my-4">
                                    <div className="input-group mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <OptionsContainer mlbStats={props.mlbStats} currentList={props.currentList} filterSection={props.filterSection}></OptionsContainer>
                                            </div>
                                        </div>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <select onChange={(e) => {changeOperator(e.target.value)}} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option value=">" defaultValue>{">"}</option>
                                                    <option value="=">=</option>
                                                <option value="<">{"<"}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <input onKeyPress={(e) => {
                                            if (isNaN(e.key)) e.preventDefault()
                                        }} onInput={(e) => {filterBar(e)}} type="text" className="form-control" id="inlineFormInputGroupUsername" defaultValue="0"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form className="Filter">
                            <div className="mx-auto form-row align-items-center">
                                <div className="col-lg-12 my-4">
                                    <div className="input-group mr-lg-12">
                                            <input className="form-control" value="Filter by division:" readOnly></input>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <select onChange={(e) => {getTeamByDivision(e.target.value)}} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option value="">All</option>
                                                    <option value="AL West">AL West</option>
                                                    <option value="AL Central">Al Central</option>
                                                    <option value="AL East">AL East</option>
                                                    <option value="NL West">NL West</option>
                                                    <option value="NL Central">NL Central</option>
                                                    <option value="NL East">NL East</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {(sortedStats.length > 0) ? (<TeamsContainer sortedStats={sortedStats} currentList={props.currentList} sortName={props.sortName}></TeamsContainer>) : null}
                </div>
            </div>
        );
}

const mapStateToProps = state => ({
    mlbStats: state.mlb_stats,
    searchBar: state.search_bar,
    searchSection: state.search_section,
    sortName: state.sort_name,
    filterBar: state.filter_bar,
    filterSection: state.filter_section,
    currentList: state.current_list,
    operator: state.operator
});

const mapDispatchToProps = {
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
