import { BASE_URL } from "../App";
import handleResponse from "./handle_response";


const gameService = {
    getGames

}; export default gameService;

function getGames() {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games`, requestOptions).then(handleResponse)
        .then(data => {
            return data.array
        })
}