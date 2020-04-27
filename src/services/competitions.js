
import axios from 'axios';

const apiUrl = 'https://thesportsdb.p.rapidapi.com/1/search_all_teams.php?';
const headers =  {
    "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
	"x-rapidapi-key": "2a5835ec9bmsh0ba83a9f1ec149ap144e47jsnee6cdb1c5976",
}


// export async function getEnglishLeague(){
//     let response =  axios.get(`${apiUrl}${type}`, {headers})
//     return response;
// }


export async function getLeague(type){
    let response =  axios.get(`${apiUrl}${type}`, {headers})
    return response;
}