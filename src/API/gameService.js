
import { BASE_URL } from "../config";
import handleResponse from "./handle_response";


const gameService = {
    getGames

}; export default gameService;

function getGames() {
    const requestOptions = {
        methods: 'GET',
        headers: { 'Application-Type': 'Application/json' }
    }

    return fetch(`${BASE_URL}/api/games`, requestOptions)
        .then(handleResponse)
        .then(data => {
            console.log(data.array)
            return data.array
        })
}