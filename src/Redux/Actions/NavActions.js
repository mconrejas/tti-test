import store from '@redux/Store';

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_BLOG_ID = 'SET_BLOG_ID';

export function toggleMenu() {
    store.dispatch({
        type: TOGGLE_MENU
    });
}

export function setBlogId(payload) {
    store.dispatch({
        type: SET_BLOG_ID,
        payload
    });
}