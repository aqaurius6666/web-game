import { BASE_URL } from '../App';
import authenticationService from './authentication_service';
import handleResponse from './handle_response';

const userService = {
    getUserValue,
}; export default userService;

function getUserValue() {
    const url = `${BASE_URL}/api/account`
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'Application/json',
                    'x-access-token' : authenticationService.getCurrentTokenValue() },
    }
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(({account}) => {
            return account
        })
}