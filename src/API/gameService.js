import { BASE_URL } from "../App";


const gameService = {
    getGames

}; export default gameService;

function getGames() {
    const requestOptions = {
        methods : 'GET',
        headers : {'Application-Type' : 'Application/json'}
    }

    return fetch(`${BASE_URL}/api/`)
}