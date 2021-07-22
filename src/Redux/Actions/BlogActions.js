import axios from 'axios';
import store from '@redux/Store';

export const SET_BLOGS = 'SET_BLOGS';
export const SET_SELECTED_BLOG = 'SET_SELECTED_BLOG';
export const IS_LOADING = 'IS_LOADING';
export const IS_LOADED = 'IS_LOADED';

export function fetchBlogs() {
    if ( store.getState().blogs.items.length < 1 ) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const payload = res.data.slice(0, 10);

            store.dispatch({
                type: SET_BLOGS,
                payload
            });
        });
    }
}

export function fetchBlog(id) {
    console.log('Fetching...')

    store.dispatch({
        type: IS_LOADING
    });

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        const payload = res.data;

        store.dispatch({
            type: SET_SELECTED_BLOG,
            payload
        });

        store.dispatch({
            type: IS_LOADED
        });
    });
}