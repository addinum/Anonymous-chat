# Wavelength — Phase 3 Reliability Audit / Repair

Source of truth lineage: `Wavelength-Fully-Functional-Final(1).zip`, carried forward through Phase 2.

## Repairs

### 1. Thread message de-duplication
A live `inbox_message` can arrive immediately before/after `thread_history`, especially during reconnect. The client now keeps a message-id set for the current thread and skips already-rendered IDs. The set resets when a thread is opened or a fresh history payload replaces the thread view.

### 2. Pagination race protection
The same de-duplication guard also covers older-history pagination. If a message arrives while older messages are being fetched, it will not be rendered twice when the pagination response contains it.

### 3. Same-device WebSocket replacement
If the same device opens/reconnects another WebSocket, the server now closes the previous socket instead of leaving two sockets associated with one device ID. The close handler only removes the device from `deviceOnline` if the closing socket is still the active mapping.

### 4. Incoming call expiry
Incoming call dialogs now expire after 30 seconds and send `call_end` back to the caller. Accept/decline/end paths clear the same timeout so a stale timer cannot close a later call.

## Verification

- `node --check public/script.js` — pass
- `node --check server.js` — pass
- `node --check db.js` — pass
- `node --check public/sw.js` — pass
- Confirmed one `renderedThreadMessageIds` guard is applied before all four message render types.
- Confirmed the same-device socket replacement does not allow the old socket's close handler to delete the new online mapping.
- Confirmed incoming call timeout is cleared on accept, decline, and general call UI cleanup.

## Environment limitation

A local runtime smoke test could not be completed because dependencies are not installed in the extracted workspace (`web-push` was missing); an attempted `npm install` did not complete within the execution window. Therefore no claim is made that a live MongoDB/two-browser/WebRTC test passed in this environment.

## Still requiring real deployment/device verification

- Two-client message send/deliver/read flow
- More-than-30-message pagination under live traffic
- Network drop/reconnect while sending and while a thread is open
- 8 MB file and voice/GIF persistence/reload
- WebRTC across separate mobile networks / TURN
- Android Chrome Back behavior
- Service-worker push on the deployed HTTPS origin
