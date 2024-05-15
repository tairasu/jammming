const fetch = require('node-fetch');

const client_id = '232228ac8d0a404fb5a7cd760a7d6fb0';
const client_secret = '2a6f8bacbe704173bd520eedf41b93cd';
const redirect_uri = 'https://tairasu-jammming.netlify.app/callback';

exports.handler = async (event, context) => {
  const { code } = JSON.parse(event.body);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri
    })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};