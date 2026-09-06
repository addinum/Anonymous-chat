# Wavelength — Phase 2 Audit / Repair

Source of truth: Wavelength-Fully-Functional-Final(1).zip

## Repairs in this phase

- Restored the accidentally removed client WebSocket, push-notification, and server-message handling block from the source-of-truth baseline. This was a blocking runtime defect because `connectSocket()` was referenced but missing.
- Restored browser push setup and in-app server event handling.
- Added profile persistence in MongoDB for device name/avatar.
- Inbox contact rendering now reads the current Profile document rather than relying only on an old contact snapshot.
- Added live profile-update propagation to online contacts.
- Restored open inbox threads after a transient WebSocket reconnect.
- Prevented duplicate reconnect timers.
- Applied delivered/read semantics consistently to text, GIF, file, and voice messages when the recipient is actively viewing the thread.
- Preserved Phase 1 reaction, Android Back, call timeout, and compact hang-up changes.

## Verification performed

- `node --check public/script.js` — pass
- `node --check server.js` — pass
- `node --check db.js` — pass
- Confirmed `connectSocket()` and `handleServerMessage()` are present after restoration.
- Confirmed profile persistence functions are exported and used by the server.

## Not claimed as fully verified yet

A real MongoDB + two-browser/two-phone end-to-end test still needs to be run against the deployed environment. In particular:

1. two-client message delivery/read tests;
2. reconnect while a thread is open;
3. pagination with more than 30 messages;
4. file/GIF/voice delivery and reload persistence;
5. WebRTC on different mobile networks, including TURN availability;
6. Android Back behavior on actual Chrome/Android;
7. service-worker push notification behavior on the deployed origin.
