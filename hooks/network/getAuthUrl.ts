type AuthorizeParams = {
  client_id: string;
  response_type: string;
  redirect_uri: string;
  scope?: string; //recommended
  state?: string; //recommended, provides protection against attacks such as cross-site request forgery
  code_challenge: string; //set to the code challenge that your app calculated
  code_challenge_method: string; //set to S256
};

const generateRandomString = (length: number) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], '');
};

const sha256 = async (plain: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
};

const base64encode = (input: ArrayBuffer) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

export const getAuthUrl = async () => {
  const codeVerifier = generateRandomString(128);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);
  const authUrl = new URL('https://accounts.spotify.com/authorize');

  //TODO: um store in a better place
  const clientId = '4f75feb86a3d49adb5a7df64f4d8780d';
  const redirectUri = 'http://localhost:8081';

  const params: AuthorizeParams = {
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    scope: 'user-read-private user-read-email',
    state: '1234567890',
  };

  authUrl.search = new URLSearchParams(params).toString();

  return authUrl.toString();
};
