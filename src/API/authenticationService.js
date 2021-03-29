
import handleResponse from './handle_response';
import { BehaviorSubject } from 'rxjs'
import { BASE_URL } from '../config';
 const currentAccountSubject = new BehaviorSubject(localStorage.getItem('account'))
const currentTokenSubject = new BehaviorSubject(localStorage.getItem('token'))

const authenticationService = {
    login,
    logout,
    register,
    getCurrentTokenValue,
    getCurrentAccountValue
}; export default authenticationService


function getCurrentTokenValue() {return currentTokenSubject.value}
function getCurrentAccountValue() {return currentAccountSubject.value}
function login(username, password) {
    const url = `${BASE_URL}/api/authentication`
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ username, password })
    }
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(({message, token, account}) => {
            console.log(message)
            localStorage.setItem('account', JSON.stringify(account))
            currentAccountSubject.next(JSON.stringify(account))
            localStorage.setItem('token', token)
            currentTokenSubject.next(token)
        })
}
function register(username, password) {
    const url = `${BASE_URL}/api/accounts`
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ username, password })
    }
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(({message}) => {
            console.log(message)
        })
}
function logout() {
    localStorage.removeItem('token')
    currentTokenSubject.complete()
    localStorage.removeItem('account')
    currentAccountSubject.complete()
}