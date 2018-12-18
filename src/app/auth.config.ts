import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'spa-demo',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',

// -------------

  // responseType: 'code',
  // clientId: '43566db1a0f74438838b74fa71d658a4',
   // + '&response_type=code',


  // scope:
  // // [
  //   // 'user-follow-read',
  //   // 'user-read-private',
  //   // 'user-library-read',
  //   // 'user-read-recently-played',
  //   'user-top-read'
  // // ]
  // ,
  // redirectUri: window.location.origin + '/index.html',

  // loginUrl: 'https://accounts.spotify.com/authorize',
  // issuer: 'https://accounts.spotify.com/authorize',

}
