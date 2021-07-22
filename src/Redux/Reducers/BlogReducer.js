import * as actions from '@redux/Actions/BlogActions';

const initialState = {
    items: [],
    selected: {},
    loading: false
}

export default function BlogReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_BLOGS:
            return {
                ...state,
                items: action.payload
            };
        case actions.SET_SELECTED_BLOG:
            return {
                ...state,
                selected: action.payload
            };
        case actions.IS_LOADING:
            return {
                ...state,
                loading: true
            };
        case actions.IS_LOADED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}