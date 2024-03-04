/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/yt-wall-detection/shared/detection.types.ts
const detectedMessageType = "yt-wall-detection.detected";

;// CONCATENATED MODULE: ./src/yt-wall-detection/shared/detection.ts
const isEnabled = false;

;// CONCATENATED MODULE: ./src/yt-wall-detection/content/detection.ts

const observer = new MutationObserver(handleMutations);
const selector = "ytd-enforcement-message-view-model";
function handleMutations(mutations) {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (!isElement(node)) {
                continue;
            }
            if (!node.matches(selector)) {
                continue;
            }
            const message = { type: detectedMessageType };
            void browser.runtime.sendMessage(message);
            observer.disconnect();
            return;
        }
    }
}
function isElement(candidate) {
    return candidate instanceof Element;
}
function start() {
    if (!isEnabled) {
        return;
    }
    observer.observe(document, {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    });
}
start();

;// CONCATENATED MODULE: ./src/yt-wall-detection/content/index.ts


/******/ })()
;