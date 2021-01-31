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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7749b443f921dbaed026e70e8835d65c"
  },
  {
    "url": "about.html",
    "revision": "c1d4a9873087af30bd1fa168b7c252b8"
  },
  {
    "url": "assets/css/0.styles.13924602.css",
    "revision": "2ea3e7ba4c7deed75dc47c526d6d4bef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.719304c1.js",
    "revision": "6dd648d2a10b4247ff5c6f7911d31dfc"
  },
  {
    "url": "assets/js/11.bbb583ed.js",
    "revision": "a1503cbb3224077d3ce214046c7761ba"
  },
  {
    "url": "assets/js/12.f3b86a9a.js",
    "revision": "9be095f598e50515ec2d4bd7600a7744"
  },
  {
    "url": "assets/js/13.0bb92ce8.js",
    "revision": "0a99d4bcb7d34910ae34d730d6d9dba5"
  },
  {
    "url": "assets/js/14.ca913b2d.js",
    "revision": "a9b593792b47fc637871ee12006ceadf"
  },
  {
    "url": "assets/js/15.caa9059b.js",
    "revision": "0a154761280f099a764c04e3f5156705"
  },
  {
    "url": "assets/js/16.77a43179.js",
    "revision": "979e6b62720d2bb1a0de329e336b195f"
  },
  {
    "url": "assets/js/17.250746f0.js",
    "revision": "1c191bed1a4b91641274278f61d11c84"
  },
  {
    "url": "assets/js/18.de2ce77a.js",
    "revision": "e44b8b50f27a8b47911bc6643d090b3c"
  },
  {
    "url": "assets/js/19.daaadeb6.js",
    "revision": "cca3bfddad326442fa8c62b34f82126e"
  },
  {
    "url": "assets/js/20.3e493a8d.js",
    "revision": "1174b878cf8f4203c98df2a06afbbcf1"
  },
  {
    "url": "assets/js/21.b1257a23.js",
    "revision": "d47213d7dec3d7163d20d0fc22049cec"
  },
  {
    "url": "assets/js/22.e8094df8.js",
    "revision": "4530c9044a45ecdf5e0af463a4c78f5a"
  },
  {
    "url": "assets/js/23.f1d378eb.js",
    "revision": "cdcb62efc665fe5ff8b74299055512dc"
  },
  {
    "url": "assets/js/24.a2e8a099.js",
    "revision": "9fe52f16b29c0703cbf44cf345cacaeb"
  },
  {
    "url": "assets/js/25.29b67d3b.js",
    "revision": "3de93b217c0aac794a99e46600505653"
  },
  {
    "url": "assets/js/26.cdc48ad9.js",
    "revision": "c1f4b3426ff49cf65a03a421a1669070"
  },
  {
    "url": "assets/js/27.2d122fbd.js",
    "revision": "d4b47cd25633bdcb30d1db6e76178bcd"
  },
  {
    "url": "assets/js/28.27804323.js",
    "revision": "f64e0d4beff5e7d42cea07fde1a76ab8"
  },
  {
    "url": "assets/js/29.83a69cc0.js",
    "revision": "49833b2cb2c3ab62720e073eea6fe28e"
  },
  {
    "url": "assets/js/3.b316e861.js",
    "revision": "b5a5aafc9a12bbd66745ff6f77191cfd"
  },
  {
    "url": "assets/js/30.9a05e5f6.js",
    "revision": "9cb9cad030d2dcb78bfe571ce61b1a21"
  },
  {
    "url": "assets/js/31.c3a37011.js",
    "revision": "490b499e1846ef5a5b02ced3fe4ddd26"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.335cf54b.js",
    "revision": "e3210b9fa6d87473b3030b735058e108"
  },
  {
    "url": "assets/js/5.155c6b16.js",
    "revision": "826aaa0eee8fae406e576631e54d56df"
  },
  {
    "url": "assets/js/6.f021cea4.js",
    "revision": "70d06f228785b6f95dadf3544526ea9f"
  },
  {
    "url": "assets/js/7.721e06ee.js",
    "revision": "2aceb9e462b5abe1e6117bbf786e14cb"
  },
  {
    "url": "assets/js/8.9c1b0eb8.js",
    "revision": "b4c96ccccf809c98bff335d788aaa26e"
  },
  {
    "url": "assets/js/9.35230b46.js",
    "revision": "ed71bebf6f152e3edae08161b82fe806"
  },
  {
    "url": "assets/js/app.ebeb5d44.js",
    "revision": "5195c9634c54a564b607814040d84d0f"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "f34481a6abb24398a02e4c773ac839db"
  },
  {
    "url": "en/about.html",
    "revision": "e1f03528dd9d79330bf65bbf1ea5c072"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "06f1383e3d5c59523822d1f578ae6c8d"
  },
  {
    "url": "en/guide/config.html",
    "revision": "5a2138e8004d5db7ed7906b3f0902f48"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "8a2889f8ecb4d4a95371459559222a12"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "694dc5b4151feb6afa5a4272aed1a882"
  },
  {
    "url": "en/guide/index.html",
    "revision": "707119776d007e8ff10f9cf56ba0d61f"
  },
  {
    "url": "en/guide/page.html",
    "revision": "21d111efbf71f308224a2b49b670be9b"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "a6a361c252c68b285ecd54a970349022"
  },
  {
    "url": "en/index.html",
    "revision": "fba35a5810b9199536d072852c0cf56a"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "26c2954e3876c301d9ae3c95555fe1cc"
  },
  {
    "url": "guide/config.html",
    "revision": "02a79894645dbb3ac3bafaf4362a40ba"
  },
  {
    "url": "guide/faq.html",
    "revision": "31aef9c2a1d813c4e84e62bd86f2d100"
  },
  {
    "url": "guide/icon.html",
    "revision": "11995c048e7fb68f6c18ba71da37957e"
  },
  {
    "url": "guide/index.html",
    "revision": "1d7947e5af73d4d4ac19ae57b84dabe1"
  },
  {
    "url": "guide/migrate.html",
    "revision": "876dcb32b6fb972b465d452107c23ee4"
  },
  {
    "url": "guide/page.html",
    "revision": "421a05fd1d4f625604d1f6947b1c0216"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "9e31b01ec2fb19f5d7a7af979950b9ce"
  },
  {
    "url": "index.html",
    "revision": "5ebf4edfa2748fd9e1538f51744381d3"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
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
