"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: net/HttpClient.kt
// Package: com.lightningkite.butterfly.net
const rxjs_1 = require("rxjs");
const ConnectedWebSocket_1 = require("./ConnectedWebSocket");
const operators_1 = require("rxjs/operators");
const HttpModels_1 = require("./HttpModels");
const HttpMediaType_1 = require("./HttpMediaType");
//! Declares com.lightningkite.butterfly.net.HttpClient
class HttpClient {
    constructor() {
        this.GET = "GET";
        this.POST = "POST";
        this.PUT = "PUT";
        this.PATCH = "PATCH";
        this.DELETE = "DELETE";
        //--- HttpClient.ioScheduler
        this.ioScheduler = null;
        //--- HttpClient.responseScheduler
        this.responseScheduler = null;
        this.defaultOptions = new HttpModels_1.HttpOptions();
    }
    call(url, method = HttpClient.INSTANCE.GET, headers = new Map([]), body = null, options = this.defaultOptions) {
        var _a, _b, _c, _d;
        let h = new Array(...headers.entries());
        if (body !== null && body.type !== HttpMediaType_1.HttpMediaTypes.INSTANCE.MULTIPART_FORM_DATA) {
            h.push(["Content-Type", body.type]);
        }
        let cacheString = "default";
        switch (options.cacheMode) {
            case HttpModels_1.HttpCacheMode.Default:
                cacheString = "default";
                break;
            case HttpModels_1.HttpCacheMode.NoStore:
                cacheString = "no-store";
                break;
            case HttpModels_1.HttpCacheMode.Reload:
                cacheString = "reload";
                break;
            case HttpModels_1.HttpCacheMode.NoCache:
                cacheString = "no-cache";
                break;
            case HttpModels_1.HttpCacheMode.ForceCache:
                cacheString = "force-cache";
                break;
            case HttpModels_1.HttpCacheMode.OnlyIfCached:
                cacheString = "only-if-cached";
                break;
        }
        return rxjs_1.from(fetch(url, {
            body: body === null || body === void 0 ? void 0 : body.data,
            cache: cacheString,
            credentials: "omit",
            headers: h,
            method: method
        })).pipe(operators_1.timeout((_a = options.callTimeout) !== null && _a !== void 0 ? _a : (((_b = options.connectTimeout) !== null && _b !== void 0 ? _b : 5000) + ((_c = options.readTimeout) !== null && _c !== void 0 ? _c : 5000) + ((_d = options.writeTimeout) !== null && _d !== void 0 ? _d : 5000))));
    }
    callWithProgress(url, method = HttpClient.INSTANCE.GET, headers = new Map([]), body = null, options = this.defaultOptions, parse) {
        return this.call(url, method, headers, body, options).pipe(operators_1.mergeMap(parse), operators_1.map(x => new HttpModels_1.HttpProgress(HttpModels_1.HttpPhase.Done, 1, x)));
    }
    webSocket(url) {
        return rxjs_1.using(() => {
            const out = new ConnectedWebSocket_1.ConnectedWebSocket(url);
            // out.underlyingSocket =
            return out;
        }, (r) => r.ownConnection);
    }
}
exports.HttpClient = HttpClient;
HttpClient.INSTANCE = new HttpClient();
function approximateCompletion(x) {
    return 1 - 1 / (x * 10000 + 1);
}
//# sourceMappingURL=HttpClient.js.map