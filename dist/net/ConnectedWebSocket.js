"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: net/ConnectedWebSocket.kt
// Package: com.lightningkite.butterfly.net
const rxjs_1 = require("rxjs");
const WebSocketFrame_1 = require("./WebSocketFrame");
//! Declares com.lightningkite.butterfly.net.ConnectedWebSocket
class ConnectedWebSocket {
    constructor(url) {
        this.underlyingSocket = null;
        this.read = new rxjs_1.Subject();
        this.ownConnection = new rxjs_1.Subject();
        this.closed = false;
        this.url = url;
        this.resetSocket();
    }
    resetSocket() {
        var _a;
        (_a = this.underlyingSocket) === null || _a === void 0 ? void 0 : _a.close(1000, "Resetting connection");
        const newSocket = new WebSocket(this.url);
        const parent = this;
        newSocket.binaryType = "arraybuffer";
        newSocket.addEventListener("open", (event) => {
            parent.ownConnection.next(this);
        });
        newSocket.addEventListener("error", (event) => {
            if (!closed) {
                this.closed = true;
                parent.ownConnection.error(event);
                parent.read.error(event);
            }
        });
        newSocket.addEventListener("close", (event) => {
            if (!closed) {
                this.closed = true;
                if (event.code == 1000) {
                    parent.ownConnection.complete();
                    parent.read.complete();
                }
                else {
                    parent.ownConnection.error(event);
                    parent.read.error(event);
                }
            }
        });
        newSocket.addEventListener("message", (event) => {
            const d = event.data;
            if (typeof d === "string") {
                parent.read.next(new WebSocketFrame_1.WebSocketFrame(null, d));
            }
            else {
                parent.read.next(new WebSocketFrame_1.WebSocketFrame(new Int8Array(d), null));
            }
        });
        this.underlyingSocket = newSocket;
    }
    complete() {
        var _a;
        (_a = this.underlyingSocket) === null || _a === void 0 ? void 0 : _a.close(1000, undefined);
        this.closed = true;
    }
    next(t) {
        var _a, _b;
        (_a = this.underlyingSocket) === null || _a === void 0 ? void 0 : _a.send((_b = t.text) !== null && _b !== void 0 ? _b : t.binary.buffer);
    }
    error(e) {
        var _a;
        if (!closed) {
            this.ownConnection.error(e);
            this.read.error(e);
            (_a = this.underlyingSocket) === null || _a === void 0 ? void 0 : _a.close(3000, e.message);
            this.closed = true;
        }
    }
    unsubscribe() {
        this.complete();
    }
}
exports.ConnectedWebSocket = ConnectedWebSocket;
ConnectedWebSocket.implementsInterfaceIoReactivexObserver = true;
//# sourceMappingURL=ConnectedWebSocket.js.map