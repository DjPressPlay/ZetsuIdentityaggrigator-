⚡ Z-Browser Network — Core Outline
1. Identity

Generate unique ID on first run (UUID, wallet, or email).

Store locally (profile.json).

Fields: ID, name, avatar.

2. Connection

Browsers connect to relay server (WebSocket).

Relay handles presence + routing.

Option for direct P2P (WebRTC).

3. Messaging

JSON packets:

Chat

Link share

File drop

Co-browse events

4. Permissions

Popup panel shows: SSL status + site permissions + browser-to-browser permissions.

Allow/Deny per ID (messages, files, collab).

Store rules locally.

5. Presence

Online/offline broadcast on connect/disconnect.

Friend list: add/remove by ID.

Show status (online, offline, away).

6. Extensions

Shared browsing (scrolls/clicks mirrored).

Collaborative tabs.

File sharing.

Shared favorites/bookmarks.
