'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"flutter_bootstrap.js": "83203ddc5dc13ce50788e71895ec675e",
"version.json": "be1ee0506b23a7c2a6f54e19181b6d0a",
"favicon.ico": "f3b092fc05e49f362641fe2ec06877a4",
"index.html": "dc8823c98d1cc4bf7e1879f1d76d6817",
"/": "dc8823c98d1cc4bf7e1879f1d76d6817",
"apple-touch-icon.png": "a9bf783aeeaad5e5214d2b8fed9dc949",
"main.dart.js": "3820d53b612a58fd23a124f374c095e2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "cd24758046fb73821a6971d5e4c7bfc3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c2d722f799d489638296ece0295abc9e",
".git/config": "0a551cbce70c9ff74a4b6228c115e658",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/8fab49f063de991a7fe1bb9e641bdf9954e123": "c534dc1c5120b8bc8434ec521253db07",
".git/objects/94/67fc5b4f4555ed93fd4ca9adba4d60b1dc036d": "403565dc68daee910ab74962a502df89",
".git/objects/0e/4aad3f58ea546277b73c9660adc1a03b02c544": "dac9006383bfc137044caf40a932d41d",
".git/objects/a4/454bb3af3b738710317491252207174f198b84": "4ba38be6c4c676d83860df4ecc9334c0",
".git/objects/bb/138a4ec00aecd72b6c910149b6e6325e81b6d8": "2ab5d15069b8d64cfb4494842b549f47",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/ba67316dbdf36430c9687e801812de68be3866": "7ecd10cecae1fe4934795931526b0298",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/fc3f18c446fbdee1dd89dadba2069ecc533663": "89525a06ce192b8deaf05bdc0110026f",
".git/objects/e2/3fea400b9c1c1d5a7f84f8b1bc5eb1461202ea": "7a3c248972b378f351b67d7f6f0d7183",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/22a4718f0e9470826c7877610608e4a27f5d3a": "7bd11219fb59e546ebecc02c67567b4d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/499a7762d7250aabd165f89f9a7c008ff394ad": "bc7c114eee2faa860a0111b8ece4864a",
".git/objects/ed/142c6e2d6344cb0415ae68049639ea781616cc": "da836885b96c78c8c737fbeb06e400fa",
".git/objects/4e/5e63ebe1cc3fe7f8a6ab4d2ea88c164153709b": "38d260f7d2034091a16a3daf06758fe8",
".git/objects/27/64b679ebfa0b7a1eaf1ca716dbe3bf28d73871": "520a00e5a5f588dca14a0a6f4c91ecdb",
".git/objects/42/8befdcee56b927be1378c3b8ad144e8a409a10": "9eb6118280c6901f4e3e3b762d13e840",
".git/objects/42/a4bf4b1bd81d7ca4982a20aacc7cf39e8988b8": "1c8c1b60d0be16daabd5e82e0c2e86a2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/964d9ce3209ff93b7ac380b811b51991bea745": "34d41774a8c18e966053a284a29981e1",
".git/objects/1a/bc9c1165544c16524639be6e96f02401804692": "6a3c1eb572c36aac671cc017cc1f9e83",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/4eea6528a4597f651135ef6c395c9fcd9b7af5": "0aaa3a25e6674466c1e0fde6ba4b9c1b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/05af0d0b968f9c0570875489444abc7fdd9044": "7c1a8e5d5a1168132db128bd2fb9f4b4",
".git/objects/09/8949ba7e9042ad6e6dcc6bf3c9f002b153f531": "b5f8bce4b201683469a0fdc7b0b3bbd9",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/29a737ba35caf01c5443d2aa2caa2ce1fb69e5": "7f5a88819d43df9cca1c75e0cca63504",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/137c41809af44703fa2fd672c726d99010bd7c": "7db5b440ad5ac401ea646b7bc70a5f83",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/55674ddd12fbfb6e4a828aebdf62f374bf4d06": "ae24b5bb30063d7c554bd565b4726dfa",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/2da926b5fe198ccb26ce90783b977bc5bc2f95": "1386559f2993a19f43415371c473a65d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/68d8801d31f6f7646d6cc26d689a0f30ceecfa": "19854a42d0080a4c744255d3329a3680",
".git/objects/f9/8330440d9eecc7a6abb46524bcdcd320bdba50": "c5a9bf61f461022fabc865b8fc622dd1",
".git/objects/ff/8f96b9c3739df825284eed13f8bf6042c7c961": "331a28a63f157044c2541bef5ffce735",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/33852391daebe5b9cb7c3d769a79f41fe76174": "c465758f6f20286e98685d207b003a57",
".git/objects/41/d4d994c3e1af20b186cc769a1d7a1d98d4929e": "473a48689626b20d5f1b4616b721e2af",
".git/objects/83/85bea4b120eee20ef828a672115f6149959960": "93aa9bcf3e428b9189671e9e71a56d15",
".git/objects/77/a706d5d1e524127762258d64b226547e3a8153": "4e511461a4e294d2d4c934cd23cfa68a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/d6d7a939a86a45131427145f1d4a290c79fafc": "968891c92def7d5f562a5952f8eeb6e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/55d43bc7a33df150a2e7579077e97ef2a24a19": "0e464f68694025e32e1d75d8b7c3a7cd",
".git/objects/1d/ad3a35289591cfbb5d9c13adc764bfefbcbf4f": "8a162cf1f6e823f2d9db42db0d342415",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/2e/7b82c7ec1e8fef48b28058948beeae7fee5f33": "13e55713590d85f8239058264ee508ca",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/125dd7f5fae448029d2bc9dd10805b4799926a": "13683412939b894aba17b00ce5eb8ce0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33900c2bd5fa688f7018a6b478791acb",
".git/logs/refs/heads/main": "19acd672a151f65f5fd815d502754aeb",
".git/logs/refs/remotes/origin/main": "d485f88ff29e5e045977998df98e8cf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "143390c4c718d4d52ade4118e1bbaadf",
".git/refs/remotes/origin/main": "143390c4c718d4d52ade4118e1bbaadf",
".git/index": "06a1c77b9f8d533bf21389044377c259",
".git/COMMIT_EDITMSG": "047ce2d803195b561777704fa827c971",
"assets/AssetManifest.json": "38f0a6798ec5f1ff09a84ee81b7f0adf",
"assets/NOTICES": "b2ef08a112ac80d4cdb7c3f0d1351b63",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0fdb46fbf4c841190abe96b07c58f461",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "58b2f39fc2ec7dfcf16dcd8e83e5a738",
"assets/fonts/MaterialIcons-Regular.otf": "377087479f74e104f90f12a5779bf491",
"assets/assets/images/favicon-16x16.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"assets/assets/images/favicon.ico": "f3b092fc05e49f362641fe2ec06877a4",
"assets/assets/images/apple-touch-icon.png": "a9bf783aeeaad5e5214d2b8fed9dc949",
"assets/assets/images/favicon.png": "cd24758046fb73821a6971d5e4c7bfc3",
"assets/assets/images/logo.png": "6ecc05d5b5d2fab3b45b7e5bc13bb89b",
"assets/assets/images/favicon-32x32.png": "36b20785aec13f898f21370d408be4bc",
"favicon-32x32.png": "36b20785aec13f898f21370d408be4bc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
