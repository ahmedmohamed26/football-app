import axios from 'axios';

const apiUrl = 'https://thesportsdb.p.rapidapi.com/1';
const headers = {
    "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
    "x-rapidapi-key": "2a5835ec9bmsh0ba83a9f1ec149ap144e47jsnee6cdb1c5976",
}



export async function getLeague(type) {
    let response = await axios.get(`${apiUrl}/search_all_teams.php?${type}`, {
        headers
    })
    return response;
}

export async function TeamDetails(idTeam) {
    let response = await axios.get(`${apiUrl}/lookupteam.php?id=${idTeam}`, {
        headers
    })
    return response;
}

export async function NextMatch(idTeam) {
    let response = await axios.get(`${apiUrl}/eventsnext.php?id=${idTeam}`, {
        headers
    })
    return response;
}

export async function LastMatch(idTeam) {
    let response = await axios.get(`${apiUrl}/eventslast.php?id=${idTeam}`, {
        headers
    })
    return response;
}