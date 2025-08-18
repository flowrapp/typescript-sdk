# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1PingResponse</a></code>

Methods:

- <code title="get /api/v1/ping">client.v1.<a href="./src/resources/v1/v1.ts">ping</a>() -> V1PingResponse</code>

## Users

Types:

- <code><a href="./src/resources/v1/users.ts">UserCreateFromNameResponse</a></code>

Methods:

- <code title="post /api/v1/users">client.v1.users.<a href="./src/resources/v1/users.ts">createFromName</a>({ ...params }) -> UserCreateFromNameResponse</code>
- <code title="put /api/v1/users/password">client.v1.users.<a href="./src/resources/v1/users.ts">updatePassword</a>({ ...params }) -> void</code>

## PushTokens

Types:

- <code><a href="./src/resources/v1/push-tokens.ts">PushTokenDeleteResponse</a></code>
- <code><a href="./src/resources/v1/push-tokens.ts">PushTokenRegisterResponse</a></code>

Methods:

- <code title="delete /api/v1/push-tokens">client.v1.pushTokens.<a href="./src/resources/v1/push-tokens.ts">delete</a>({ ...params }) -> PushTokenDeleteResponse</code>
- <code title="post /api/v1/push-tokens">client.v1.pushTokens.<a href="./src/resources/v1/push-tokens.ts">register</a>({ ...params }) -> PushTokenRegisterResponse</code>

## Auth

Types:

- <code><a href="./src/resources/v1/auth.ts">TokenResponse</a></code>

Methods:

- <code title="post /api/v1/auth/login">client.v1.auth.<a href="./src/resources/v1/auth.ts">login</a>({ ...params }) -> TokenResponse</code>
- <code title="post /api/v1/auth/token-refresh">client.v1.auth.<a href="./src/resources/v1/auth.ts">refreshToken</a>({ ...params }) -> TokenResponse</code>

## Admin

Methods:

- <code title="post /api/v1/admin/register">client.v1.admin.<a href="./src/resources/v1/admin.ts">registerUser</a>({ ...params }) -> void</code>

## Businesses

Types:

- <code><a href="./src/resources/v1/businesses/businesses.ts">Location</a></code>
- <code><a href="./src/resources/v1/businesses/businesses.ts">BusinessListResponse</a></code>
- <code><a href="./src/resources/v1/businesses/businesses.ts">BusinessListUsersResponse</a></code>

Methods:

- <code title="get /api/v1/businesses">client.v1.businesses.<a href="./src/resources/v1/businesses/businesses.ts">list</a>() -> BusinessListResponse</code>
- <code title="get /api/v1/businesses/{businessId}/users">client.v1.businesses.<a href="./src/resources/v1/businesses/businesses.ts">listUsers</a>(businessID, { ...params }) -> BusinessListUsersResponse</code>

### Worklogs

Types:

- <code><a href="./src/resources/v1/businesses/worklogs.ts">WorkLogResponse</a></code>
- <code><a href="./src/resources/v1/businesses/worklogs.ts">WorklogListResponse</a></code>

Methods:

- <code title="get /api/v1/businesses/{businessId}/worklogs">client.v1.businesses.worklogs.<a href="./src/resources/v1/businesses/worklogs.ts">list</a>(businessID, { ...params }) -> WorklogListResponse</code>
- <code title="post /api/v1/businesses/{businessId}/worklogs/clock-in">client.v1.businesses.worklogs.<a href="./src/resources/v1/businesses/worklogs.ts">clockIn</a>(businessID, { ...params }) -> WorkLogResponse</code>

### Invitations

Types:

- <code><a href="./src/resources/v1/businesses/invitations.ts">InvitationResponse</a></code>
- <code><a href="./src/resources/v1/businesses/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /api/v1/businesses/{businessId}/invitations">client.v1.businesses.invitations.<a href="./src/resources/v1/businesses/invitations.ts">create</a>(businessID, { ...params }) -> InvitationResponse</code>
- <code title="get /api/v1/businesses/{businessId}/invitations">client.v1.businesses.invitations.<a href="./src/resources/v1/businesses/invitations.ts">list</a>(businessID, { ...params }) -> InvitationListResponse</code>
- <code title="delete /api/v1/businesses/{businessId}/invitations/{invitationId}">client.v1.businesses.invitations.<a href="./src/resources/v1/businesses/invitations.ts">delete</a>(invitationID, { ...params }) -> void</code>

### Timesheets

Types:

- <code><a href="./src/resources/v1/businesses/timesheets.ts">TimesheetRetrieveWeeklyHoursResponse</a></code>

Methods:

- <code title="get /api/v1/businesses/{businessId}/timesheets/weekly-hours">client.v1.businesses.timesheets.<a href="./src/resources/v1/businesses/timesheets.ts">retrieveWeeklyHours</a>(businessID, { ...params }) -> TimesheetRetrieveWeeklyHoursResponse</code>

## Invitations

Types:

- <code><a href="./src/resources/v1/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="get /api/v1/invitations">client.v1.invitations.<a href="./src/resources/v1/invitations.ts">list</a>({ ...params }) -> InvitationListResponse</code>
- <code title="post /api/v1/invitations/accept">client.v1.invitations.<a href="./src/resources/v1/invitations.ts">accept</a>({ ...params }) -> void</code>
- <code title="post /api/v1/invitations/register">client.v1.invitations.<a href="./src/resources/v1/invitations.ts">register</a>({ ...params }) -> void</code>
