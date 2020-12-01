"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! Declares com.lightningkite.butterfly.rx.AbstractDisposable
class AbstractDisposable {
    constructor() {
        this.closed = false;
    }
    unsubscribe() {
        if (closed)
            return;
        closed = true;
        this.onDispose();
    }
}
exports.AbstractDisposable = AbstractDisposable;
//# sourceMappingURL=AbstractDisposable.js.map