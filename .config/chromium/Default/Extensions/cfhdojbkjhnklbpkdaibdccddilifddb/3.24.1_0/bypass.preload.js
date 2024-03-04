/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/bypass/content/public-api.ts
const eventQueue = [];
const maxErrorThreshold = 30;
const maxQueuedEvents = 20;
const processingDelay = 100;
let errorCount = 0;
let processingIntervalId = null;
async function getPayload(event) {
    if (!isTrustedEvent(event)) {
        return null;
    }
    if (!isAuthRequestEvent(event)) {
        return null;
    }
    const payload = (await browser.runtime.sendMessage({
        type: "premium.getAuthPayload",
        signature: event.detail.signature,
        timestamp: event.detail.timestamp
    }));
    return payload;
}
function handleFlattrRequestPayloadEvent(event) {
    if (eventQueue.length >= maxQueuedEvents) {
        return;
    }
    eventQueue.push(event);
    startProcessingInterval();
}
function isAuthRequestEvent(event) {
    return (event.detail &&
        typeof event.detail.signature === "string" &&
        typeof event.detail.timestamp === "number");
}
function isTrustedEvent(event) {
    return (Object.getPrototypeOf(event) === CustomEvent.prototype &&
        !Object.hasOwnProperty.call(event, "detail"));
}
async function processNextEvent() {
    const event = eventQueue.shift();
    if (event) {
        try {
            const payload = await getPayload(event);
            if (!payload) {
                throw new Error("Premium request rejected");
            }
            let detail = { detail: { payload } };
            if (typeof cloneInto === "function") {
                detail = cloneInto(detail, document.defaultView);
            }
            document.dispatchEvent(new CustomEvent("flattr-payload", detail));
            stop();
        }
        catch (ex) {
            errorCount += 1;
            if (errorCount >= maxErrorThreshold) {
                stop();
            }
        }
    }
    if (!eventQueue.length) {
        stopProcessingInterval();
    }
}
function startProcessingInterval() {
    if (processingIntervalId) {
        return;
    }
    void processNextEvent();
    processingIntervalId = setInterval(() => {
        void processNextEvent();
    }, processingDelay);
}
function stopProcessingInterval() {
    if (processingIntervalId !== null) {
        clearInterval(processingIntervalId);
    }
    processingIntervalId = null;
}
function start() {
    document.addEventListener("flattr-request-payload", handleFlattrRequestPayloadEvent, true);
}
function stop() {
    document.removeEventListener("flattr-request-payload", handleFlattrRequestPayloadEvent, true);
    eventQueue.length = 0;
    stopProcessingInterval();
}
start();


;// CONCATENATED MODULE: ./src/bypass/content/index.ts



/******/ })()
;