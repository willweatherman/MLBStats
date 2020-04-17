import React from 'react';
import '../stylesheets/form.css';
import '../stylesheets/bootstrap.css';
import { connect } from 'react-redux';
import { postTeam } from '../api.js';
import store from "../store";
import { useHistory } from "react-router-dom";




function changeLosses(e) {
    let val = parseInt(e.target.value)
    if (isNaN(val) || val < 0) val = 0
    store.dispatch({type: "UPDATE_LOSSES", text: val})
    store.dispatch({type: "UPDATE_AVG"})
}
function changeWins(e) {
    let val = parseInt(e.target.value)
    if (isNaN(val) || val < 0) val = 0
    store.dispatch({type: "UPDATE_WINS", text: val})
    store.dispatch({type: "UPDATE_AVG"})
}

function processForm(e, history) {
    e.preventDefault()
    const ids = ["inputCity","inputName","inputAbbreviation","inputImgSrc","inputTAB","inputRuns","inputHits","inputARE","inputIPI","inputAH","inputIPL","inputTC","inputFTO","inputWins","inputLosses","inputWLP"]
    let values = {}
    ids.map(id => {
        const value = document.getElementById(id)
        if (value.value === "") {
            return document.getElementById("invalid" + id).removeAttribute("hidden")
        } else {
            return values[id] = value.value
        }
    })
    if (Object.entries(values).length !== ids.length) return;
        let json = {
        "team": {
            "city": values.inputCity,
            "name": values.inputName,
            "abbreviation": values.inputAbbreviation,
            "officialLogoImageSrc": values.inputImgSrc
        },
        "stats": {
            "batting": {
                "atBats": values.inputTAB,
                "runs": values.inputRuns,
                "hits": values.inputHits
            },
            "pitching": {
                "earnedRunAvg": values.inputARE,
                "inningsPitched": values.inputIPI,
                "hitsAllowed": values.inputAH
            },
            "fielding": {
                "inningsPlayed": values.inputIPL,
                "totalChances": values.inputTC,
                "fielderTagOuts": values.inputFTO
            },
            "standings": {
                "wins": values.inputWins,
                "losses": values.inputLosses,
                "winPct": values.inputWLP
            }
        }
    }
    postTeam(json)
    history.push('/')
}




// App.js
function Form(props) {
        let history = useHistory();
        return (
            <div className="form">
                <div className="header">
               </div>
                <div className="customContainer">
                    <div className="contentFilter">
                    </div>
                    <form className="space">
                        <label htmlFor="formGroupExampleInput" className="sectionLabel">Team Info</label>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                                <div id="invalidinputCity" className="invalid-feedback" hidden>
                                    Please choose a City.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Name</label>
                                <input type="text" className="form-control" id="inputName"/>
                                <div id="invalidinputName" className="invalid-feedback" hidden>
                                    Please choose a Name.
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Abbreviation</label>
                                <input onKeyPress={(e) => {
                                    if (e.target.value.length > 2) e.preventDefault()
                                }} type="text" className="form-control" id="inputAbbreviation"/>
                                <div id="invalidinputAbbreviation" className="invalid-feedback" hidden>
                                    Please choose a Abbreviation.
                                </div>
                            </div>
                        </div>
                        {/*<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Image Source</label>*/}
                        <div className="form-group row">
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputImgSrc"
                                       placeholder="http://example.com"/>
                                <div id="invalidinputImgSrc" className="invalid-feedback" hidden>
                                    Please choose a Image Source.
                                </div>
                            </div>
                        </div>
                        <label htmlFor="formGroupExampleInput" className="sectionLabel">Standings</label>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCity">Wins</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} onInput={(e) => {changeWins(e)}} type="text" className="form-control" id="inputWins"/>
                                <div id="invalidinputWins" className="invalid-feedback" hidden>
                                    Please choose a Number of Wins.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Losses</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} onInput={(e) => {changeLosses(e)}} type="text" className="form-control" id="inputLosses"/>
                                <div id="invalidinputLosses" className="invalid-feedback" hidden>
                                    Please choose a Number of Losses.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Win Loss Percentage</label>
                                <input value={props.FormAvg} type="text" className="form-control" id="inputWLP" readOnly/>
                                <div id="invalidinputWLP" className="invalid-feedback" hidden>
                                    Please choose a Wins Loss Percentage.
                                </div>
                            </div>
                        </div>
                        <label htmlFor="formGroupExampleInput" className="sectionLabel">Batting</label>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCity">Times at Bat</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputTAB"/>
                                <div id="invalidinputTAB" className="invalid-feedback" hidden>
                                    Please choose a Number of Times at Bat.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Runs</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputRuns"/>
                                <div id="invalidinputRuns" className="invalid-feedback" hidden>
                                    Please choose a Number of Runs.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputZip">Hits</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputHits"/>
                                <div id="invalidinputHits" className="invalid-feedback" hidden>
                                    Please choose a Number of Hits.
                                </div>
                            </div>
                        </div>
                        <label htmlFor="formGroupExampleInput" className="sectionLabel">Pitching</label>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCity">Average Runs Earned</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputARE"/>
                                <div id="invalidinputARE" className="invalid-feedback" hidden>
                                    Please choose a Number of Average Runs Earned.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Innings Pitched</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputIPI"/>
                                <div id="invalidinputIPI" className="invalid-feedback" hidden>
                                    Please choose a Number of Innings Pitched.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputZip">Allowed Hits</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputAH"/>
                                <div id="invalidinputAH" className="invalid-feedback" hidden>
                                    Please choose a Number of Allowed Hits.
                                </div>
                            </div>
                        </div>
                        <label htmlFor="formGroupExampleInput" className="sectionLabel">Fieldings</label>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCity">Innings Played</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputIPL"/>
                                <div id="invalidinputIPL" className="invalid-feedback" hidden>
                                    Please choose a Number of Innings Played.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Total Chances</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputTC"/>
                                <div id="invalidinputTC" className="invalid-feedback" hidden>
                                    Please choose a Number of Total Chances.
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputZip">Fielder Tag Outs</label>
                                <input onKeyPress={(e) => {
                                    if (isNaN(e.key)) e.preventDefault()
                                }} type="text" className="form-control" id="inputFTO"/>
                                <div id="invalidinputFTO" className="invalid-feedback" hidden>
                                    Please choose a Number of Fielder Tag Outs.
                                </div>
                            </div>
                        </div>
                        <button onClick={(e) => {processForm(e, history)}} type="sumbit" className="btn btn-primary">Create Team</button>
                    </form>
                </div>
            </div>
        );
}

const mapStateToProps = state => ({
    mlbStats: state.mlb_stats,
    CurrentList: state.current_list,
    FormAvg: state.form_avg
});

const mapDispatchToProps = {
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default FormContainer;
