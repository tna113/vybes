import axios from "axios";

const getAccessToken = async () => {
    //define headers, parameters
    const axiosConfig = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    const json = {
        grant_type: "client_credentials",
        client_id: process.env.REACT_APP_SPOTIFY_ID,
        client_secret: process.env.REACT_APP_SPOTIFY_SECRET,
    };

    const data = new URLSearchParams(Object.entries(json)).toString();

    //use axios to make post request
    return axios.post('https://accounts.spotify.com/api/token', data, axiosConfig)
        .then(response => response.data.access_token)
        .catch(err => `error: ${err}`);
}

export default getAccessToken;