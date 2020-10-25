import axios from 'axios';
import * as ActionTypes from './ActionTypes';


export const homeData = data => ({ type: ActionTypes.MAIN_SLIDE, data: data })
export const galleryData = data => ({ type: ActionTypes.GALLERY, data: data })
export const bridalImageData = data => ({ type: ActionTypes.BRIDAL_PACKAGE_IMAGE, data: data })

export const loginData = data => ({ type: ActionTypes.ADMIN_LOGIN, data: data })
export const authFail = data => ({ type: ActionTypes.AUTH_FAIL, data: data })
export const authLogout = () => ({ type: ActionTypes.AUTH_LOGOUT })


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

export const adminLogin = (username, password) => {
    return dispatch => {
        axios.post(ActionTypes.BASE_URL + '/login/', {
            username: username,
            password: password,
        })
            .then(response => {
                const token = response.data.token;
                const expirationDate = new Date(new Date().getTime() + 1296000000)
                localStorage.setItem('lavanyasHennaAdminToken', token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('user_id', response.data.data.id);
                localStorage.setItem('isAuthenticated', true);
                dispatch(loginData(response.data));
                window.location.replace("/lavanyashenna/admin/dashboard");
            })
            .catch(error => {
                if (error.response) dispatch(authFail(error.response));
                else (alert('Unable to Login, Try again'))
            })
    }
}

export const adminLogout = () => {
    return dispatch => {
        localStorage.removeItem('lavanyasHennaAdminToken');
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('user_id')
        localStorage.removeItem('isAuthenticated')
        dispatch(authLogout());
    }
}