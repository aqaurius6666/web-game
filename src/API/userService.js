import { BASE_URL } from '../config'
import authenticationService from './authenticationService';
import handleResponse from './handle_response';

const userService = {
    getUser,
    resetPassword
}; export default userService;

function resetPassword({ old_password, password }) {
    const url = `${BASE_URL}/api/account`
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            'x-access-token': authenticationService.getCurrentTokenValue()
        },
        body: JSON.stringify({ old_password, password })
    }
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(({ message }) => {
            return message
        })
}
function getUser() {
    const url = `${BASE_URL}/api/account`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'x-access-token': authenticationService.getCurrentTokenValue()
        },
    }
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(({ account }) => {
            return account
        })
}