import store from './store.js'

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

export async function getAllTeams() {
    await store.dispatch({type: "CLEAR_MLB_STATS"})
    return fetch('/Teams').then((response) => {
        return response.json();
    }).then((data) => {
        const arr = range(0, parseInt(data.page.totalPages))
        return Promise.all(arr.map(pageNum => {
            return getTeam(pageNum)
        }))
    })
}

export async function getTeamByDivision(division) {
    if (division === "") return getAllTeams()
    await store.dispatch({type: "CLEAR_MLB_STATS"})
    return fetch('/Teams/search/findByTeamDivision?teamDivision=' + division).then((response) => {
        return response.json();
    }).then((data) => {
        return store.dispatch({type: "ADD_MLB_STATS", state: data._embedded})
    })
}

async function getTeam(pagenum = 0) {
    return fetch('/Teams?page='+ pagenum).then((response) => {
        return response.json();
    }).then((data) => {
        return store.dispatch({type: "ADD_MLB_STATS", state: data._embedded})
    })
}
export async function postTeam(json) {
    console.log(json)
    await fetch("/Teams", {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    getAllTeams()
}
export async function deleteTeam(link) {
    await fetch(link, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    getAllTeams()
}


