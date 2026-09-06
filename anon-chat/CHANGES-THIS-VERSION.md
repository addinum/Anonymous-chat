# What changed in this pass

Fixed every bug found in the deep review of your uploaded project:

## 1. Added a TURN server (likely root cause of garbled/random-sound calls)
Your WebRTC config only had STUN servers. STUN alone frequently fails on
mobile carrier networks (Jio/Airtel-style carrier-grade NAT), producing
exactly the "random sound instead of voice" symptom you described — not a
hard failure, but an unstable, partially-working connection. Added a free
TURN relay (Open Relay Project) as a fallback. This is a shared/rate-limited
free service — fine for a small friend group; if you outgrow it, swap in
paid TURN credentials from Twilio/Xirsys/metered.ca (just edit `rtcConfig`
in `public/script.js`).

## 2. Hang-up button now on the collapsed call bar
Previously you had to tap the bar to expand it before you could end a call.
Now there's a dedicated hang-up button visible immediately, right next to
the collapsed bar — tapping the bar itself still expands it to show
duration/quality/speaker/mute.

## 3. Call timeout + offline detection
- Calling a contact who's offline now gets **instant** feedback ("Offline")
  instead of "Calling…" forever.
- Calling a contact who's online but doesn't answer now times out after 35
  seconds with "No answer" instead of hanging indefinitely.

## 4. Profile (name + avatar) now actually restores on login
Your name/avatar were being saved to the database on every device, but
nothing ever read that data back. This meant logging into your account on
a new browser correctly restored your **contacts and inbox**, but reset
your **name and avatar** to defaults. Now the server sends your saved
profile back right after `identify`, and the client applies it.

## 5. Reactions now check you're actually part of that conversation
Previously anyone who could guess/obtain a message's ID could react to it,
even in a conversation they weren't part of. Now only the two people in
that thread can react to a message in it.

## 6. Removed dead code
Four leftover DOM references (`accountBar`, `accountBarText`, `inboxBtn`,
`inboxBadge`) pointed at elements that no longer exist after the bottom-nav
redesign. They were harmless (properly guarded) but cleaned up for clarity.

## Tested before delivery
- Full calling flow: contact-restricted invites, instant offline feedback,
  reconnect + real call + signal relay + end, non-contact calls correctly
  blocked
- Full messaging flow: text, edit, delete, GIF — all still working
  (no regressions)
- Reaction authorization: a real participant can react, a non-participant
  cannot
- Profile restore: save profile → disconnect → reconnect fresh → correct
  name/avatar come back automatically
- All 125 DOM element references between HTML and JS verified to match
- Server boots cleanly with or without `MONGODB_URI`/`VAPID_PRIVATE_KEY`
  configured
