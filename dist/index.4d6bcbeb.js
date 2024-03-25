// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3zq8u":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get("value");
console.log("\u53D7\u3051\u53D6\u3063\u305F\u5024:", value);
// SkyWay SDKから必要なモジュールをインポート
const { nowInSec, SkyWayAuthToken, SkyWayContext, SkyWayStreamFactory, SkyWayRoom, uuidV4 } = skyway_room;
let meid;
// 認証のためのSkyWayAuthTokenを作成
const token = new SkyWayAuthToken({
    jti: uuidV4(),
    iat: nowInSec(),
    exp: nowInSec() + 86400,
    scope: {
        app: {
            id: "cfa04cbf-2888-4109-bafe-de47d2cf4699",
            turn: true,
            actions: [
                "read"
            ],
            channels: [
                {
                    id: "*",
                    name: "*",
                    actions: [
                        "write"
                    ],
                    members: [
                        {
                            id: "*",
                            name: "*",
                            actions: [
                                "write"
                            ],
                            publication: {
                                actions: [
                                    "write"
                                ]
                            },
                            subscription: {
                                actions: [
                                    "write"
                                ]
                            }
                        }
                    ],
                    sfuBots: [
                        {
                            actions: [
                                "write"
                            ],
                            forwardings: [
                                {
                                    actions: [
                                        "write"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}).encode("0mNQLVQNXYRIFUmU8k9g/NEy/t1oghmt4GfTAK0kavM=");
// ...
// ビデオ会議のセットアップを行う非同期関数
(async ()=>{
    // DOM要素を取得
    // const localVideo = document.getElementById('video');
    // const buttonArea = document.getElementById('button-area');
    // const remoteMediaArea = document.getElementById('remote-media-area');
    // const roomNameInput = document.getElementById('room-name');
    const myId = document.getElementById("my-id");
    // const joinButton = document.getElementById('join');
    const time = document.getElementById("timer-display");
    // 合計参加者数を表示する要素
    const totalParticipantsDisplay = document.getElementById("total-participants");
    // SkyWayStreamFactoryを使用してオーディオおよびビデオストリームを作成
    const { audio, video } = await SkyWayStreamFactory.createMicrophoneAudioAndCameraStream();
    // ローカルビデオストリームをビデオ要素にアタッチ
    // video.attach(localVideo);
    // await localVideo.play();
    // // 'join'ボタンのイベントハンドラを設定
    // joinButton.onclick = async () => {
    //     // ルーム名が空の場合は処理を中断
    //     if (roomNameInput.value === '') return;
    // SkyWayContextおよびSkyWayRoomを作成
    const context = await SkyWayContext.Create(token);
    const room = await SkyWayRoom.FindOrCreate(context, {
        type: "p2p",
        name: value || "defaultRoom"
    });
    // ルームに参加し、ユーザー情報を取得
    meid = await room.join();
    // ユーザーのIDを表示
    // myId.textContent = meid.id;
    // Display the room ID
    // const roomIdSpan = document.getElementById('room-id');
    // roomIdSpan.textContent = `Room ID: ${room.id}`;
    // ユーザーのオーディオおよびビデオストリームを公開
    await meid.publish(video);
    // 合計参加者数の初期値を設定
    // let totalParticipants = 0;
    // 合計参加者数を表示する関数
    const updateTotalParticipantsDisplay = ()=>{
        totalParticipantsDisplay.textContent = `\u{53C2}\u{52A0}\u{4EBA}\u{6570}: ${room.publications.length}`;
    };
    // // カウントダウンタイマーの秒数
    var countdownSeconds = 0;
    let array1 = new Array();
    let valuestamp = value + 1;
    //タイマーを表示する関数
    const updateTimer = ()=>{
        time.textContent = `${countdownSeconds}`;
    };
    async function deletedata() {
        //ポイントを追加
        var docRef = firestore.collection(value).doc(meid.id);
        // --- Firestoreに登録する ---
        docRef.set({
            // set関数に対し、引数として「キー：値」の形式で
            // ドキュメントに登録するデータを指定し、set関数を実行する
            date: points
        }).then(()=>{
            // 先の処理が成功した場合、こちらの処理が実行される
            // 今回はalertで成功のメッセージを表示する
            alert("Status saved!");
        }).then(()=>{
            const value2 = value;
            window.location.href = `https://it222103.web.app/src/Ranking.html?value=${value2}`;
        }).catch((error)=>{
            // 先の処理が失敗した場合、こちらの処理が実行される
            // 今回はalertでエラーメッセージを表示する
            alert("Firestore Got an error:", error);
        });
    }
    // カウントダウン用のタイマー関数
    const countdownjikan = ()=>{
        const intervalId = setInterval(function() {
            if (countdownSeconds >= 0) {
                //time.textContent = `Countdown: ${countdownSeconds} seconds`;
                updateTimer();
                countdownSeconds--;
            } else {
                deletedata();
                clearInterval(intervalId); // タイマー停止
            // time.textContent = 'Time expired';
            // ルームから退出などの追加の処理をここに追加
            // コレクション内の全てのドキュメントを取得
            // const querySnapshot = collectionRef.get();
            // // ドキュメントを削除
            // querySnapshot.forEach((doc) => {
            //     doc.ref.delete();
            // });
            }
        }, 1000);
    };
    // 初期合計参加者数を表示
    updateTotalParticipantsDisplay();
    var docRef = firestore.collection(valuestamp).doc("stamp");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            var currentDate = new Date();
            var timestamp = currentDate.getTime();
            var mydata = doc.data();
            var curStamp = mydata.time;
            countdownSeconds = Math.floor(curStamp / 1000 - timestamp / 1000);
            console.log(curStamp);
            console.log(countdownSeconds);
            countdownjikan();
        } else {
            // ない場合
            //タイマー呼び出す関数
            countdownSeconds = 60;
            countdownjikan();
            //タイムスタンプ+タイマーの時間分の処理
            var currentDate = new Date();
            var timestamp = currentDate.getTime();
            var curStamp = timestamp + countdownSeconds * 1000;
            //firebaseに格納する場所
            var docRef = firestore.doc(valuestamp + "/stamp");
            // --- Firestoreに登録する ---
            docRef.set({
                //stampの値が入ってる変数を:の後に書いてね
                time: curStamp
            });
            console.log(curStamp);
        }
    });
    // リモートストリームを購読およびアタッチする関数
    const subscribeAndAttach = (publication)=>{
        // 現在のユーザーの発行物であればスキップ
        if (publication.publisher.id === meid.id) return;
        // // 合計参加者数を更新
        // totalParticipants++;
        //updateTimer();
        updateTotalParticipantsDisplay();
    };
    // 既存の発行物を購読およびアタッチ
    room.publications.forEach(subscribeAndAttach);
    console.log(subscribeAndAttach + "\u3067\u3059");
    console.log(room.publications);
    // 新しいストリームが発行されたときのイベントリスナを設定
    room.onStreamPublished.add((e)=>subscribeAndAttach(e.publication));
// // ルームから抜ける処理
// const leaveRoom = async () => {
//     // ルームから退出
//     await room.leave();
//     // 合計参加者数を減算
//     room.publications.length--;
//     updateTotalParticipantsDisplay();
// };
// // Receive timer updates from other participants
// room.onDataReceived.add((data) => {
//     if (data.type === 'timerUpdate' && typeof data.value === 'number') {
//         countdownSeconds = data.value;
//         updateTimer();
//     }
// });
// };
})();
//firebaseとの紐づけ
const firebaseConfig = {
    apiKey: "AIzaSyCY_ov4lmtL4m2g1q-6nIAeO03aUx9LVTA",
    authDomain: "hosting-75e13.firebaseapp.com",
    projectId: "hosting-75e13",
    storageBucket: "hosting-75e13.appspot.com",
    messagingSenderId: "656533366110",
    appId: "1:656533366110:web:d9c8aab06373ceb39f9bcf",
    measurementId: "G-66JHM7NZQG"
};
//firestore DBとの連結
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const saveButton = document.querySelector("#saveButton");
const checkColorTypeMatch = document.querySelector("#checkColorTypeMatch");
//変数の定義
let userColorTypeValue;
let timer;
let countdown = 10;
//点数の変数
let points = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const colorDisplay = document.getElementById("color-display");
    const ctx = canvas.getContext("2d");
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then((stream)=>{
        video.srcObject = stream;
    }).catch((error)=>{
        console.error("Error accessing camera: ", error);
    });
    video.addEventListener("loadedmetadata", ()=>{
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });
    video.addEventListener("play", ()=>{
        function processFrame() {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);
            const pixelData = imageData.data;
            const averageColor = getAverageColor(pixelData);
            colorDisplay.style.backgroundColor = `rgb(${averageColor.r}, ${averageColor.g}, ${averageColor.b})`;
            requestAnimationFrame(processFrame);
        }
        processFrame();
    });
    function getAverageColor(pixelData) {
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        for(let i = 0; i < pixelData.length; i += 4){
            totalR += pixelData[i];
            totalG += pixelData[i + 1];
            totalB += pixelData[i + 2];
        }
        const numPixels = pixelData.length / 4;
        const avgR = Math.round(totalR / numPixels);
        const avgG = Math.round(totalG / numPixels);
        const avgB = Math.round(totalB / numPixels);
        return {
            r: avgR,
            g: avgG,
            b: avgB
        };
    }
    const colorTypes = [
        "\u8D64",
        "\u7DD1",
        "\u9752",
        "\u9ED2"
    ];
    let randomColorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    const randomColor = {
        "\u8D64": [
            255,
            0,
            0
        ],
        "\u7DD1": [
            0,
            255,
            0
        ],
        "\u9752": [
            0,
            0,
            255
        ],
        "\u9ED2": [
            0,
            0,
            0
        ]
    }[randomColorType];
    userColorTypeValue = randomColorType;
    document.getElementById("iroValue").innerText = randomColorType;
    document.getElementById("color-display").style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    document.getElementById("iro").style.borderBottom = `6px solid rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
});
checkColorTypeMatch.addEventListener("click", function() {
    const colorDisplay = document.getElementById("color-display");
    // Validate and compare user-specified color type with camera-detected color type
    const style = getComputedStyle(colorDisplay);
    const backgroundColor = style.backgroundColor;
    const cameraColorType = getClosestColorType(backgroundColor);
    if (userColorTypeValue === cameraColorType) {
        // alert('Color type matched!');
        incrementPoints();
        // 一致した場合は再度ランダムな色を設定
        setRandomColor();
    }
});
function incrementPoints() {
    points++;
    document.getElementById("pointValue").innerText = points;
}
function setRandomColor() {
    const colorTypes = [
        "\u8D64",
        "\u7DD1",
        "\u9752",
        "\u9ED2"
    ];
    let randomColorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    const randomColor = {
        "\u8D64": [
            255,
            0,
            0
        ],
        "\u7DD1": [
            0,
            255,
            0
        ],
        "\u9752": [
            0,
            0,
            255
        ],
        "\u9ED2": [
            0,
            0,
            0
        ]
    }[randomColorType];
    userColorTypeValue = randomColorType;
    document.getElementById("iroValue").innerText = randomColorType;
    document.getElementById("color-display").style.borderBottom = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    document.getElementById("iro").style.borderBottom = `6px solid rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
}
function getClosestColorType(rgbColor) {
    const colorTypes = {
        "\u8D64": [
            255,
            0,
            0
        ],
        "\u7DD1": [
            0,
            255,
            0
        ],
        "\u9752": [
            0,
            0,
            255
        ],
        "\u9ED2": [
            0,
            0,
            0
        ]
    };
    const rgbMatch = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    let closestColorType = "";
    let closestColorTypeDistance = Infinity;
    for(const type in colorTypes){
        const typeColor = colorTypes[type];
        const distance = getColorDistance(typeColor, [
            r,
            g,
            b
        ]);
        if (distance < closestColorTypeDistance) {
            closestColorType = type;
            closestColorTypeDistance = distance;
        }
    }
    return closestColorType;
}
function getColorDistance(color1, color2) {
    const squaredDist = color1.reduce((acc, val, index)=>acc + Math.pow(val - color2[index], 2), 0);
    return Math.sqrt(squaredDist);
}

},{}]},["3zq8u","gLLPy"], "gLLPy", "parcelRequire2d8a")

//# sourceMappingURL=index.4d6bcbeb.js.map
