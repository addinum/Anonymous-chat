# Wavelength — Phase 5 Reliability Audit / Repair

## Scope
Media/file viewer, pagination, reconnect signaling, push endpoint behavior, and WebRTC reliability.

## Repairs
- Added `/api/rtc-config` so TURN credentials can be supplied through Render environment variables rather than hard-coded in client JavaScript.
- Client fetches the RTC configuration on startup and refreshes it before an outgoing call.
- Added a short-lived server-side queue for WebRTC signaling packets when the recipient WebSocket is temporarily disconnected. The queue is drained after identify and expires after 15 seconds.
- Preserved STUN fallback when TURN is not configured.

## Verification
- Static syntax checks performed for server.js and public/script.js.
- Code paths inspected for thread pagination, file viewer, GIF/file/voice size limits, and call state transitions.
- Live MongoDB/WebRTC two-device verification is intentionally not claimed without the deployed environment and real devices.

## Remaining deployment requirement
For reliable calls across restrictive mobile/NAT networks, configure TURN in Render:
- `TURN_URLS` — comma-separated TURN URLs
- `TURN_USERNAME`
- `TURN_CREDENTIAL`

Without those variables, calls continue to use the existing STUN fallback but cannot guarantee connectivity across all networks.
