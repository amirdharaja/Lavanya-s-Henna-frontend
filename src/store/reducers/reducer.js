import * as ActionTypes from '../actions/ActionTypes'
import { updateObject } from '../utility';


const initialState = {
    token: null,
    error: null,
    isAuthenticated: false,
    main_slide_images: [],
    gallery: [],
    alertVisible: false,
    loading: true
}


const mainSlide = (state, action) => {
    return updateObject({
        ...state,
        main_slide_images: action.data.main_slide_images,
        alertVisible: false,
        loading: false,
    });
}

const galleryImage = (state, action) => {
    return updateObject({
        ...state,
        gallery: action.data.gallery_images,
        alertVisible: false,
        loading: false,
    });
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.MAIN_SLIDE: return mainSlide(state, action);
        case ActionTypes.GALLERY: return galleryImage(state, action);

        default:
            return state;
    }
}

export default Reducer;