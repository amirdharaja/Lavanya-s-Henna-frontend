import * as ActionTypes from '../actions/ActionTypes'
import { updateObject } from '../utility';


const initialState = {
    token: null,
    error: null,
    isAuthenticated: false,
    main_slide_images: [],
    bridal_package_images: [],
    gallery: [],
    alertVisible: false,
    loading: true
}


const mainSlide = (state, action) => {
    return updateObject({
        ...state,
        main_slide_images: action.data.main_slide_images,
        loading: false,
    });
}

const galleryImage = (state, action) => {
    return updateObject({
        ...state,
        gallery: action.data.gallery_images,
        loading: false,
    });
}

const bridalPackageImage = (state, action) => {
    return updateObject({
        ...state,
        bridal_package_images: action.data.bridal_package_images,
        loading: false,
    });
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.MAIN_SLIDE: return mainSlide(state, action);
        case ActionTypes.GALLERY: return galleryImage(state, action);
        case ActionTypes.BRIDAL_PACKAGE_IMAGE: return bridalPackageImage(state, action);

        default:
            return state;
    }
}

export default Reducer;