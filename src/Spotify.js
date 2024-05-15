const clientId = '232228ac8d0a404fb5a7cd760a7d6fb0';
const redirectUri = "tairasu-jammming.netlify.app";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token in URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // Clear the parameters from the URL
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      // Redirect to Spotify authorization
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const token = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&limit=5&q=${term}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.json()).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlayList(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const token = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };
    let userId;

    return fetch('https://api.spotify.com/v1/me', { headers: headers })
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ name: name })
        }).then(response => response.json())
          .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ uris: trackUris })
            });
          });
      });
  }
};

export default Spotify;