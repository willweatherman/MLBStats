import store from "./store";

export function searchBar(e) {
    store.dispatch({type: "UPDATE_SEARCH_BAR", text: e.target.value})
}

export function searchSection(section) {
    store.dispatch({type: "UPDATE_SEARCH_SECTION", text: section})
}

export function filterBar(e) {
    store.dispatch({type: "UPDATE_FILTER_BAR", text: e.target.value})
}

export function filterSection(section) {
    store.dispatch({type: "UPDATE_FILTER_SECTION", text: section})
}

export function changeOperator(oper) {
    store.dispatch({type: "UPDATE_OPPERATOR", text: oper})
}
export function changeSort(i) {
    store.dispatch({type: "CHANGE_SORT", sort_name: i})
}
export function changeList(newList, sortedState) {
    store.dispatch({type: "CHANGE_LIST", text: newList})
    store.dispatch({type: "UPDATE_FILTER_SECTION", text: Object.entries(sortedState[0].stats[newList.toLowerCase()])[0][0]})
}