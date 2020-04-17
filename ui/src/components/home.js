import React from 'react';
import '../stylesheets/home.css';
import { connect } from 'react-redux';
import store from "../store";
import { useHistory } from "react-router-dom";
import { deleteTeam } from '../api'

function random() {
    return Math.random();
}


// Functions to limit the amount of teams displayed
function filter(stats, filterSection, filterBar, searchSection, searchBar, currentList, operator) {
    if (stats === []) return stats;
    //filter...
    filterBar = (filterBar === '' || filterBar === '0') ? 0 : filterBar.toString().replace(/^0+/, '');
    stats = stats.filter(team => {
        const number = team.stats[currentList.toLowerCase()][filterSection]
        console.log(parseInt(number), operator, filterBar)
        if (operator === '>') {
            return (parseInt(number) > filterBar)
        } else if (operator === '=') {
            return (parseInt(number) === filterBar)
        } else {
            return (parseInt(number) < filterBar)
        }
    })
    //search...
    return stats.filter(team => {
        const regex = new RegExp(searchBar, 'gi');
        return team.team[searchSection.toLowerCase()].match(regex)
    });
}
function sort(state, sortName, currentList) {
    if (state === []) return state;
    state.sort((a, b) => {
        if (sortName === "city" || sortName === "name" || sortName === "abbreviation" || sortName === "officialLogoImageSrc") return (a.team[sortName].toLowerCase() >= b.team[sortName].toLowerCase()) ? 1 : -1
        if (currentList === "Standings") return (a.stats.standings[sortName] <= b.stats.standings[sortName]) ? 1 : -1
        if (currentList === "Batting") return (a.stats.batting[sortName] <= b.stats.batting[sortName]) ? 1 : -1
        if (currentList === "Pitching") return (a.stats.pitching[sortName] <= b.stats.pitching[sortName]) ? 1 : -1
        if (currentList === "Fielding") return (a.stats.fielding[sortName] <= b.stats.fielding[sortName]) ? 1 : -1
    })

    return state
}



//Function to parse the mlb_stats and return a iterable list and objects
function genFields(mlbStats, currSection) {
    if (mlbStats == null) return {"stats": [], "info": []}
    let stats = []
    let info = []
    Object.entries(mlbStats[0].team).map(keyValue => {
        return stats = stats.concat(keyValue[0])
    })
    const currentlist = currSection.toLowerCase()
    Object.entries(mlbStats[0].stats[currentlist]).map(keyValue => {
        return stats = stats.concat(keyValue[0])
    });
    mlbStats.map(team => {
        let obj = {};
        Object.entries(team.team).map(keyValue => {
            return obj[keyValue[0]] = keyValue[1]
        });
        Object.entries(team.stats[currentlist]).map(keyValue => {
            return obj[keyValue[0]] = keyValue[1]
        });
        return info = info.concat(obj)
    });
    return {"stats": stats, "info": info}
}



//helper functions to display items on the page
function teams(mlbData, sortName) {
    return mlbData.stats.map(i => {
        let counter = 1
        return (
            <div key={random()} className="Column">
                <button onClick={() => {changeSort(i)}} className={"contentButton " + (sortName === i ? "active": "")}>
                    {i}
                </button>
                {
                    mlbData.info.map(y => {
                        counter++
                        return (
                            <div key={random()} className="Field" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                                {
                                    (i === "officialLogoImageSrc") ? <img alt="" className="Image" src={y[i]}/> : y[i]
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    })
}
function trashCans(state) {
    let counter = 1
    return state.map( TeamObj =>{
        counter++
        return (
            <div key={random()} className="TrashCans Field" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                <i onClick={(e) => {removeTeam(e, TeamObj)}} className="Clickable fa fa-trash fa-2x"></i>
            </div>
        )
    })
}
function options(mlbstats, currentList, filterSection) {
    let arrayOfHtml = []
    Object.entries(mlbstats[0].stats[currentList.toLowerCase()]).map(keyValue => {
        if (keyValue[0] === filterSection) return arrayOfHtml.unshift(<option key={random()} value={keyValue[0]}>{keyValue[0]}</option>)
        arrayOfHtml.push(<option key={random()} value={keyValue[0]}>{keyValue[0]}</option>)
    })
    return arrayOfHtml
}


//Functions that use the dispatch to the store
function searchBar(e) {
    store.dispatch({type: "UPDATE_SEARCH_BAR", text: e.target.value})
}

function searchSection(section) {
    store.dispatch({type: "UPDATE_SEARCH_SECTION", text: section})
}

function filterBar(e) {
    store.dispatch({type: "UPDATE_FILTER_BAR", text: e.target.value})
}

function filterSection(section) {
    store.dispatch({type: "UPDATE_FILTER_SECTION", text: section})
}

function changeOperator(oper) {
    store.dispatch({type: "UPDATE_OPPERATOR", text: oper})
}
function changeSort(i) {
    store.dispatch({type: "CHANGE_SORT", sortName: i})
}
function changeList(newList, sortedState) {
    store.dispatch({type: "CHANGE_LIST", text: newList})
    store.dispatch({type: "UPDATE_FILTER_SECTION", text: Object.entries(sortedState[0].stats[newList.toLowerCase()])[0][0]})
}

//Helper function to delete a team
function removeTeam(e, TeamObj) {
    deleteTeam(TeamObj._links.self.href.replace("http://localhost:9000", ""))
    alert("Deleted Team " + TeamObj.team.name)
}



// App.js
function Home(props) {
        let history = useHistory();
        const filteredState = filter(props.mlbStats, props.filterSection, props.filterBar, props.searchSection, props.searchBar, props.currentList, props.operator)
        const sortedState = sort(filteredState, props.sortName, props.currentList)
        return (
            <div className="home">
                <div className="header">

               </div>
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
                                                <select onChange={(e) => {filterSection(e.target.value)}} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    {(props.mlbStats.length > 0) ? options(props.mlbStats, props.currentList, props.filterSection) : null}
                                                </select>
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
                    </div>
                    <div className="ColumnContainer">
                        {(sortedState.length > 0) ? teams(genFields(sortedState, props.currentList), props.sortName) : null}
                        <div className="Column">
                            <button className="contentButton">
                                Delete Team
                            </button>
                            {
                                trashCans(sortedState)
                            }
                        </div>
                    </div>
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

//function lower case cammle case
//

const mapDispatchToProps = {
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
