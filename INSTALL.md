# QISHI v1.6.0 runtime and downloads

[Online experience](https://allen7wang.github.io/qishi-meditation-web/) | [Web runtime archive](https://github.com/allen7wang/qishi-meditation-web/archive/refs/tags/v1.6.0.zip) | [Mobile downloads](https://github.com/allen7wang/qishi-meditation/releases/tag/v1.6.0)

## Web

Extract the archive and rename the folder containing index.html, assets/ and audio/ to qishi-meditation-web. In its parent directory run:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080/qishi-meditation-web/ . This build requires the /qishi-meditation-web/ base path; opening index.html as a file is unsupported. HTTPS or localhost is needed for the PWA/offline service worker. Save sounds and wait for completion before going offline.

Place the SHA256SUMS release attachment in the runtime directory and run `shasum -a 256 -c SHA256SUMS` (Linux: `sha256sum -c SHA256SUMS`). The list covers runtime files; it excludes these documentation files and the checksum list itself.

## Android and iOS

Mobile assets are on the private source repository release page and require access. Android APK is signed for sideloading with the existing Expo debug certificate, not a store distribution key. iOS IPA is unsigned and cannot install directly; use Xcode with your own Apple developer signing or another supported signing path. Do not remove an existing app merely to update: removal can delete its local favorites. Refer to the mobile release installation notes for exact version/build and tested scope.

## Attribution and limits

See audio-credits.md and audio-sources*.json for each recording, author, license, and transformations. The collection is not uniformly original or licensed under a single license. Scene combinations are creative mixes and do not imply simultaneous recording in one location. Technical checks do not establish subjective comfort, medical benefits, physical-device acceptance, or lock-screen reliability.
