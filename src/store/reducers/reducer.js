import { act } from 'react-dom/test-utils';
import * as ActionTypes from '../actions/ActionTypes'
import { updateObject } from '../utility';


const initialState = {
    token: null,
    isAuthenticated: false,
    main_slide_images: [],
    bridal_package_images: [],
    gallery: [],
    loading: true,
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

const adminLogin = (state, action) => {
    return updateObject(state, {
        ...state,
        token: action.token,
        loading: false,
        isAuthenticated: true,
    });
}

const authFail = (state, action) => {
    alert(action.data.data.detail)
}

const authLogout = (state, action) => {
    return updateObject(state, {
        ...state,
        token: null,
        isAuthenticated: false,
        main_slide_images: [],
        bridal_package_images: [],
        gallery: [],
        loading: true,
    });
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.MAIN_SLIDE: return mainSlide(state, action);
        case ActionTypes.GALLERY: return galleryImage(state, action);
        case ActionTypes.BRIDAL_PACKAGE_IMAGE: return bridalPackageImage(state, action);

        case ActionTypes.ADMIN_LOGIN: return adminLogin(state, action);
        case ActionTypes.AUTH_FAIL: return authFail(state, action);
        case ActionTypes.AUTH_LOGOUT: return authLogout(state, action);

        default:
            return state;
    }
}

export default Reducer;