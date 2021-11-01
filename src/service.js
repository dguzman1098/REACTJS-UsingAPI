export function fetchCat() {
    return fetch('https://thatcopy.pw/catapi/rest/', {
        method: 'GET'
    }).then(response => response.json())
}