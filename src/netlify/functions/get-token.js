// netlify/functions/get-token.js
const axios = require('axios');

exports.handler = async (event, context) => {
  const { code } = JSON.parse(event.body);
  const client_id = '232228ac8d0a404fb5a7cd760a7d6fb0';
  const client_secret = '2a6f8bacbe704173bd520eedf41b93cd';
  const redirect_uri = 'https://tairasu-jammming.netlify.app/callback';

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ access_token: response.data.access_token }),
    };
  } catch (error) {
    console.error('Error fetching access token:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch access token' }),
    };
  }
};