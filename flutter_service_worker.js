'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1eb6b725d0be61adc15adc034370cb52",
"assets/AssetManifest.json": "5decc6260fec753a4c096031998fe17d",
"assets/assets/1.pdf": "c876afec824862266ed09121facad300",
"assets/assets/2.pdf": "3a981574639ebfb2e171f9bf2b23515f",
"assets/assets/3.pdf": "80dd120d2c5ba5fe88e63098a1afd045",
"assets/assets/4.pdf": "86c4c50174d65e933435660154a1c7d4",
"assets/assets/5.pdf": "60edbae6d34e8cef32d7df583c6193f3",
"assets/assets/auto%2520courses.pdf": "d90367f6581f740980ccd4d1367d2fff",
"assets/assets/auto1.pdf": "b651b8b213408df79051a7c49366051d",
"assets/assets/com%2520courses.pdf": "ee72237bfa6a304ad374a4a76b889b00",
"assets/assets/comm1.pdf": "cdbb8944f12205abe9d58ef88945a4cb",
"assets/assets/con%2520courses.pdf": "6e44c47cc5585bae410fbd33e2f8e837",
"assets/assets/con1.pdf": "e85504ece3bf2ad747a70aaccd53a330",
"assets/assets/cs%2520courses.pdf": "b5f20ef5bd1559021c768e5066dbd6c7",
"assets/assets/cs1.pdf": "2c1c434c8264241c12ca4f78baf83ee0",
"assets/assets/fonts/angelina.ttf": "a29eca2b4bcc28242f29c9c279c9e2ea",
"assets/assets/images/back5.jpg": "03fc4bf0786c1cb3e2c27e323ec5cd79",
"assets/assets/images/fee1.jpeg": "f067de2be2fc6cb7118b448ed25e622f",
"assets/assets/images/fee2.jpeg": "b234f9c8db35c697d77748d35554b47f",
"assets/assets/images/fee3.jpeg": "e1de98b98681d1b81403a6487983714b",
"assets/assets/images/fee_logo.png": "7b4539182b7c07c4aaa5a57b226ed234",
"assets/assets/images/icon2.jpg": "227224aa4d4af7cd305fd283cd125932",
"assets/assets/images/lab%2520background.jpg": "9051a9370c80cd42c07de4d6bcbc41d1",
"assets/assets/images/splash2.jpg": "6797008732eca3f5d7303a3ac748083b",
"assets/assets/med1.pdf": "4d1c407ded744ea59cc6077d00592c39",
"assets/assets/medical%2520courses.pdf": "69000546d162dd555a5e20f38b26909a",
"assets/assets/net1.pdf": "f16a4e2009f769c18a22c5b9f69f2230",
"assets/assets/network%2520course.pdf": "5ec5657428efe26ab2f0018ec0118a4f",
"assets/assets/syber%2520courses.pdf": "987b22f1ce2c163c8cf83485a0101bee",
"assets/assets/syber1.pdf": "681cfc9659a7a061c866608dd3057259",
"assets/FontManifest.json": "ccfc71abcac5cf744614ef2da236de88",
"assets/fonts/MaterialIcons-Regular.otf": "e4a19498897119b4befb5908824e3ea9",
"assets/images/0.jpg": "18b17f29c0f82cdd325df89ddd0ea2a2",
"assets/images/1.jpg": "6cd2a0159d174a16d2342e33a3e1f46c",
"assets/images/11.jpg": "675b9bd694bd7c96d3d17b0b7eea6805",
"assets/images/2.jpg": "1fa92bf680091151b239f7fdf60952c5",
"assets/images/22.jpg": "1d65b6f622f7127b13a216e9b73c025c",
"assets/images/3.jpg": "33aef6ea300f99087c7f1a7bf2757379",
"assets/images/33.jpg": "c4098e629f5ca918f94b77cb3a179393",
"assets/images/4.jpg": "bfaada4657127e24db055d21fc4a863d",
"assets/images/44.jpg": "02389a148eb9eab9f998f08f24e1baa1",
"assets/images/5.jpg": "f3b917d26bebf9d91c7958011481c614",
"assets/images/6.jpg": "24abb9f643f79bc44d683b6b51b79cc3",
"assets/images/7.jpg": "c649e58ea5cd7021eb18d48b9d949e90",
"assets/images/backend.jpg": "6befde8de24df1e0b4c299876da6d51a",
"assets/images/com.jpg": "df2ab0f09c966f18bd72f672835a8877",
"assets/images/control.jpg": "619b631768a2f6c5c4729ed5c9bbf2cf",
"assets/images/courses.jpg": "7a3bf515f027c016564dc6426c60cd90",
"assets/images/credit.jpg": "e9dbefd80a8b4cb8c734e4b362cbf3a4",
"assets/images/cs.jpg": "a486b9496bc693292f50b81fc29561c1",
"assets/images/data-science-roadmap2.jpg": "6916982039c9ceae9005ea5c881f8862",
"assets/images/dev.png": "c8da10d4552d6bcb38113729ccde8863",
"assets/images/drAyman.JPG": "e76fa5abdd336c1d933e67d4601dc6b4",
"assets/images/embedded.png": "a8818259878895555fdb3c1c93072c52",
"assets/images/fee.png": "9820b47fdd6be85846a36910da9522ad",
"assets/images/feeee.png": "7d6a55f2c816c1e46c1be012599161c5",
"assets/images/FlutterRoadmap.png": "a88c4835d4cd2db063d61287ed2bb04e",
"assets/images/front.png": "2b42109017ebb4aeca564cd56fc36558",
"assets/images/hacker.jpg": "8f89c63ac4cb1b1dc39e5a8af818a02b",
"assets/images/machine_learning.png": "5a1f97f0fb638df933ee1ab319ed6d49",
"assets/images/mechatronics.jpg": "2a3fc69f840ae7f841685002f5289377",
"assets/images/medical.jpg": "3c7346b11841071d3ad780cefc8de2d5",
"assets/images/network.jpg": "bcb408511a6afc44d69cbc2a4037bd09",
"assets/images/network2.jpg": "6609130054baa1579d0f5109146bb708",
"assets/images/OVERVIEW.png": "51c71a08686eabb9e3ae875b7763b303",
"assets/images/rules.pdf": "7e6d15f809087c2b1fcd934f17e79c53",
"assets/images/smile.jpg": "6cc7ed86fd9487a3c32ce65cda463c96",
"assets/images/studyPlan.jpg": "520498fa556aae450936f6122ea034fd",
"assets/images/syber.png": "49427fafefa88973929dc62337cf867a",
"assets/NOTICES": "7c69b07e658ab964d8695802e6531a54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "327baced8be92ed17acdb41d573495de",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "81322b91851bdb0fbf6d0a941b3b81fc",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5c42774b82b769f8c4d41838fa03c76",
"/": "d5c42774b82b769f8c4d41838fa03c76",
"main.dart.js": "5fa94ddc00ff469ad78beb6b2a6201b0",
"manifest.json": "b90d3c25c76d0d79398b2530f73e4669",
"version.json": "dc99cf1577cf385dfce327e3a9c3b996"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
