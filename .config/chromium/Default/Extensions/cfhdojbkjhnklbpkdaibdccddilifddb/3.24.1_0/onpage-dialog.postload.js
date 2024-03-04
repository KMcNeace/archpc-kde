/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/core/api/front/api.port.ts
let port;
const connectListeners = new Set();
const disconnectListeners = new Set();
const messageListeners = new Set();
function addConnectListener(listener) {
    connectListeners.add(listener);
    listener();
}
function addDisconnectListener(listener) {
    disconnectListeners.add(listener);
}
function addMessageListener(listener) {
    messageListeners.add(listener);
}
const connect = () => {
    if (port) {
        return port;
    }
    try {
        port = browser.runtime.connect({ name: "ui" });
    }
    catch (ex) {
        port = null;
        disconnectListeners.forEach((listener) => {
            listener();
        });
        return port;
    }
    port.onMessage.addListener((message) => {
        onMessage(message);
    });
    port.onDisconnect.addListener(onDisconnect);
    connectListeners.forEach((listener) => {
        listener();
    });
    return port;
};
function listen({ type, filter, ...options }) {
    addConnectListener(() => {
        if (port) {
            port.postMessage({
                type: `${type}.listen`,
                filter,
                ...options
            });
        }
    });
}
function onDisconnect() {
    port = null;
    setTimeout(() => connect(), 100);
}
function onMessage(message) {
    if (!message.type.endsWith(".respond")) {
        return;
    }
    messageListeners.forEach((listener) => {
        listener(message);
    });
}
function removeDisconnectListener(listener) {
    disconnectListeners.delete(listener);
}

;// CONCATENATED MODULE: ./src/core/api/front/api.ts

const platformToStore = {
    chromium: "chrome",
    edgehtml: "edge",
    gecko: "firefox"
};
const app = {
    get: async (what) => await send("app.get", { what }),
    getInfo: async () => {
        return await Promise.all([
            app.get("application"),
            app.get("platform")
        ]).then(([application, rawPlatform]) => {
            var _a;
            const platform = rawPlatform;
            let store;
            if (application !== "edge" && application !== "opera") {
                store = (_a = platformToStore[platform]) !== null && _a !== void 0 ? _a : "chrome";
            }
            else {
                store = application;
            }
            return {
                application,
                platform,
                store
            };
        });
    },
    listen: (filter) => {
        listen({ type: "app", filter });
    },
    open: async (what, options = {}) => await send("app.open", { what, ...options })
};
const ctalinks = {
    get: async (link, queryParams = {}) => await send("app.get", { what: "ctalink", link, queryParams })
};
const doclinks = {
    get: async (link) => await send("app.get", { what: "doclink", link })
};
const filters = {
    get: async () => await send("filters.get"),
    listen: (filter) => {
        listen({ type: "filters", filter });
    }
};
const notifications = {
    get: async (displayMethod) => await send("notifications.get", { displayMethod }),
    seen: async () => await send("notifications.seen")
};
const prefs = {
    get: async (key) => await send("prefs.get", { key }),
    listen: (filter) => {
        listen({ type: "prefs", filter });
    }
};
const premium = {
    activate: async (userId) => await send("premium.activate", { userId }),
    get: async () => await send("premium.get"),
    listen: (filter) => {
        listen({ type: "premium", filter });
    }
};
const requests = {
    listen: (filter, tabId) => {
        listen({ type: "requests", filter, tabId });
    }
};
async function send(sendType, rawArgs = {}) {
    const args = {
        ...rawArgs,
        type: sendType
    };
    return await browser.runtime.sendMessage(args);
}
const stats = {
    getBlockedPerPage: async (tab) => await send("stats.getBlockedPerPage", { tab }),
    getBlockedTotal: async () => await send("stats.getBlockedTotal"),
    listen: (filter) => {
        listen({ type: "stats", filter });
    }
};
const subscriptions = {
    add: async (url) => await send("subscriptions.add", { url }),
    get: async (options) => await send("subscriptions.get", options),
    getInitIssues: async () => await send("subscriptions.getInitIssues"),
    getRecommendations: async () => await send("subscriptions.getRecommendations"),
    listen: (filter) => {
        listen({ type: "subscriptions", filter });
    },
    remove: async (url) => await send("subscriptions.remove", { url })
};
const api_api = {
    addDisconnectListener: addDisconnectListener,
    addListener: addMessageListener,
    app,
    ctalinks,
    doclinks,
    filters,
    notifications,
    prefs,
    premium,
    requests,
    removeDisconnectListener: removeDisconnectListener,
    subscriptions,
    stats
};
connect();
/* harmony default export */ const front_api = ((/* unused pure expression or super */ null && (api_api)));

;// CONCATENATED MODULE: ./src/core/api/front/index.ts




/* harmony default export */ const front = ((/* unused pure expression or super */ null && (api)));

;// CONCATENATED MODULE: ./src/core/api/shared/api.ts
function isMessage(candidate) {
    return (candidate !== null && typeof candidate === "object" && "type" in candidate);
}
function isPremiumActivateOptions(candidate) {
    return (candidate !== null && typeof candidate === "object" && "userId" in candidate);
}

;// CONCATENATED MODULE: ./src/unload-cleanup/content/unload-cleanup.ts
async function prepareElementForUnload(element, displayValue) {
    const message = {
        type: "unload-cleanup.getClassName"
    };
    const className = await browser.runtime.sendMessage(message);
    if (typeof className === "undefined") {
        return;
    }
    element.classList.add(`${className}--${displayValue}`);
    element.style.display = "none";
}

;// CONCATENATED MODULE: ./src/unload-cleanup/shared/unload-cleanup.types.ts
var DisplayValue;
(function (DisplayValue) {
    DisplayValue["block"] = "block";
})(DisplayValue || (DisplayValue = {}));
const displayValueList = Object.values(DisplayValue);

;// CONCATENATED MODULE: ./src/unload-cleanup/shared/index.ts



;// CONCATENATED MODULE: ./src/onpage-dialog/content/frame-manager.ts




let iframe = null;
let overlay = null;
function handleMessage(message) {
    if (!isMessage(message)) {
        return;
    }
    switch (message.type) {
        case "onpage-dialog.hide":
            hideDialog();
            break;
        case "onpage-dialog.resize":
            if (!iframe) {
                break;
            }
            if (!isResizeMessage(message)) {
                break;
            }
            iframe.style.setProperty("--abp-overlay-onpage-dialog-height", `${message.height}px`);
            break;
        case "onpage-dialog.show":
            if (!isShowMessage(message)) {
                break;
            }
            showDialog(message.platform);
            break;
        default:
    }
}
function hideDialog() {
    if (overlay === null || overlay === void 0 ? void 0 : overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
    }
    iframe = null;
    overlay = null;
}
function isResizeMessage(message) {
    return message.type === "onpage-dialog.resize" && "height" in message;
}
function isShowMessage(message) {
    return message.type === "onpage-dialog.show" && "platform" in message;
}
function showDialog(platform) {
    overlay = document.createElement("div");
    overlay.setAttribute("id", "__abp-overlay-onpage-dialog");
    iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    if (platform !== "gecko") {
        iframe.setAttribute("sandbox", "");
    }
    iframe.addEventListener("load", () => {
        if (!(iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow)) {
            return;
        }
        iframe.contentWindow.postMessage("onpage-dialog.start", "*");
    });
    overlay.appendChild(iframe);
    document.body.appendChild(overlay);
    void prepareElementForUnload(overlay, DisplayValue.block);
    if (platform === "gecko") {
        iframe.setAttribute("sandbox", "");
    }
}
function start() {
    browser.runtime.onMessage.addListener(handleMessage);
    addDisconnectListener(() => {
        stop();
    });
}
function stop() {
    browser.runtime.onMessage.removeListener(handleMessage);
    hideDialog();
}
start();

;// CONCATENATED MODULE: ./src/onpage-dialog/content/index.ts


/******/ })()
;