import {deleteTeam} from "./api";

export function random() {
    return Math.random();
}


export function filterStats(stats, filterSection, filterBar, searchSection, searchBar, currentList, operator) {
    if (stats === []) return stats;
    filterBar = (filterBar === '' || filterBar === '0') ? 0 : filterBar.toString().replace(/^0+/, '');
    stats = stats.filter(team => {
        const number = team.stats[currentList.toLowerCase()][filterSection]
        if (operator === '>') {
            return (parseInt(number) > filterBar)
        } else if (operator === '=') {
            return (parseInt(number) === filterBar)
        } else {
            return (parseInt(number) < filterBar)
        }
    })
    return stats.filter(team => {
        const regex = new RegExp(searchBar, 'gi');
        return team.team[searchSection.toLowerCase()].match(regex)
    });
}


export function sortStats(state, sortName, currentList) {
    if (state === []) return state;
    return state.sort((a, b) => {
        if (sortName === "city" || sortName === "name" || sortName === "abbreviation" || sortName === "officialLogoImageSrc") return (a.team[sortName].toLowerCase() >= b.team[sortName].toLowerCase()) ? 1 : -1
        if (currentList === "Standings") return (a.stats.standings[sortName] <= b.stats.standings[sortName]) ? 1 : -1
        if (currentList === "Batting") return (a.stats.batting[sortName] <= b.stats.batting[sortName]) ? 1 : -1
        if (currentList === "Pitching") return (a.stats.pitching[sortName] <= b.stats.pitching[sortName]) ? 1 : -1
        if (currentList === "Fielding") return (a.stats.fielding[sortName] <= b.stats.fielding[sortName]) ? 1 : -1
        return 1
    })
}

export function genFields(mlbStats, currSection) {
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


export async function removeTeam(e, TeamObj) {
    await deleteTeam(TeamObj._links.self.href.replace("http://localhost:9000", ""))
    alert("Deleted Team " + TeamObj.team.name)
}