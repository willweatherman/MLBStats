import React from 'react';
import '../stylesheets/bootstrap.css';
import { connect } from 'react-redux';
import { random, removeTeam } from '../utils'



function TrashCan(props) {
    let counter = 1
    return (
        <div className="Column">
            {(props.sortedStats.length > 0) ? (<button disabled className="contentButton">Delete Team</button>) : null}
            {
                props.sortedStats.map( TeamObj =>{
                counter++
                return (
                <div key={random()} className="TrashCans Field" style={(counter % 2 === 0 ? {backgroundColor: "gray"} : {} )}>
                <i onClick={(e) => {removeTeam(e, TeamObj)}} className="Clickable fa fa-trash fa-2x"></i>
                </div>
                )
            })
            }
        </div>
    );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const TrashCanContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrashCan);

export default TrashCanContainer;
