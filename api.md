# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1CheckHealthResponse</a></code>

Methods:

- <code title="get /api/v1/ping">client.v1.<a href="./src/resources/v1/v1.ts">checkHealth</a>() -> V1CheckHealthResponse</code>

## Auth

Types:

- <code><a href="./src/resources/v1/auth.ts">TokenResponse</a></code>

Methods:

- <code title="post /api/v1/auth/login">client.v1.auth.<a href="./src/resources/v1/auth.ts">login</a>({ ...params }) -> TokenResponse</code>
- <code title="post /api/v1/auth/token-refresh">client.v1.auth.<a href="./src/resources/v1/auth.ts">refreshToken</a>({ ...params }) -> TokenResponse</code>

## Me

Types:

- <code><a href="./src/resources/v1/me.ts">MeRetrieveProfileResponse</a></code>

Methods:

- <code title="get /api/v1/me">client.v1.me.<a href="./src/resources/v1/me.ts">retrieveProfile</a>() -> MeRetrieveProfileResponse</code>
- <code title="put /api/v1/me/password">client.v1.me.<a href="./src/resources/v1/me.ts">updatePassword</a>({ ...params }) -> void</code>

## PushTokens

Methods:

- <code title="delete /api/v1/push-tokens/{deviceId}">client.v1.pushTokens.<a href="./src/resources/v1/push-tokens.ts">delete</a>(deviceID) -> void</code>
- <code title="post /api/v1/push-tokens">client.v1.pushTokens.<a href="./src/resources/v1/push-tokens.ts">register</a>({ ...params }) -> void</code>

## Worker

### Businesses

Types:

- <code><a href="./src/resources/v1/worker/businesses/businesses.ts">Session</a></code>
- <code><a href="./src/resources/v1/worker/businesses/businesses.ts">BusinessListResponse</a></code>
- <code><a href="./src/resources/v1/worker/businesses/businesses.ts">BusinessClockViewResponse</a></code>

Methods:

- <code title="get /api/v1/worker/businesses">client.v1.worker.businesses.<a href="./src/resources/v1/worker/businesses/businesses.ts">list</a>() -> BusinessListResponse</code>
- <code title="post /api/v1/worker/businesses/{businessId}/clock-in">client.v1.worker.businesses.<a href="./src/resources/v1/worker/businesses/businesses.ts">clockIn</a>(businessID, { ...params }) -> Session</code>
- <code title="get /api/v1/worker/businesses/{businessId}/clock">client.v1.worker.businesses.<a href="./src/resources/v1/worker/businesses/businesses.ts">clockView</a>(businessID, { ...params }) -> BusinessClockViewResponse</code>

#### Worklogs

Methods:

- <code title="put /api/v1/worker/businesses/{businessId}/worklogs/{worklogId}/clock-out">client.v1.worker.businesses.worklogs.<a href="./src/resources/v1/worker/businesses/worklogs.ts">clockOut</a>(worklogID, { ...params }) -> Session</code>

#### History

Types:

- <code><a href="./src/resources/v1/worker/businesses/history.ts">HistoryDayResponse</a></code>
- <code><a href="./src/resources/v1/worker/businesses/history.ts">HistoryMonthResponse</a></code>
- <code><a href="./src/resources/v1/worker/businesses/history.ts">HistoryWeekResponse</a></code>

Methods:

- <code title="get /api/v1/worker/businesses/{businessId}/history/day">client.v1.worker.businesses.history.<a href="./src/resources/v1/worker/businesses/history.ts">day</a>(businessID, { ...params }) -> HistoryDayResponse</code>
- <code title="get /api/v1/worker/businesses/{businessId}/history/month">client.v1.worker.businesses.history.<a href="./src/resources/v1/worker/businesses/history.ts">month</a>(businessID, { ...params }) -> HistoryMonthResponse</code>
- <code title="get /api/v1/worker/businesses/{businessId}/history/week">client.v1.worker.businesses.history.<a href="./src/resources/v1/worker/businesses/history.ts">week</a>(businessID, { ...params }) -> HistoryWeekResponse</code>

## Manager

### Businesses

Types:

- <code><a href="./src/resources/v1/manager/businesses/businesses.ts">BusinessDashboardResponse</a></code>
- <code><a href="./src/resources/v1/manager/businesses/businesses.ts">BusinessListWorkersResponse</a></code>

Methods:

- <code title="get /api/v1/manager/businesses">client.v1.manager.businesses.<a href="./src/resources/v1/manager/businesses/businesses.ts">dashboard</a>() -> BusinessDashboardResponse</code>
- <code title="get /api/v1/manager/businesses/{businessId}/workers">client.v1.manager.businesses.<a href="./src/resources/v1/manager/businesses/businesses.ts">listWorkers</a>(businessID) -> BusinessListWorkersResponse</code>
- <code title="put /api/v1/manager/businesses/{businessId}/worklogs/{worklogId}">client.v1.manager.businesses.<a href="./src/resources/v1/manager/businesses/businesses.ts">updateWorklog</a>(worklogID, { ...params }) -> Session</code>

#### History

Types:

- <code><a href="./src/resources/v1/manager/businesses/history.ts">HistoryDayResponse</a></code>
- <code><a href="./src/resources/v1/manager/businesses/history.ts">HistoryMonthResponse</a></code>
- <code><a href="./src/resources/v1/manager/businesses/history.ts">HistoryWeekResponse</a></code>

Methods:

- <code title="get /api/v1/manager/businesses/{businessId}/history/day">client.v1.manager.businesses.history.<a href="./src/resources/v1/manager/businesses/history.ts">day</a>(businessID, { ...params }) -> HistoryDayResponse</code>
- <code title="get /api/v1/manager/businesses/{businessId}/history/month">client.v1.manager.businesses.history.<a href="./src/resources/v1/manager/businesses/history.ts">month</a>(businessID, { ...params }) -> HistoryMonthResponse</code>
- <code title="get /api/v1/manager/businesses/{businessId}/history/week">client.v1.manager.businesses.history.<a href="./src/resources/v1/manager/businesses/history.ts">week</a>(businessID, { ...params }) -> HistoryWeekResponse</code>

#### Invitations

Types:

- <code><a href="./src/resources/v1/manager/businesses/invitations.ts">Invitation</a></code>
- <code><a href="./src/resources/v1/manager/businesses/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /api/v1/manager/businesses/{businessId}/invitations">client.v1.manager.businesses.invitations.<a href="./src/resources/v1/manager/businesses/invitations.ts">create</a>(businessID, { ...params }) -> Invitation</code>
- <code title="get /api/v1/manager/businesses/{businessId}/invitations">client.v1.manager.businesses.invitations.<a href="./src/resources/v1/manager/businesses/invitations.ts">list</a>(businessID, { ...params }) -> InvitationListResponse</code>
- <code title="delete /api/v1/manager/businesses/{businessId}/invitations/{invitationId}">client.v1.manager.businesses.invitations.<a href="./src/resources/v1/manager/businesses/invitations.ts">delete</a>(invitationID, { ...params }) -> void</code>

#### Export

Methods:

- <code title="get /api/v1/manager/businesses/{businessId}/export/weekly-timesheet">client.v1.manager.businesses.export.<a href="./src/resources/v1/manager/businesses/export.ts">weeklyTimesheet</a>(businessID, { ...params }) -> Response</code>
