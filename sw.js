const BASE_PATH = new URL('./', self.location.href).pathname
const CACHE_SUFFIX = BASE_PATH === '/' ? '' : ':' + BASE_PATH
const CACHE_NAME = 'qishi-v1.7.0' + CACHE_SUFFIX
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



  '/audio/quiet-train.mp3',
  '/audio/book-pages.mp3',
  '/audio/soft-keyboard.mp3',
  '/audio/coffee-grinder.mp3',
  '/audio/wooden-walk.mp3',
  '/audio/clock-ticks.mp3',
  '/audio/squirrel-calls.mp3',
  '/audio/gibbon-canopy.mp3',
  '/audio/humpback-song.mp3',
  '/audio/snow-walk.mp3',
  '/audio/pencil-writing.mp3',
  '/audio/crochet-hooks.mp3',
  '/audio/soft-paintbrush.mp3',
  '/audio/cup-pour.mp3',
  '/audio/cat-purr.mp3',
  '/audio/dog-snore.mp3',
  '/audio/gravel-walk.mp3',
  '/audio/dry-leaf-walk.mp3',  '/audio/rowboat-oars.mp3',
  '/audio/kayak-paddle.mp3',
  '/audio/mooring-rope.mp3',
  '/audio/marina-rigging.mp3',
  '/audio/sandy-footsteps.mp3',
  '/audio/shallow-wading.mp3',
  '/audio/riverboat-bow.mp3',
  '/audio/sailboat-cabin.mp3',

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
    await cache.addAll(['icon.svg', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest', 'audio-credits.md', 'audio-sources.json', 'audio-sources-v0-7.json', 'audio-sources-v0-8.json', 'audio-sources-v1-5.json', 'audio-sources-v1-6.json', 'audio-sources-v1-7.json'].map(appPath).concat(bundles))
    await self.skipWaiting()
  })())
})

// All audio mutations share one queue per URL. Invalidating before enqueueing a
// deletion prevents a slow, older fetch from restoring a removed download.
const audioVersions = new Map()
const audioWrites = new Map()
const downloadJobs = new Map()
function audioVersion(url) { return audioVersions.get(url) || 0 }
function audioUrl(id) { const path = appPath('audio/' + id + '.mp3'); return AUDIO_FILES.includes(path) ? new URL(path, self.location.origin).href : null }
function audioId(url) { return new URL(url).pathname.slice(appPath('audio/').length, -4) }
function knownAudio(url) { const parsed = new URL(url); return parsed.origin === self.location.origin && AUDIO_FILES.includes(parsed.pathname) }
function inDeployment(url) { try { const parsed = new URL(url); return parsed.origin === self.location.origin && parsed.pathname.startsWith(BASE_PATH) } catch { return false } }
function scopedShell(name) { return name.startsWith('qishi-v') && (CACHE_SUFFIX ? name.endsWith(CACHE_SUFFIX) : !name.includes(':')) }
async function audioCacheNames() { return [AUDIO_CACHE, ...(await caches.keys()).filter(scopedShell)] }
function enqueueAudio(url, action) {
  const previous = audioWrites.get(url) || Promise.resolve()
  const next = previous.catch(() => undefined).then(action)
  audioWrites.set(url, next)
  void next.finally(() => { if (audioWrites.get(url) === next) audioWrites.delete(url) }).catch(() => undefined)
  return next
}
async function completeAudio(response) {
  if (!response || response.status !== 200 || response.headers.has('content-range') || /(?:text\/html|application\/xhtml)/i.test(response.headers.get('content-type') || '')) return null
  const body = await response.clone().arrayBuffer()
  if (!body.byteLength) return null
  const prefix = String.fromCharCode(...new Uint8Array(body, 0, Math.min(body.byteLength, 96)))
  if (/^\s*(?:<!doctype\s+html|<html[\s>])/i.test(prefix)) return null
  const length = response.headers.get('content-length')
  if (!response.headers.has('content-encoding') && length !== null && (!/^\d+$/.test(length) || Number(length) !== body.byteLength)) return null
  const headers = new Headers(response.headers)
  headers.delete('content-encoding')
  headers.set('content-length', String(body.byteLength))
  if (!headers.has('content-type')) headers.set('content-type', 'audio/mpeg')
  return { bytes: body.byteLength, response: new Response(body, { status: 200, headers }) }
}
async function findAudio(url, names) {
  for (const name of names || await audioCacheNames()) {
    const response = await (await caches.open(name)).match(url)
    const valid = await completeAudio(response).catch(() => null)
    if (valid) return valid
  }
  return null
}
async function listAudio() {
  const entries = []
  const names = await audioCacheNames()
  for (const path of AUDIO_FILES) {
    const url = new URL(path, self.location.origin).href
    const found = await findAudio(url, names)
    if (found) entries.push({ id: audioId(url), bytes: found.bytes })
  }
  return { entries, totalBytes: entries.reduce((sum, entry) => sum + entry.bytes, 0) }
}
async function announceAudioChange() {
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: false })
  for (const client of clients) if (inDeployment(client.url)) client.postMessage({ type: 'QISHI_OFFLINE_CHANGED' })
}
async function writeAudio(url, response, expectedVersion, cancelled = () => false) {
  const valid = await completeAudio(response)
  if (!valid) throw new Error('Incomplete audio')
  return enqueueAudio(url, async () => {
    if (audioVersion(url) !== expectedVersion || cancelled()) return false
    const cache = await caches.open(AUDIO_CACHE)
    if (audioVersion(url) !== expectedVersion || cancelled()) return false
    await cache.put(url, valid.response)
    // Cancellation/deletion can happen while the browser is committing a put.
    if (audioVersion(url) !== expectedVersion || cancelled()) { await cache.delete(url); return false }
    return true
  })
}
function invalidateAudio(urls) { for (const url of urls) audioVersions.set(url, audioVersion(url) + 1) }
async function deleteAudio(urls) {
  invalidateAudio(urls)
  const names = await audioCacheNames()
  await Promise.all(urls.map((url) => enqueueAudio(url, async () => {
    for (const name of names) await (await caches.open(name)).delete(url)
  })))
  await announceAudioChange()
  return listAudio()
}
function post(port, message) { try { port.postMessage(message) } catch { /* A closed tab must not reject a cache operation. */ } }
async function downloadAudio(message, clientId, port) {
  if (typeof message.jobId !== 'string' || message.jobId.length > 100 || downloadJobs.has(message.jobId) || [...downloadJobs.values()].some((job) => job.clientId === clientId)) throw new Error('Download already running')
  if (!Array.isArray(message.ids) || message.ids.length > AUDIO_FILES.length) throw new Error('Invalid sounds')
  const ids = [...new Set(message.ids)]
  if (!ids.length || ids.some((id) => typeof id !== 'string' || !audioUrl(id))) throw new Error('Invalid sounds')
  const versions = new Map(ids.map((id) => { const url = audioUrl(id); return [url, audioVersion(url)] }))
  const job = { clientId, cancelled: false, abort: new AbortController() }
  downloadJobs.set(message.jobId, job)
  const failed = new Set()
  let completed = 0
  const progress = (currentId) => post(port, { kind: 'progress', progress: { completed, total: ids.length, currentId, failedIds: [...failed], label: typeof message.label === 'string' ? message.label.slice(0, 80) : '当前组合' } })
  try {
    for (const id of ids) {
      if (job.cancelled) break
      const url = audioUrl(id)
      progress(id)
      try {
        if (audioVersion(url) !== versions.get(url)) throw new Error('Removed during download')
        if (!await findAudio(url)) {
          const response = await fetch(url, { signal: job.abort.signal, cache: 'no-store' })
          if (!await writeAudio(url, response, versions.get(url), () => job.cancelled)) {
            if (job.cancelled) break
            throw new Error('Removed during download')
          }
        }
        if (job.cancelled) break
        completed += 1
      } catch {
        if (job.cancelled) break
        failed.add(id)
      }
      progress(null)
    }
    const snapshot = await listAudio()
    const saved = new Set(snapshot.entries.map((entry) => entry.id))
    const missingIds = ids.filter((id) => !saved.has(id))
    // Re-read actual cache contents: a later deletion/quota error must never be
    // masked by an optimistic per-item completion counter.
    const failedIds = job.cancelled ? ids.filter((id) => failed.has(id)) : missingIds
    await announceAudioChange()
    if (downloadJobs.get(message.jobId) === job) downloadJobs.delete(message.jobId)
    post(port, { kind: 'result', result: { ...snapshot, cancelled: job.cancelled, total: ids.length, completed: ids.filter((id) => saved.has(id)).length, failedIds, missingIds } })
  } finally { if (downloadJobs.get(message.jobId) === job) downloadJobs.delete(message.jobId) }
}
self.addEventListener('message', (event) => {
  const message = event.data
  const port = event.ports && event.ports[0]
  if (!port || !message || message.type !== 'QISHI_OFFLINE' || !event.source || !inDeployment(event.source.url)) return
  const task = (async () => {
    try {
      if (message.action === 'download') { await downloadAudio(message, event.source.id, port); return }
      let result
      if (message.action === 'list') result = await listAudio()
      else if (message.action === 'remove') {
        const url = typeof message.id === 'string' && audioUrl(message.id)
        if (!url) throw new Error('Invalid sound')
        result = await deleteAudio([url])
      } else if (message.action === 'clear') result = await deleteAudio(AUDIO_FILES.map((path) => new URL(path, self.location.origin).href))
      else if (message.action === 'cancel') {
        const job = downloadJobs.get(message.jobId)
        if (job && job.clientId === event.source.id) { job.cancelled = true; job.abort.abort() }
        result = { cancelled: Boolean(job && job.clientId === event.source.id) }
      } else throw new Error('Unknown offline action')
      post(port, { kind: 'result', result })
    } catch { post(port, { kind: 'error', message: '离线存储暂时不可用，请检查浏览器空间后重试。' }) }
  })()
  event.waitUntil(task)
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const audio = await caches.open(AUDIO_CACHE)
    const oldNames = (await caches.keys()).filter((name) => name !== CACHE_NAME && scopedShell(name))
    for (const name of oldNames) {
      const old = await caches.open(name)
      let copied = true
      for (const request of await old.keys()) {
        if (!AUDIO_FILES.includes(new URL(request.url).pathname)) continue
        try {
          const url = request.url
          if (!await completeAudio(await audio.match(request))) {
            const response = await old.match(request)
            if (await completeAudio(response)) await writeAudio(url, response, audioVersion(url))
          }
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
  const isAudio = knownAudio(request.url)
  const audioKey = isAudio ? new URL(url.pathname, self.location.origin).href : null
  const version = isAudio ? audioVersion(audioKey) : 0
  event.respondWith((async () => {
    if (isAudio) {
      const found = await findAudio(audioKey)
      if (found) return request.headers.has('range') ? rangeResponse(request, found.response) : found.response
      const response = await fetch(request)
      if (response.status === 200) event.waitUntil(writeAudio(audioKey, response.clone(), version).then((written) => written ? announceAudioChange() : undefined).catch(() => undefined))
      return response
    }
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(request.url)
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
