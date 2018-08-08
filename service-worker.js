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
    "url": "4.1.png",
    "revision": "c8c28522f5717aa500a84c8c3fae5ef0"
  },
  {
    "url": "4.2.png",
    "revision": "600afd4398f96978bb469ed606553f71"
  },
  {
    "url": "4.3.png",
    "revision": "ecb78ac80cb1dc39f6ce602616167341"
  },
  {
    "url": "4.4.png",
    "revision": "ac634e5feb163d654d618eed78c19a01"
  },
  {
    "url": "4.5.png",
    "revision": "3ce59aef749ebabea414c27930894314"
  },
  {
    "url": "4.6.png",
    "revision": "d274ceba5d1233a1b38f015d3fe7abd3"
  },
  {
    "url": "404.html",
    "revision": "e52d98110248b4f68e7ac565cf788126"
  },
  {
    "url": "about/index.html",
    "revision": "5b8768c07e625cde7153fe1f6c982c96"
  },
  {
    "url": "assets/css/0.styles.1c739c04.css",
    "revision": "79be9e5d96cbebe9fe598b086001ac1b"
  },
  {
    "url": "assets/img/4.1.c8c28522.png",
    "revision": "c8c28522f5717aa500a84c8c3fae5ef0"
  },
  {
    "url": "assets/img/4.2.600afd43.png",
    "revision": "600afd4398f96978bb469ed606553f71"
  },
  {
    "url": "assets/img/4.3.ecb78ac8.png",
    "revision": "ecb78ac80cb1dc39f6ce602616167341"
  },
  {
    "url": "assets/img/4.4.ac634e5f.png",
    "revision": "ac634e5feb163d654d618eed78c19a01"
  },
  {
    "url": "assets/img/4.5.3ce59aef.png",
    "revision": "3ce59aef749ebabea414c27930894314"
  },
  {
    "url": "assets/img/4.6.d274ceba.png",
    "revision": "d274ceba5d1233a1b38f015d3fe7abd3"
  },
  {
    "url": "assets/img/header.3ccc40d8.jpg",
    "revision": "3ccc40d87e3e550f36d3052445ab7028"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/img/system.82c38e1c.png",
    "revision": "82c38e1c38ab40c9794bc696d9b58a11"
  },
  {
    "url": "assets/js/10.651571c2.js",
    "revision": "3d9c12e33109ea4f5514883be6929d17"
  },
  {
    "url": "assets/js/11.1f811c8d.js",
    "revision": "fe9de005241b7b9d6014ead38723f8b4"
  },
  {
    "url": "assets/js/12.5bbba9f2.js",
    "revision": "92b4c4c97351cc26987ffde5141d15b6"
  },
  {
    "url": "assets/js/13.85ff1b30.js",
    "revision": "f8b20c52ceb8d873e4bf3e466f5ab229"
  },
  {
    "url": "assets/js/2.64640439.js",
    "revision": "5d2aac1927fa4fc49f00c1a4a19837c7"
  },
  {
    "url": "assets/js/3.9445ffc4.js",
    "revision": "bfd21deb3eb5bb3162eb786003a5b82b"
  },
  {
    "url": "assets/js/4.27bb9232.js",
    "revision": "a411c37b1add94c83e73c802d17d5580"
  },
  {
    "url": "assets/js/5.5ac1b334.js",
    "revision": "48c6eb17ec9b9606afc01816e926bcd8"
  },
  {
    "url": "assets/js/6.b0723aaa.js",
    "revision": "7a82f59db9bcf372c79ed024cd772253"
  },
  {
    "url": "assets/js/7.7a834577.js",
    "revision": "ad2bf7a0b67cd8c3ea828d37da908098"
  },
  {
    "url": "assets/js/8.61941ecc.js",
    "revision": "41c4209249745906e1778e1e42db102f"
  },
  {
    "url": "assets/js/9.d11a3474.js",
    "revision": "d16237eada57e4531de08f3fea3c08ca"
  },
  {
    "url": "assets/js/app.fe19dc9f.js",
    "revision": "0e1efe420438207a5ddb59b527a80dde"
  },
  {
    "url": "hero.jpg",
    "revision": "9db89e10e4fd724e1a6a74647bdad63c"
  },
  {
    "url": "index.html",
    "revision": "8f881ad1219fa58723b745398fd857c7"
  },
  {
    "url": "project/challange.html",
    "revision": "cfcfd4372265c6dd6b74fb59d96e2008"
  },
  {
    "url": "project/oddata.html",
    "revision": "226818ee13e33ce2706c1d9ab150c06b"
  },
  {
    "url": "project/rectbutton.html",
    "revision": "f4fb3351abe8631d3007cb09a14fb0ef"
  },
  {
    "url": "project/todolist.html",
    "revision": "6a9cd7f93b06a18a35d0d36744ce1175"
  },
  {
    "url": "system.png",
    "revision": "82c38e1c38ab40c9794bc696d9b58a11"
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
