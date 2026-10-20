const BASE_PATH = new URL('./', self.location.href).pathname
const CACHE_SUFFIX = BASE_PATH === '/' ? '' : ':' + BASE_PATH
const CACHE_NAME = 'qishi-v0.8.0' + CACHE_SUFFIX
const AUDIO_CACHE = 'qishi-audio-v1' + CACHE_SUFFIX
function appPath(path) { return BASE_PATH + path.replace(/^\/+/, '') }
const AUDIO_FILES = [
  '/audio/light-rain.mp3', '/audio/heavy-rain.mp3', '/audio/window-rain.mp3', '/audio/roof-rain.mp3',
  '/audio/nightingale.mp3', '/audio/blackbird.mp3', '/audio/cuckoo.mp3', '/audio/dawn-chorus.mp3',
  '/audio/lake-waves.mp3', '/audio/stream.mp3', '/audio/pine-wind.mp3', '/audio/howling-wind.mp3',
  '/audio/cricket.mp3', '/audio/cicada.mp3', '/audio/campfire.mp3', '/audio/fireplace.mp3',
  '/audio/alpha-beat.mp3', '/audio/theta-beat.mp3', '/audio/delta-beat.mp3',
  '/audio/beta-beat.mp3', '/audio/gamma-beat.mp3',
  '/audio/white-noise.mp3', '/audio/pink-noise.mp3', '/audio/brown-noise.mp3',
  '/audio/blue-noise.mp3', '/audio/violet-noise.mp3', '/audio/velvet-noise.mp3', '/audio/gray-noise.mp3',
  '/audio/singing-bowl-rim.mp3', '/audio/singing-bowl-strike.mp3', '/audio/temple-bell.mp3',
  '/audio/cave-throat-singing.mp3', '/audio/deep-cave.mp3',
  '/audio/warm-drone.mp3', '/audio/deep-drone.mp3', '/audio/sub-hum.mp3',
  '/audio/fan-hum.mp3', '/audio/slow-heartbeat.mp3',
  '/audio/rain-leaves-garden.mp3', '/audio/rain-under-leaves.mp3',
  '/audio/rain-leaves-close.mp3', '/audio/rain-forest-birds.mp3',
  '/audio/rain-grass-close.mp3', '/audio/rain-sycamore-canopy.mp3',
  '/audio/rain-quiet-forest.mp3',
  '/audio/tent-rain.mp3', '/audio/owl.mp3', '/audio/woodpecker.mp3',
  '/audio/pebble-waves.mp3', '/audio/small-waterfall.mp3', '/audio/grass-wind.mp3',
  '/audio/brazil-rain.mp3', '/audio/leaf-wind.mp3', '/audio/reed-pond-wind.mp3',
  '/audio/katydid-night.mp3', '/audio/bees-blossoms.mp3', '/audio/wood-stove-sizzle.mp3',
  '/audio/metal-roof-rain.mp3', '/audio/waterside-loon.mp3', '/audio/fountain.mp3',
  '/audio/cave-drops.mp3', '/audio/bamboo-wind.mp3',
  '/audio/tree-frog-pond.mp3', '/audio/forest-frogs.mp3',
  '/audio/car-rain.mp3',
  '/audio/distant-thunder.mp3',
  '/audio/dawn-thunder.mp3',
  '/audio/park-leaf-rain.mp3',
  '/audio/tall-tree-rain.mp3',
  '/audio/seagull-flock.mp3',
  '/audio/wood-pigeon.mp3',
  '/audio/underwater-river.mp3',
  '/audio/bubbling-brook.mp3',
  '/audio/bamboo-chimes.mp3',
  '/audio/metal-chimes.mp3',
  '/audio/room-chimes.mp3',
  '/audio/umbrella-rain.mp3',
  '/audio/soft-leaf-rain.mp3',
  '/audio/understory-rain.mp3',
  '/audio/robin-song.mp3',
  '/audio/ocean-surf.mp3',
  '/audio/rain-rapids.mp3',
  '/audio/winter-snowstorm.mp3',
  '/audio/vent-wind.mp3',
  '/audio/rain-village-frogs.mp3',
  '/audio/jungle-night.mp3',
  '/audio/greenhouse-rain.mp3',
  '/audio/rain-large-leaves.mp3',
  '/audio/rain-grass-splashes.mp3',
  '/audio/great-tit-willow.mp3',
  '/audio/skylark-song.mp3',
  '/audio/geothermal-bubbles.mp3',
  '/audio/cave-hot-spring.mp3',
  '/audio/dune-sand.mp3',
  '/audio/meadow-grasshoppers.mp3',
  '/audio/wetland-insects.mp3',
  '/audio/coqui-after-rain.mp3',
  '/audio/ceramic-chimes.mp3',
  '/audio/sea-cave-wash.mp3',
  '/audio/underwater-crackle.mp3',
  '/audio/sheltered-cove.mp3',
  '/audio/mountain-spring-creek.mp3',
  '/audio/aspen-dawn-wind.mp3',
  '/audio/palm-wind.mp3',
  '/audio/song-thrush.mp3',
  '/audio/woodland-chorus.mp3',
  '/audio/chaffinch-solo.mp3',
  '/audio/wren-trills.mp3',
  '/audio/binaural-cicadas.mp3',
  '/audio/deep-woods-insects.mp3',
  '/audio/evening-frog-crickets.mp3',
  '/audio/marsh-frogs.mp3',
  '/audio/lake-ice-fractures.mp3',
  '/audio/melting-lake-ice.mp3',
  '/audio/caribbean-dolphins.mp3',
  '/audio/night-roe-deer.mp3',
  '/audio/heart-sutra-mandarin.mp3',
  '/audio/lingyin-temple-chant.mp3',
  '/audio/cambodian-buddhist-chant.mp3',
  '/audio/nichiren-chant.mp3',
  '/audio/om-vocal-texture.mp3',
  '/audio/winter-magpie.mp3',
  '/audio/blue-tit.mp3',
  '/audio/autumn-shore-birds.mp3',
  '/audio/ostrova-waterfall.mp3',
  '/audio/cornwall-lapping.mp3',
  '/audio/esperaza-river.mp3',
  '/audio/dry-reed-breeze.mp3',
  '/audio/fallen-leaf-rain.mp3',
  '/audio/woodland-floor-rain.mp3',
  '/audio/grey-seal.mp3',
  '/audio/coyote-night.mp3',
  '/audio/hail-thunder.mp3',



].map(appPath)

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const response = await fetch(appPath('index.html'), { cache: 'reload' })
    if (!response.ok) throw new Error('App shell unavailable')
    const html = await response.clone().text()
    const bundles = [...html.matchAll(/(?:src|href)="([^"?]+\.(?:js|css))"/g)]
      .map((match) => new URL(match[1], self.location.origin + appPath('index.html')))
      .filter((url) => url.origin === self.location.origin && url.pathname.startsWith(appPath('assets/')))
      .map((url) => url.pathname)
    const cache = await caches.open(CACHE_NAME)
    await cache.put(appPath('index.html'), response.clone())
    await cache.put(BASE_PATH, response)
    await cache.addAll(['icon.svg', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest', 'audio-credits.md', 'audio-sources.json'].map(appPath).concat(bundles))
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const audio = await caches.open(AUDIO_CACHE)
    const oldNames = (await caches.keys()).filter((name) => name.startsWith('qishi-v') && name !== CACHE_NAME && (CACHE_SUFFIX ? name.endsWith(CACHE_SUFFIX) : !name.includes(':')))
    for (const name of oldNames) {
      const old = await caches.open(name)
      let copied = true
      for (const request of await old.keys()) {
        if (!AUDIO_FILES.includes(new URL(request.url).pathname)) continue
        try {
          if (!await audio.match(request)) await audio.put(request, await old.match(request))
        } catch { copied = false }
      }
      // Preserve older downloaded audio if migration runs out of storage.
      if (copied) await caches.delete(name)
    }
    await self.clients.claim()
  })())
})

function rangeResponse(request, cached) {
  return cached.arrayBuffer().then((bytes) => {
    const match = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('range') || '')
    const invalid = () => new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${bytes.byteLength}` } })
    if (!match || (!match[1] && !match[2])) return invalid()
    const start = match[1] ? Number(match[1]) : Math.max(0, bytes.byteLength - Number(match[2]))
    const end = match[1] && match[2] ? Math.min(Number(match[2]), bytes.byteLength - 1) : bytes.byteLength - 1
    if ((!match[1] && Number(match[2]) === 0) || start > end || start >= bytes.byteLength) return invalid()
    return new Response(bytes.slice(start, end + 1), { status: 206, headers: {
      'Content-Type': cached.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${bytes.byteLength}`,
      'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes',
    } })
  })
}

self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(BASE_PATH)) return
  const isAudio = AUDIO_FILES.includes(new URL(request.url).pathname)
  event.respondWith((async () => {
    const cache = await caches.open(isAudio ? AUDIO_CACHE : CACHE_NAME)
    const cached = await cache.match(request.url) || (isAudio ? await caches.match(request.url) : undefined)
    if (isAudio && request.headers.has('range')) return cached ? rangeResponse(request, cached) : fetch(request)
    if (request.mode === 'navigate') {
      try {
        const response = await fetch(request)
        if (response.ok) event.waitUntil(cache.put(appPath('index.html'), response.clone()).catch(() => undefined))
        return response
      } catch { return cached || await cache.match(appPath('index.html')) || Response.error() }
    }
    if (cached) return cached
    const response = await fetch(request)
    if (response.ok && response.status === 200) event.waitUntil(cache.put(request.url, response.clone()).catch(() => undefined))
    return response
  })())
})
