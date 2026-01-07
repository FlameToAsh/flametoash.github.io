'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"flutter_bootstrap.js": "feff71fffaed7adeeca0a5a4a7b3525c",
"version.json": "be1ee0506b23a7c2a6f54e19181b6d0a",
"favicon.ico": "f3b092fc05e49f362641fe2ec06877a4",
"index.html": "eb936bba07ece36d12ed2ecea148b00f",
"/": "eb936bba07ece36d12ed2ecea148b00f",
"apple-touch-icon.png": "a9bf783aeeaad5e5214d2b8fed9dc949",
"CNAME": "749b9e5364ae41709af6cebecd2867e1",
"main.dart.js": "a0920a5a4cf0d0bfa2795571ebd615cd",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "cd24758046fb73821a6971d5e4c7bfc3",
"icons/Icon-192.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"icons/Icon-maskable-192.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"icons/Icon-maskable-512.png": "36b20785aec13f898f21370d408be4bc",
"icons/Icon-512.png": "36b20785aec13f898f21370d408be4bc",
"manifest.json": "4ea07cbc0e769b3e340fafb72e104860",
".git/config": "6ccaa48566d56de283b72bc4d7858bb7",
".git/objects/61/b624d19c5bfa1f66ceadd1cfffa36f2e32902f": "9bd510f5d2a94a6302eec20074500225",
".git/objects/92/05fcdf99a9a565d5fc7504a3985c95f325f4d0": "ca5f2abba36bddea265d319ed8dabb84",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/3b/45c3c79ed37fb03305055a6de83b4a81671f6f": "419d12d525fa0c88ba97715c36c4d8af",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/67/1762ffe3adff9c407d89e48b8152eb12a6f210": "0e3d25d61e6efcded5bbcfb711e174ba",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9d/7bbbee3899f19d9786d96c1fe03d71f30dea39": "84ea5ba5c7a4b08a39a127e72cc79871",
".git/objects/02/3b9b5d7086dba3c79462b9feede1a920a03dcd": "b8cc7434187f89c1eec782453f115a11",
".git/objects/a4/454bb3af3b738710317491252207174f198b84": "4ba38be6c4c676d83860df4ecc9334c0",
".git/objects/b5/bbaf3706c0e3f2e7ed8664c3bc63b8503bcbdb": "23d21a54d2463f0f0622035c1c9fd891",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/8296cceb7f53c24f2c8a1df26e7a50920f296c": "2029cd34c05873f440dcebeedc47bea6",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/94d4d5bcfa9e4326797bad0829c43e9a5d4e0f": "13f8e877cb340d65f5d14d4032a3c530",
".git/objects/ed/9dbe240694928a6be1877fe7f1a03fea31ccb2": "142146475d8b3d8f66c0c72f4fedbaff",
".git/objects/ed/142c6e2d6344cb0415ae68049639ea781616cc": "da836885b96c78c8c737fbeb06e400fa",
".git/objects/4e/5e63ebe1cc3fe7f8a6ab4d2ea88c164153709b": "38d260f7d2034091a16a3daf06758fe8",
".git/objects/4e/4c8544962a9f66646ec7d39e02c82326e275da": "2ecbfa0d74d37304c47b88cbda51a976",
".git/objects/20/c2ae7f63b2f0e27eb7823b672d2e103980c2da": "bd806a18fa2d54c40d3077b6a9252021",
".git/objects/7d/7d6e4529b4390eff4250f147ab4e0ff9cf0577": "3bda77f78d399afa6b46e1371379e844",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1a/3f8d2ed017d4abc40ed2788d4ded426c32c0c1": "48d5bbad3efe65abd23bb0845ae6d695",
".git/objects/86/777a7e1ea5963c6198b46e85035556499b426d": "8e780f5aba0920cf16b5108eec6ed8b8",
".git/objects/72/4eea6528a4597f651135ef6c395c9fcd9b7af5": "0aaa3a25e6674466c1e0fde6ba4b9c1b",
".git/objects/44/1c76b3a548ca885e6ada8a5ee8d429829bd190": "8570f3df5ceb7b1096dc8731704298e8",
".git/objects/88/ff976cc22a94c556f765a154585d7c9dcb00d5": "83cfcb1357969f370eff04e86dd9be43",
".git/objects/9f/e491d1ea42dd44d5469ba5a4a45b5d42a7548d": "26790d22e00019c064ad663f5aa86d0f",
".git/objects/6b/ecb7f33d5ff611ad8d19a830232986d8f930c8": "464b86944a12b2f443e8f14882168083",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/001c398225f95f9ae331241c0a25689e276bc5": "e4d5bef619a70999457fa3baa0f0be41",
".git/objects/5d/15300d7e707f6a29f3d97afd634cb0524dc8b3": "114f2233c3ec47be1f4076e15e7f6723",
".git/objects/91/7a533dbd4d8af3a4b14bbf72d83eabc124a119": "be19d103e05f735cae75a9832cd48eff",
".git/objects/65/5d78d47fcc7699717f6ccba3715c08f95667c6": "56051f8995ecf5d170aced11cb733dec",
".git/objects/65/be9a9c17598275b052d9bd1737906cd3f60da8": "cc9558e7bd65f21b16bdb7e831ea21e3",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/53/2b7654401844ab845cef66bc89247466309368": "beaf4a5f965acfa5dba48c9788f189c9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/55/a80a513510e0e8488d2d8cde86dc5cd3d24dcb": "88951de314d0e329f49aed225be87851",
".git/objects/63/11cfd0d4927bb44eb8e77eaf2f18ad26b63709": "7b531c28eef60ce76c0bd7e6a9aba082",
".git/objects/64/1749bc17111bb0b1bc663a1a41381959b87ece": "ca5f6109521615ad747dcbbefcdebcd6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e27d13cd77abf68eed9c5953e24ad281dc9890": "fb64703ec63edaff140926e818512384",
".git/objects/b1/66e1c218731bd818080b1f981d682c71b11e6d": "5228b69d148591d28421b1fcbfa9c398",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ea/15b050613c731e4b1c04e01507f13d670efc5a": "8bba0eb1d9dd339f7f80ac898791a442",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/882d5bc550cf2dd41e32f1234ba34db9f17c04": "582b2ab006bcd26bf1796db11d2381e7",
".git/objects/fa/0756dc8400c7280ea8adeb7e3bbc915f52d26b": "50f5ec00b39f5f8b2c524423a7513ec9",
".git/objects/ff/17c980b930bde5cd7fb957cc4e7948c7e1e7a8": "b7ac674ba512ca435e8b017c8cc150b7",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9f4f05e4fcea16c02cc4d49b450d8c96c84203": "7b13b3a6c03ab24e81180f3e97e9e146",
".git/objects/77/a706d5d1e524127762258d64b226547e3a8153": "4e511461a4e294d2d4c934cd23cfa68a",
".git/objects/84/c8327dba1d10f14e694419e3100021c12b60cd": "50546622a5f1a0768457d1c16ff7d514",
".git/objects/4a/4567e80a2d8d0ed032c617692c500e8e5ddf3b": "9b10db0f3eaafdac3bdd08c538831fe6",
".git/objects/23/d6d7a939a86a45131427145f1d4a290c79fafc": "968891c92def7d5f562a5952f8eeb6e1",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/49/fd33e39c735c619cec777813d3d9fedef1f307": "041fb12fe55b541f26df830b09201347",
".git/objects/14/7d2e4a75061e90c875b12d2043bf83431508b1": "0a25a90a6f84354b70b831c555c11674",
".git/objects/8e/55e577f288cca7afb8da140a17e248a3a38e6b": "7f018e39d953a4f773889aefa8f12da9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3875f2fbf5158d9653a1a575173259ee",
".git/logs/refs/heads/main": "9164b96cae0438e9a057bac6caa80654",
".git/logs/refs/remotes/origin/HEAD": "488640a315e81610e0171fbfc3170a03",
".git/logs/refs/remotes/origin/main": "3688fc814b51a81d345b996127e4317e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "8f3a039de4ad9fb968f779bfd0a6d2a9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8f3a039de4ad9fb968f779bfd0a6d2a9",
".git/index": "27aded6ece503599afe979dfc366f4bf",
".git/COMMIT_EDITMSG": "19ddd10758de22604bf3fe0de62e52ef",
".git/FETCH_HEAD": "5eaa79544ca2a0af94d0ab19763777c2",
"assets/NOTICES": "e8894dc4fbe956f609985fcd4ee5a251",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e665ac887d3351922913d2494a8f9fb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "16507ec9a759bf6654002044e115c4f4",
"assets/fonts/MaterialIcons-Regular.otf": "737e303810bc78b9defedcfdedba2490",
"assets/assets/images/favicon-16x16.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"assets/assets/images/favicon.ico": "f3b092fc05e49f362641fe2ec06877a4",
"assets/assets/images/apple-touch-icon.png": "a9bf783aeeaad5e5214d2b8fed9dc949",
"assets/assets/images/favicon.png": "cd24758046fb73821a6971d5e4c7bfc3",
"assets/assets/images/logo.png": "6ecc05d5b5d2fab3b45b7e5bc13bb89b",
"assets/assets/images/favicon-32x32.png": "36b20785aec13f898f21370d408be4bc",
"favicon-32x32.png": "36b20785aec13f898f21370d408be4bc",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
