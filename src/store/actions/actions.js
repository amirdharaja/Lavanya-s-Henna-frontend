import axios from 'axios';
import * as ActionTypes from './ActionTypes';

export const homeData = data => ({ type: ActionTypes.MAIN_SLIDE, data: data })
export const galleryData = data => ({ type: ActionTypes.GALLERY, data: data })


export const getHome = () => {
    return dispatch => {
        const url = ActionTypes.BASE_URL + '/main-slide-images/'
        if (ActionTypes.AUTH_TOKEN) {
            axios.get(url, { headers: { 'Authorization': `token ${ActionTypes.AUTH_TOKEN}` } })
                .then(response => {
                    dispatch(homeData(response.data.data));
                });
        }
        else {
            axios.get(url)
                .then(response => { dispatch(homeData(response.data.data)) });
        }
    }
}

export const getGallery = () => {
    return dispatch => {
        const url = ActionTypes.BASE_URL + '/gallery/'
        if (ActionTypes.AUTH_TOKEN) {
            axios.get(url, { headers: { 'Authorization': `token ${ActionTypes.AUTH_TOKEN}` } })
                .then(response => {
                    dispatch(galleryData(response.data.data));
                });
        }
        else {
            axios.get(url)
                .then(response => {dispatch(galleryData(response.data.data))});
        }
    }
}