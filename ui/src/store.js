import { createStore } from 'redux'

function todos(state = {}, action) {
    switch (action.type) {
        case 'CLEAR_MLB_STATS':
            return {
                ...state,
                mlb_stats: []
            }
        case 'ADD_MLB_STATS':
            return {
                ...state,
                mlb_stats: state.mlb_stats.concat(action.state.mlb_stats),
            }
        case 'CHANGE_SORT':
            return {
                ...state,
                sort_name: action.sort_name
            }
        case 'CHANGE_LIST':
            return {
                ...state,
                current_list: action.text
            }
        case 'UPDATE_AVG':
            if (state.form_wins === 0) return {
                ...state,
                form_vg: 0
            }
            return {
                ...state,
                form_avg: (state.form_wins / (state.form_wins + state.form_losses)).toFixed(3)
            }
        case 'UPDATE_SEARCH_BAR':
            return {
                ...state,
                search_bar: action.text
            }
        case 'UPDATE_SEARCH_SECTION':
            return {
                ...state,
                search_section: action.text
            }
        case 'UPDATE_FILTER_BAR':
            return {
                ...state,
                filter_bar: action.text
            }
        case 'UPDATE_FILTER_SECTION':
            return {
                ...state,
                filter_section: action.text
            }
        case 'UPDATE_WINS':
            return {
                ...state,
                form_wins: action.text
            }
        case 'UPDATE_LOSSES':
            return {
                ...state,
                form_losses: action.text
            }
        case 'UPDATE_OPPERATOR':
            return {
                ...state,
                operator: action.text
            }
        default:
            return state
    }
}
let store = createStore(todos, {
    mlb_stats: [],
    filter_bar: "",
    filter_section: "wins",
    operator: ">",
    search_bar: "",
    search_section: "city",
    sort_name: "city",
    current_list: "Standings",
    form_avg: 0,
    form_wins: 0,
    form_losses: 0
})





export default store
