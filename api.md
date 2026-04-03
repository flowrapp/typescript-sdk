# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1PingResponse</a></code>

Methods:

- <code title="get /api/v1/ping">client.v1.<a href="./src/resources/v1/v1.ts">ping</a>() -> V1PingResponse</code>

## Users

## PushTokens

Methods:

- <code title="delete /api/v1/push-tokens/{deviceId}">client.v1.pushTokens.<a href="./src/resources/v1/push-tokens.ts">delete</a>(deviceID) -> void</code>
- <code title="post /api/v1/push-tokens">client.v1.pushTokens.<a href="./src/resources/v1/push-tokens.ts">register</a>({ ...params }) -> void</code>

## Auth

Types:

- <code><a href="./src/resources/v1/auth/auth.ts">TokenResponse</a></code>

Methods:

- <code title="post /api/v1/auth/login">client.v1.auth.<a href="./src/resources/v1/auth/auth.ts">login</a>({ ...params }) -> TokenResponse</code>
- <code title="post /api/v1/auth/token-refresh">client.v1.auth.<a href="./src/resources/v1/auth/auth.ts">refreshToken</a>({ ...params }) -> TokenResponse</code>

### OAuth

Methods:

- <code title="post /api/v1/auth/oauth/github">client.v1.auth.oauth.<a href="./src/resources/v1/auth/oauth.ts">authenticateWithGitHub</a>({ ...params }) -> TokenResponse</code>
- <code title="post /api/v1/auth/oauth/google">client.v1.auth.oauth.<a href="./src/resources/v1/auth/oauth.ts">authenticateWithGoogle</a>({ ...params }) -> TokenResponse</code>

## Admin

## Businesses

Types:

- <code><a href="./src/resources/v1/businesses/businesses.ts">Location</a></code>

### Worklogs

### Invitations

Types:

- <code><a href="./src/resources/v1/businesses/invitations.ts">InvitationResponse</a></code>

### Timesheets

## Invitations

## Worklogs

## Timesheets
