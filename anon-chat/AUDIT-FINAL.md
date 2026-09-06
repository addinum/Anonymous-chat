# Wavelength — Final Static QA / Hardening Pass

## Scope
Final code-level pass over the Phase 5 baseline. Focused on security boundaries, stale WebRTC signaling, payload limits, reply integrity, static-server path safety, and client/server contract consistency.

## Repairs in this pass
- Hardened static-file path containment with `path.resolve()` and a directory-boundary check.
- Added a 16 MB WebSocket `maxPayload` limit so malformed clients cannot submit unbounded frames.
- Added decoded-size validation for base64 file uploads; the client-provided file size can no longer be used alone to bypass the 8 MB limit.
- Added server-side validation that `replyTo` points to a real message in the same two-party conversation.
- Cleared queued WebRTC signaling when a call ends, preventing stale offer/answer/ICE packets from leaking into a later call.
- Added an `npm test` static contract test covering JavaScript syntax, server→DB exports, client→server WebSocket message types, and required HTML element references.

## Verification
- `node --check server.js` — passed
- `node --check db.js` — passed
- `node --check public/script.js` — passed
- `node --check public/sw.js` — passed
- `node scripts/smoke-static.js` — passed
- Full `npm test` command — passed

## Not claimed
A true production-ready certification still requires live testing with MongoDB, two separate browser/device clients, push permissions, and at least two different real network conditions for WebRTC. This environment does not contain the project's npm dependencies or a deployed MongoDB/Render environment, so those live tests are not falsely marked as passed.

## Deployment note
For the strongest WebRTC reliability, configure TURN credentials in Render using `TURN_URLS`, `TURN_USERNAME`, and `TURN_CREDENTIAL`.
