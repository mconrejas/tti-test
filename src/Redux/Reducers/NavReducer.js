import * as actions from '@redux/Actions/NavActions';

const initialState = {
    show: false,
    blogId: 1
}

export default function NavReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TOGGLE_MENU:
            return {
                ...state,
                show: !state.show
            };
        case actions.SET_BLOG_ID:
            return {
                blogId: action.payload
            };
        default:
            return state;
    }
}