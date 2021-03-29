
import { BASE_URL } from "../config";
import handleResponse from "./handle_response";


const gameService = {
    getGames,
    getTags,
    getGamesByTag

}; export default gameService;
function getGamesByTag(name) {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games?tag=${name}`, requestOptions)
        .then(handleResponse)
        .then(({ array }) => {
            return array
        })
}
function getGames() {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games`, requestOptions)
        .then(handleResponse)
        .then(({ array }) => {
            return array
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