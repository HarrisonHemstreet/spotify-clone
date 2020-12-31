export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http:localhost:2000/';

const clientId = '582d00c402784566bbb13e407c986753';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;