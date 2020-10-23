import axios from 'axios';
import * as ActionTypes from './ActionTypes';


export const homeData = data => ({ type: ActionTypes.MAIN_SLIDE, data: data })
export const galleryData = data => ({ type: ActionTypes.GALLERY, data: data })
export const bridalImageData = data => ({ type: ActionTypes.BRIDAL_PACKAGE_IMAGE, data: data })


export const getHome = () => {
    return dispatch => {
        const url = ActionTypes.BASE_URL + '/main-slide-images/'
        axios.get(url)
            .then(response => { dispatch(homeData(response.data.data)) });
    }
}

export const getGallery = (sort_by) => {
    return dispatch => {
        const url = ActionTypes.BASE_URL + `/gallery/?sort=${sort_by}`
        axios.get(url)
            .then(response => { dispatch(galleryData(response.data.data)) });
    }
}


export const getPackageImages = (name) => {
    return dispatch => {
        const url = ActionTypes.BASE_URL + `/package/?name=${name}`
        axios.get(url)
            .then(response => { dispatch(bridalImageData(response.data.data)) });
    }
}