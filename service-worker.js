/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f406450bf2cef19f254e6c9248bdd74a"
  },
  {
    "url": "about/index.html",
    "revision": "352715454e172ad07da58f67a947e7a5"
  },
  {
    "url": "assets/css/0.styles.f1dbac35.css",
    "revision": "8b2fca3e8860974345f5719a94ee2df4"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.6e643330.js",
    "revision": "2fe5fd493bac1ba3319882b71441825b"
  },
  {
    "url": "assets/js/11.6d570f25.js",
    "revision": "c3d3d8a4f5e9f85c84b08f279f4043eb"
  },
  {
    "url": "assets/js/12.b4922494.js",
    "revision": "619a168b8a39245db1553b312492a497"
  },
  {
    "url": "assets/js/2.da912442.js",
    "revision": "637eebfb2d652fe074e54e32accd495d"
  },
  {
    "url": "assets/js/3.dc3109c1.js",
    "revision": "12273654265bd8fe2ea5445f39ea9eda"
  },
  {
    "url": "assets/js/4.4fe79d9d.js",
    "revision": "48193d94cb428767ff5d43413c9170f5"
  },
  {
    "url": "assets/js/5.53a16281.js",
    "revision": "e40aa7442727d7d699a5040bf94048ca"
  },
  {
    "url": "assets/js/6.efeeec50.js",
    "revision": "93569b791d482c45fa75d8c255aed6cf"
  },
  {
    "url": "assets/js/7.73c5a9ff.js",
    "revision": "6f14f9f393bdc17eae06cbcc7b61f381"
  },
  {
    "url": "assets/js/8.7a3658b0.js",
    "revision": "590f085e15930180f14a02b1ba777a29"
  },
  {
    "url": "assets/js/9.ff37e85c.js",
    "revision": "87a49e9763d4ca92ace5c357b3b9017b"
  },
  {
    "url": "assets/js/app.480d1c93.js",
    "revision": "4eab54dcdeb39424973714b898a37404"
  },
  {
    "url": "hero.jpg",
    "revision": "9db89e10e4fd724e1a6a74647bdad63c"
  },
  {
    "url": "index.html",
    "revision": "764e3485f37df8c20625afafc7bc9b30"
  },
  {
    "url": "project/oddata.html",
    "revision": "f5aef7bf859b7b3bb3f39aead83f1b5d"
  },
  {
    "url": "project/rectbutton.html",
    "revision": "26180abb00aee606d32ed0cc517b33d4"
  },
  {
    "url": "project/todolist.html",
    "revision": "84f7e390935385640fd857637f6f0c24"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
