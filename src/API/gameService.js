
import { BASE_URL } from "../config";
import handleResponse from "./handle_response";


const gameService = {
    getGames,
    getTags,
    getGamesByTag,
    getGameByGid

}; export default gameService;
function getGameByGid(gid) {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games/${gid}`, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data
        })
}
function getGamesByTag(_page = 1, _limit = 10, name) {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games?tag=${name}&page=${_page}&limit=${_limit}`, requestOptions)
        .then(handleResponse)
        .then((data) => {
            return data
        })
}
function getGames(_page = 1, _limit = 10) {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games?page=${_page}&limit=${_limit}`, requestOptions)
        .then(handleResponse)
        .then(({ array, _pagination }) => {
            return { array, _pagination }
        })
}
function getTags() {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/tags`, requestOptions)
        .then(handleResponse)
        .then(({ array }) => {
            return array
        })
}