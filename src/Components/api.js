import React from 'react'

export const api_login = (username, password) => {
    console.log({
        "username": username,
        "password": password
    })
    const option = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }
    console.log(JSON.stringify({ username, password }))
    return fetch("https://it-must-be-ok.herokuapp.com/api/authentication", option)
        .then(resp => resp.json())
        .then(data => {
            const {token} = data
            localStorage.setItem("token", token)
        })
}
export const api_get = () => {
   
    const option = {
        method: "GET",
        headers: { 'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token')}
    }
    return fetch("https://it-must-be-ok.herokuapp.com/api/authentication", option)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
}