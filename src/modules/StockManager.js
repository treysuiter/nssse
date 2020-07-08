import rapidToken from "./RapidKey"

const remoteURL = "http://localhost:5002"

export default {
    get(endpoint, id) {
        return fetch(`${remoteURL}/${endpoint}/${id}`)
            .then(result => result.json())
    },
    getAll(endpoint) {
        return fetch(`${remoteURL}/${endpoint}`)
            .then(result => result.json())
    },
    delete(endpoint, id) {
        return fetch(`${remoteURL}/${endpoint}/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(endpoint, newObj) {
        return fetch(`${remoteURL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(data => data.json())
    },
    update(endpoint, editedAnimal) {
        return fetch(`${remoteURL}/${endpoint}/${editedAnimal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
    },
    getStock(symbol) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://alpha-vantage.p.rapidapi.com/query?symbol=${symbol}&function=GLOBAL_QUOTE`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": `${rapidToken}`
            }
        }).then(data => data.json()).catch(err => {
            console.log(err);
        })
    }
}